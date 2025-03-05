import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Profile.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'
import { selectLastAccessiblePosition } from '../../redux/slices/positionsSlice'

const title = 'Profil'

const Profile = () => {
	const name = useSelector(state => state.profile.name)
	const lastName = useSelector(state => state.profile.lastName)

	const lastAccessiblePosition = useSelector(selectLastAccessiblePosition)

	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(swapTitle(title))
	}, [dispatch])

	const initials = React.useMemo(() => {
		const firstLetterOfName = name?.[0]?.toUpperCase() || 'i'
		const firstLetterOfLastName = lastName?.[0]?.toUpperCase() || 'f'
		return firstLetterOfName + firstLetterOfLastName
	}, [name, lastName])

	return (
		<section className={styles.root}>
			<Link to='/edit-profile' className={`${styles.gear}`}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
					<path d='M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8.99-5h-1.575c-.008-.022-.036-.107-.046-.129l1.11-1.11a2.011 2.011 0 0 0 0-2.842l-1.4-1.4a2 2 0 0 0-1.421-.588 2 2 0 0 0-1.419.588L15.07 4.612 15 4.58V3.009A2.011 2.011 0 0 0 12.99 1h-1.98A2.011 2.011 0 0 0 9 3.009v1.557l-.086.049-.043.016-1.106-1.109a2 2 0 0 0-1.42-.589 2 2 0 0 0-1.421.588l-1.4 1.4a2.011 2.011 0 0 0 0 2.842l1.1 1.143c-.013.029-.033.063-.043.093H3.01A2.011 2.011 0 0 0 1 11.009v1.982A2.011 2.011 0 0 0 3.01 15h1.575c.008.022.036.107.046.129l-1.11 1.11a2.011 2.011 0 0 0 0 2.842l1.4 1.4a2.059 2.059 0 0 0 2.842 0l1.115-1.115.121.056v1.571A2.011 2.011 0 0 0 11.01 23h1.98A2.011 2.011 0 0 0 15 20.991v-1.557l.129-.065 1.109 1.109a2.058 2.058 0 0 0 2.843 0l1.4-1.4a2.011 2.011 0 0 0 0-2.842l-1.1-1.143c.013-.029.033-.063.043-.093h1.566A2.011 2.011 0 0 0 23 12.991v-1.982A2.011 2.011 0 0 0 20.99 9Zm0 4h-1.569a2.1 2.1 0 0 0-1.466 3.54l1.109 1.124-1.414 1.4-1.11-1.109A2.1 2.1 0 0 0 13 19.42L12.99 21 11 20.991V19.42a2.043 2.043 0 0 0-1.307-1.881 2.138 2.138 0 0 0-.816-.164 2 2 0 0 0-1.417.58l-1.124 1.109-1.4-1.414 1.108-1.108A2.1 2.1 0 0 0 4.579 13L3 12.991 3.01 11h1.569a2.1 2.1 0 0 0 1.466-3.54L4.936 6.336l1.414-1.4 1.11 1.109a2.04 2.04 0 0 0 2.227.419l.018-.007A2.04 2.04 0 0 0 11 4.58L11.01 3l1.99.009V4.58a2 2 0 0 0 1.227 1.845c.026.013.057.027.087.039a2.038 2.038 0 0 0 2.226-.419l1.124-1.109 1.4 1.414-1.108 1.108A2.1 2.1 0 0 0 19.421 11h1.569l.01.009Z' />
				</svg>
				<span className={`${styles.description}`}>Sozlamalar</span>
			</Link>
			<div className={`${styles.img}`}>{initials}</div>
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
