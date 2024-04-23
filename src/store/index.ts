import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import productReducer from './reduces/CreateSlice'

export const store = configureStore({
  reducer: {
    cart: productReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
