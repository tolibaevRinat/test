import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title: 'Asosiy',
}

export const titleSlice = createSlice({
	name: 'title',
	initialState,
	reducers: {
		swapTitle(state, action) {
			state.title = action.payload
		},
	},
})

export const { swapTitle } = titleSlice.actions

export default titleSlice.reducer
