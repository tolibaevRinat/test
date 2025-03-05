import React from 'react'

import styles from './Game.module.scss'

const Game = () => {
	return (
		<>
			<div className={`${styles.progress}`}>
				<div
					style={{ width: '50%' }}
					className={`${styles.progress__inner}`}
				></div>
			</div>
			<h1 className={`${styles.title}`}>
				Что такое useState?
			</h1>
			<ul className={`${styles.list}`}>
				<li className={`${styles.item}`}>
					Это функция для хранения данных компонента
				</li>
				<li className={`${styles.item}`}>
					Это глобальный стейт
				</li>
				<li className={`${styles.item}`}>
					Это когда на ты никому не нужен
				</li>
			</ul>
		</>
	)
}

export default Game
