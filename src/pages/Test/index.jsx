import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './Test.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'

const title = 'Test'

const Test = () => {
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(swapTitle(title))
	}, [dispatch])

	return <section className={styles.root}>{title}</section>
}

export default Test
