import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import styles from './Question.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'
import Game from '../../components/Game'
import Result from '../../components/Result'

// Импортируем все вопросы и переименовываем для ясности
import { questions as allQuestions } from '/public/data.js'

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
const shuffleArray = array => {
	const shuffledArray = [...array] // Создаем копию, чтобы не мутировать исходный массив
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}
	return shuffledArray
}

const Question = () => {
	const dispatch = useDispatch()
	const { id: idFromParams } = useParams()

	// Состояние для хранения выбранных для игры вопросов
	const [gameQuestions, setGameQuestions] = React.useState([])
	const [step, setStep] = React.useState(0)
	const [correct, setCorrect] = React.useState(0)

	// Эффект для выбора и перемешивания вопросов при монтировании или смене idFromParams
	React.useEffect(() => {
		if (allQuestions.length > 0) {
			const shuffled = shuffleArray(allQuestions)
			// Выбираем 20 вопросов или все, если их меньше 20
			const selectedQuestions = shuffled.slice(0, Math.min(5, allQuestions.length))
			setGameQuestions(selectedQuestions)
			console.log('Selected questions for this game:', selectedQuestions.length)
			setStep(0) // Сбрасываем текущий шаг
			setCorrect(0) // Сбрасываем счетчик правильных ответов
		}
	}, [idFromParams]) // Запускаем при смене id, если это означает новый тест/набор вопросов

	// Текущий вопрос из выбранного набора gameQuestions
	const currentQuestion = gameQuestions[step]

	const onClickVariant = index => {
		setStep(step + 1)
		// Убедимся, что currentQuestion существует перед проверкой ответа
		if (currentQuestion && index === currentQuestion.correct) {
			setCorrect(correct + 1)
		}
	}

	// Процент прохождения рассчитывается на основе gameQuestions
	const percentage = gameQuestions.length > 0 ? Math.round((step / gameQuestions.length) * 100) : 0
	const percentageCorrect =
		gameQuestions.length > 0 ? Math.round((correct / gameQuestions.length) * 100) : 0

	const position = useSelector(state => state.position.items)
	const findPos = position.find(item => item.id === Number(idFromParams))

	React.useEffect(() => {
		if (findPos && findPos.title) {
			dispatch(swapTitle(findPos.title))
		}
	}, [dispatch, findPos])

	React.useEffect(() => {
		// Убедимся, что gameQuestions загружены и игра завершена
		if (gameQuestions.length > 0 && step === gameQuestions.length) {
			if (percentageCorrect > 50) {
				const currentId = Number(idFromParams)
				const targetId = currentId + 1

				fetch(`https://5931966f88c8cb11.mokky.dev/positions`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP ошибка! статус: ${response.status}`)
						}
						return response.json()
					})
					.then(positionsData => {
						const positionToUpdate = positionsData.find(p => p.id === targetId)

						if (positionToUpdate) {
							fetch(`https://5931966f88c8cb11.mokky.dev/positions/${positionToUpdate.id}`, {
								method: 'PATCH',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									isAccessible: true,
								}),
							})
								.then(patchResponse => {
									if (!patchResponse.ok) {
										throw new Error(`HTTP ошибка! статус: ${patchResponse.status}`)
									}
									return patchResponse.json()
								})
								.then(updatedPosition => {
									console.log(
										'Свойство isAccessible успешно обновлено для позиции:',
										updatedPosition
									)
									// Тут можно добавить обновление состояния в Redux, если это нужно
									// dispatch(updatePositionAccess(targetId, true));
								})
								.catch(error => {
									console.error('Ошибка при обновлении позиции:', error)
								})
						} else {
							console.log(`Позиция с id ${targetId} не найдена в полученных данных.`)
						}
					})
					.catch(error => {
						console.error('Ошибка при запросе данных позиций:', error)
					})
			}
		}
	}, [step, percentageCorrect, idFromParams, gameQuestions, dispatch]) // Обновили зависимости

	// Если gameQuestions еще не сформированы, можно показать заглушку
	if (gameQuestions.length === 0 && allQuestions.length > 0) {
		return <div>Подготовка вопросов...</div>
	}
	// Если вообще нет вопросов (например, ошибка загрузки data.js)
	if (allQuestions.length === 0) {
		return <div>Вопросы не найдены. Проверьте data.js.</div>
	}

	return (
		<section className={styles.root}>
			{/* Используем gameQuestions.length для проверки завершения игры */}
			{step !== gameQuestions.length ? (
				<Game question={currentQuestion} onClickVariant={onClickVariant} percentage={percentage} />
			) : (
				// Передаем gameQuestions в Result для отображения всех вопросов игры
				<Result correct={correct} questions={gameQuestions} percentageCorrect={percentageCorrect} />
			)}
		</section>
	)
}

export default Question
