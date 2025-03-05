import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Positions.module.scss'
import { fetchPositions } from '../../redux/slices/positionsSlice'

const LOADING_TEXT = 'lavozimlar yuklanyapti'

const Positions = () => {
	const status = useSelector(state => state.position.status)

	const position = useSelector(
		state => state.position.items
	)
	const dispatch = useDispatch()

	const skeleton = [...new Array(20)].map((_, i) => (
		<li key={i} className={`${styles.item}`}>
			<button
				className={`${styles.button}`}
				type='button'
				disabled
			>
				{LOADING_TEXT}
			</button>
		</li>
	))

	const items = position.map(value => (
		<li key={value.id} className={`${styles.item}`}>
			<Link
				className={`${styles.button}`}
				to={
					value.isAccessible ? `/question/${value.id}` : ''
				}
			>
				{value.title}
			</Link>
		</li>
	))

	React.useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		dispatch(fetchPositions(signal))

		return () => {
			controller.abort('Component unmounted')
		}
	}, [])

	return (
		<ul className={styles.root}>
			{status === 'loading' || status === 'error'
				? skeleton
				: items}
		</ul>
	)
}

export default Positions
