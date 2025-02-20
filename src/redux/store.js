import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slices/headerSlice'

export const store = configureStore({
	reducer: {
		headerSlice,
	},
})
