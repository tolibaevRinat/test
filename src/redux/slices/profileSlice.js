import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Ism kiriting',
	lastName: 'Familiya kiriting',
	position: 'Mutaxassis',
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		changeName(state, action) {
			state.name = action.payload
		},
		changeLastName(state, action) {
			state.lastName = action.payload
		},
	},
})

export const { changeName, changeLastName } = profileSlice.actions

export default profileSlice.reducer
