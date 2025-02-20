import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Positions.module.scss'
import { fetchPositions } from '../../redux/slices/positionsSlice'

const LOADING_TEXT = 'Savollar yuklanyapti'

const Positions = () => {
	const status = useSelector(state => state.position.status)

	const position = useSelector(state => state.position.items)
	const dispatch = useDispatch()

	React.useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		const getQuestions = async () => {
			try {
				dispatch(fetchPositions(signal))
			} catch (error) {
				console.log('Error in getQuestions', error)
			}
		}

		getQuestions()

		return () => {
			controller.abort('Component unmounted') // Отменяем запрос при размонтировании
		}
	}, [])

	return (
		<ul className={styles.root}>
			{status === 'loading' || status === 'error'
				? [...new Array(20)].map((_, i) => (
						<li key={i} className={`${styles.item}`}>
							<button className={`${styles.button}`} type='button' disabled>
								{LOADING_TEXT}
							</button>
						</li>
				  ))
				: position.map(value => (
						<li key={value.id} className={`${styles.item}`}>
							<button
								disabled={!value.isAccessible}
								className={`${styles.button}`}
								type='button'
							>
								{value.name}
							</button>
						</li>
				  ))}
		</ul>
	)
}

export default Positions
