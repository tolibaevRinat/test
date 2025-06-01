import React from 'react'

import styles from './Game.module.scss'

const Game = ({ question, onClickVariant, percentage }) => {
	return (
		<div className={`${styles.root}`}>
			<div className={`${styles.progress}`}>
				<div style={{ width: `${percentage}%` }} className={`${styles.progress__inner}`}></div>
			</div>
			<h1 className={`${styles.title}`}>{question.title}</h1>
			<ul className={`${styles.list}`}>
				{question.variants.map((text, index) => (
					<li onClick={() => onClickVariant(index)} key={text} className={`${styles.item}`}>
						{text}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Game
