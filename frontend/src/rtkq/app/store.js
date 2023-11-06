


import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi, userStudentApi } from '../services/userAuthApi'
import authReducer from '../features/authSlice'
import userSlice from '../features/userSlice'


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [userStudentApi.reducerPath]: userStudentApi.reducer,
    auth: authReducer,
    user: userSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(userStudentApi.middleware), // Combine both middlewares
})

setupListeners(store.dispatch)
