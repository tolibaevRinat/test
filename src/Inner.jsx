import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Question from './pages/Question'

const Inner = () => {
	return (
		<>
			<Header />
			<main className='page container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route
						path='/edit-profile'
						element={<EditProfile />}
					/>
					<Route
						path='/question/:id'
						element={<Question />}
					/>
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default Inner
