import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'aws-amplify'
import {listExhibits} from '../../../graphql/queries'


const initialState = []

// TODO - change so this filters data already in state at allExhibits
// NO NEED TO MAKE ANOTHER QUERY
export const fetchEndingExhibits = createAsyncThunk('fetchEndingExhibits', async () => { 
  const allExhibitsData = await API.graphql({ query: listExhibits });
  const apiResponse = allExhibitsData.data.listExhibits.items
  const now = (Math.round(Date.now() / 1000))
  const sevenDays = now - 604800
  const response = apiResponse.filter((item) => item.endDate > now);
// TODO - use this instead
//   const response = apiResponse.filter((item) => item.endDate > now && item.endDate < sevenDays);
  return response
})

const endingExhibitsSlice = createSlice({
  name: 'endingExhibits',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEndingExhibits.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectEndingExhibits = state => state.endingExhibits.value

export default endingExhibitsSlice.reducer