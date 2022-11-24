
import { configureStore } from '@reduxjs/toolkit'
import reducer_1 from './slice_1'
import reducer_2 from './slice_2'
import { setupListeners } from '@reduxjs/toolkit/query'
import { API } from '../rtk/API'

export const store = configureStore({
   reducer: {
      [API.reducerPath]: API.reducer,
      reducer_1: reducer_1,
      reducer_2: reducer_2,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(API.middleware),
})

setupListeners(store.dispatch)