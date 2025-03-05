import {
	createSlice,
	createAsyncThunk,
} from '@reduxjs/toolkit'
import axios from 'axios'

export const URL =
	'https://5931966f88c8cb11.mokky.dev/positions'

export const fetchPositions = createAsyncThunk(
	'positions/fetchPositionsStatus',
	async ({ signal }) => {
		const { data } = await axios.get(`${URL}`, { signal })
		return data
	}
)

const initialState = {
	items: [],
	status: 'loading',
}

export const positionSlice = createSlice({
	name: 'position',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchPositions.pending, state => {
				state.status = 'loading'
				state.items = []
			})
			.addCase(
				fetchPositions.fulfilled,
				(state, action) => {
					state.items = action.payload
					state.status = 'success'
				}
			)
			.addCase(fetchPositions.rejected, state => {
				state.status = 'error'
				state.items = []
			})
	},
})

export const selectLastAccessiblePosition = state => {
	const items = state.position.items
	let lastAccessible = null

	for (let i = 0; i < items.length; i++) {
		if (items[i].isAccessible) {
			lastAccessible = items[i]
		}
	}
	return lastAccessible
}

export default positionSlice.reducer
