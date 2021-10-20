import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./Slice/counterSlice"

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store
