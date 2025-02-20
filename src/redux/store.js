import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slices/headerSlice'
import profile from './slices/profileSlice'
import position from './slices/positionsSlice'

export const store = configureStore({
	reducer: {
		headerSlice,
		profile,
		position,
	},
})
