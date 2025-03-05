import React from 'react'
import { useSelector } from 'react-redux'

import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const title = useSelector(state => state.headerSlice.title)

	const navigation = useNavigate()
	const onClickBackButton = () => navigation(-1)

	const conditions = title === 'Asosiy' || title === 'Profil'

	return (
		<header className={styles.root}>
			<div className={`${styles.inner} container`}>
				<button
					onClick={onClickBackButton}
					className={`${styles.arrow} ${conditions ? 'visually-hidden' : ''}`}
					type='button'
				>
					<img src='/icons/arrow-left.svg' alt='' />
				</button>
				<h1 className={`${styles.title}`}>{title}</h1>
			</div>
		</header>
	)
}

export default Header
