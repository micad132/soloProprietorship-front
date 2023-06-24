/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './reducers/errorReducer'
import productReducer from './reducers/productReducer'
import utilsReducer from './reducers/utilsReducer'
import jobReducer from './reducers/jobReducer'
import customerReducer from './reducers/customerReducer'
import transactionReducer from './reducers/transactionReducer'

export const store = configureStore({
  reducer: {
    error: errorReducer,
    product: productReducer,
    utils: utilsReducer,
    job: jobReducer,
    customer: customerReducer,
    transaction: transactionReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
