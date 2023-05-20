import {configureStore} from "@reduxjs/toolkit";
import errorReducer from "./reducers/errorReducer";
import productReducer from "./reducers/productReducer";
import utilsReducer from "./reducers/utilsReducer";


export const store = configureStore({
    reducer: {
        error: errorReducer,
        product: productReducer,
        utils: utilsReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
