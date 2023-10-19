
import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import authReducer from '../features/authSlice'
import userSlice from '../features/userSlice'

export const store = configureStore({
  reducer: {

    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authReducer,
    user: userSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)