import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Profile.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'
import { selectLastAccessiblePosition } from '../../redux/slices/positionsSlice'

const title = 'Profile'

const Profile = () => {
	const name = useSelector(state => state.profile.name)
	const lastName = useSelector(state => state.profile.lastName)

	const lastAccessiblePosition = useSelector(selectLastAccessiblePosition)

	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(swapTitle(title))
	}, [dispatch])

	return (
		<section className={styles.root}>
			<div className={`${styles.img}`}>RSH</div>
			<ul className={`${styles.list}`}>
				<li className={`${styles.listItem}`}>
					<span>Ism:</span> {name}
				</li>
				<li className={`${styles.listItem}`}>
					<span>Familiya:</span> {lastName}
				</li>
				<li className={`${styles.listItem}`}>
					<span>Lavozim:</span>{' '}
					{lastAccessiblePosition ? lastAccessiblePosition.name : 'Yuklanyapti'}
				</li>
			</ul>
		</section>
	)
}

export default Profile
