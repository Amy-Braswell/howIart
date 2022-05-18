import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'aws-amplify'
import {getFeaturedExhibit} from '../../../graphql/queries'



export const fetchFeaturedExhibit = createAsyncThunk('fetchFeaturedExhibit', async () => {
  const featuredExhibitData = await API.graphql({ query: getFeaturedExhibit });
  const response = featuredExhibitData.data.listExhibits.items[0];
  return response
})

const featuredExhibitSlice = createSlice({
  name: 'featuredExhibit',
  initialState: {
    featuredExhibit: null,
  },
  reducers: {},
  extraReducers: {
    [fetchFeaturedExhibit.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectFeaturedExhibits = state => state.featuredExhibit.value

export default featuredExhibitSlice.reducer