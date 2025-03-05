import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import styles from './Question.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'
import Game from '../../components/Game'
import Result from '../../components/Result'

const questions = [
	{
		title: 'React - это ... ?',
		variants: ['библиотека', 'фреймворк', 'приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ... ',
		variants: [
			'приложение',
			'часть приложения или страницы',
			'то, что я не знаю что такое',
		],
		correct: 1,
	},
	{
		title: 'Что такое JSX?',
		variants: [
			'Это простой HTML',
			'Это функция',
			'Это тот же HTML, но с возможностью выполнять JS-код',
		],
		correct: 2,
	},
]

const Question = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const position = useSelector(state =>
		state.position.items.find(
			item => item.id === Number(id)
		)
	)

	React.useEffect(() => {
		dispatch(swapTitle(position.title))
	}, [])

	return (
		<section className={styles.root}>
			<Game />
			{/* <Result/> */}
		</section>
	)
}

export default Question
