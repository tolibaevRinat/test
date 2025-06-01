import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Positions.module.scss'
import { fetchPositions } from '../../redux/slices/positionsSlice'

const LOADING_TEXT = 'lavozimlar yuklanyapti'

const Positions = () => {
	const status = useSelector(state => state.position.status)

	const position = useSelector(state => state.position.items)
	const dispatch = useDispatch()

	const firstArray = position.slice(0, 5)
	const secondArray = position.slice(5, 5 + 19)
	const thirdArray = position.slice(5 + 19)

	const skeleton = [...new Array(20)].map((_, i) => (
		<li key={i} className={`${styles.item}`}>
			<button className={`${styles.button}`} type='button' disabled>
				{LOADING_TEXT}
			</button>
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
		<div className={styles.root}>
			{status === 'loading' || status === 'error' ? (
				skeleton
			) : (
				<>
					<h2 className={`${styles.title}`}>Tuman darajasi</h2>

					<ul className={`${styles.list}`}>
						{firstArray.map(el => (
							<li key={el.id} className={`${styles.item}`}>
								<Link
									className={`${styles.button}`}
									to={el.isAccessible ? `/question/${el.id}` : ''}
								>
									{el.title}
								</Link>
							</li>
						))}
					</ul>

					<h2 className={`${styles.title}`}>Хududiy darajasi</h2>

					<ul className={`${styles.list}`}>
						{secondArray.map(el => (
							<li key={el.id} className={`${styles.item}`}>
								<Link
									className={`${styles.button}`}
									to={el.isAccessible ? `/question/${el.id}` : ''}
								>
									{el.title}
								</Link>
							</li>
						))}
					</ul>

					<h2 className={`${styles.title}`}>Respublika darajasi O'zbekiston Respublikasi</h2>

					<ul className={`${styles.list} last-list`}>
						{thirdArray.map(el => (
							<li key={el.id} className={`${styles.item}`}>
								<Link
									className={`${styles.button}`}
									to={el.isAccessible ? `/question/${el.id}` : ''}
								>
									{el.title}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export default Positions
