import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Footer.module.scss'

const Footer = () => {
	const location = useLocation()

	return (
		<footer className={styles.root}>
			<h1 className={`visually-hidden`}>Sayt pasti</h1>
			<div className={`${styles.inner} container`}>
				<Link
					to='/'
					className={`${styles.link} ${
						location.pathname === '/' ? styles.active : ''
					}`}
				>
					<svg
						className={`${styles.icon}`}
						xmlns='http://www.w3.org/2000/svg'
						xmlSpace='preserve'
						viewBox='0 0 486.988 486.988'
					>
						<path d='M16.822 284.968h39.667v158.667c0 9.35 7.65 17 17 17h116.167c9.35 0 17-7.65 17-17V327.468h70.833v116.167c0 9.35 7.65 17 17 17h110.5c9.35 0 17-7.65 17-17V284.968h48.167c6.8 0 13.033-4.25 15.583-10.483 2.55-6.233 1.133-13.6-3.683-18.417L260.489 31.385c-6.517-6.517-17.283-6.8-23.8-.283L5.206 255.785c-5.1 4.817-6.517 12.183-3.967 18.7 2.55 6.516 8.783 10.483 15.583 10.483zm231.2-217.6 181.333 183.6h-24.367c-9.35 0-17 7.65-17 17v158.667h-76.5V310.468c0-9.35-7.65-17-17-17H189.656c-9.35 0-17 7.65-17 17v116.167H90.489V267.968c0-9.35-7.65-17-17-17H58.756l189.266-183.6z' />
					</svg>
					<h2 className={`${styles.title}`}>Asosiy</h2>
				</Link>
				<Link
					to='/profile'
					className={`${styles.link} ${
						location.pathname === '/profile' ? styles.active : ''
					}`}
				>
					<svg
						className={`${styles.icon}`}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 129 129'
					>
						<path d='M64.3 71.6c18 0 32.6-14.6 32.6-32.6S82.3 6.5 64.3 6.5 31.7 21.1 31.7 39s14.6 32.6 32.6 32.6zm0-56.6c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.8-24 24-24zM7.9 122.5h113.2c2.4 0 4.3-1.9 4.3-4.3 0-22.5-18.3-40.9-40.9-40.9h-40C22 77.3 3.6 95.6 3.6 118.2c0 2.4 1.9 4.3 4.3 4.3zm36.6-36.6h40c16.4 0 29.9 12.2 32 28h-104c2.1-15.7 15.6-28 32-28z' />
					</svg>
					<h2 className={`${styles.title}`}>Profil</h2>
				</Link>
			</div>
		</footer>
	)
}

export default Footer
