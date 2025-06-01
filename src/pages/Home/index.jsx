import React from 'react'

import { useDispatch } from 'react-redux'

import styles from './Home.module.scss'
import { swapTitle } from '../../redux/slices/headerSlice'
import Positions from '../../components/Positions'

const title = 'Asosiy'
const Home = () => {
	const dispatch = useDispatch()
	React.useEffect(() => {
		dispatch(swapTitle(title))
	}, [dispatch])

	return (
		<>
			<Positions />
		</>
	)
}

export default Home
