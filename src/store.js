import { configureStore } from '@reduxjs/toolkit';

import exhibitsReducer from './components/reduxFeatures/exhibits/exhibitsSlice'
import featuredExhibitReducer from './components/reduxFeatures/featuredExhibit/featuredExhibitSlice'
import selectionReducer from './components/reduxFeatures/selectionSlice/selectionSlice'
import userReducer from './components/reduxFeatures/Redux/reducers/user'
import itemReducer from './components/reduxFeatures/Redux/reducers/item'
import errorReducer from './components/reduxFeatures/Redux/reducers/error'
import loadingReducer from './components/reduxFeatures/Redux/reducers/loading'


export default configureStore({
  reducer: {
    allExhibits: exhibitsReducer,
    error: errorReducer,
    featuredExhibit: featuredExhibitReducer,
    loading: loadingReducer,
    selectionFilter: selectionReducer,
    user: userReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
