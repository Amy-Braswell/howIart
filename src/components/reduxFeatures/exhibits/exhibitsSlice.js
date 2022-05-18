import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'aws-amplify'
import {currentExhibits} from '../../../graphql/queries'


// TODO - SET UP ERROR HANDLING
// DATA IS NOT PASSED TO STORE IF QUERY HAS AN ERROR
const initialState = []

export const fetchAllExhibits = createAsyncThunk('fetchAllExhibits', async () => {
  const allExhibitsData = await API.graphql({ query: currentExhibits });

  const apiResponse = allExhibitsData.data.listExhibits.items
// shuffle api response to randomize exhibit display
  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  const response = randomArrayShuffle(apiResponse)
  return response
})

const exhibitsSlice = createSlice({
  name: 'exhibits',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllExhibits.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAllExhibits = state => state.allExhibits.value

export default exhibitsSlice.reducer