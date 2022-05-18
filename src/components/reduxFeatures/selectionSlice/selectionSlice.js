import { createSlice } from '@reduxjs/toolkit'

export const SelectionFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NEW: 'SHOW_NEW',
  SHOW_ENDING: 'SHOW_ENDING'
}

const selectionSlice = createSlice({
  name: 'SelectionFilters',
  initialState: SelectionFilters.SHOW_ALL,
  reducers: {
    setSelectionFilter(state, action) {
      return action.payload
    }
  }
})

export const { SelectionFilter } = selectionSlice.actions
export const selectSelectionFilter = state => state.selectionFilter.value

export default selectionSlice.reducer