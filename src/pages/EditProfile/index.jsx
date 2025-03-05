import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './EditProfile.module.scss'

import { changeName, changeLastName } from '../../redux/slices/profileSlice'
import { swapTitle } from '../../redux/slices/headerSlice'

const title = 'Sozlamalar'

const EditProfile = () => {
	const [name, setName] = React.useState('')
	const [lastName, setLastName] = React.useState('')

	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(swapTitle(title))
	}, [])

	const handleSubmit = event => {
		event.preventDefault()

		dispatch(changeName(name))
		dispatch(changeLastName(lastName))

		setName('')
		setLastName('')
	}

	const handleNameChange = event => {
		setName(event.target.value)
	}

	const handleLastNameChange = event => {
		setLastName(event.target.value)
	}

	return (
		<section className={styles.root}>
			<form className={`${styles.form}`} onSubmit={handleSubmit}>
				<div className={`${styles.item}`}>
					<label className={`${styles.label}`} htmlFor='user-name'>
						Ismingiz:
					</label>
					<input
						onChange={handleNameChange}
						className={`${styles.input}`}
						id='user-name'
						type='text'
						required
						value={name}
					/>
				</div>
				<div className={`${styles.item}`}>
					<label className={`${styles.label}`} htmlFor='user-last-name'>
						Familiyangiz:
					</label>
					<input
						onChange={handleLastNameChange}
						className={`${styles.input}`}
						id='user-last-name'
						type='text'
						required
						value={lastName}
					/>
				</div>
				<button className={`${styles.button}`} type='submit'>
					Tasdiqlash
				</button>
			</form>
		</section>
	)
}

export default EditProfile
