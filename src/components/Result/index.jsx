import React from 'react'

import styles from './Result.module.scss'

const Result = () => {
	return (
		<div className={`${styles.styles}`}>
			<img src='/images/success.png' alt='success' />
			<h2>Вы отгадали 3 ответа из 10</h2>
			<button>Попробовать снова</button>
		</div>
	)
}

export default Result
