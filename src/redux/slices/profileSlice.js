import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: 'Ravshan',
	lastName: 'Shaipov',
	position: 'Mutaxassis',
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		swapTitle(state, action) {
			state.title = action.payload
		},
	},
})

export const { swapTitle } = profileSlice.actions

export default profileSlice.reducer
