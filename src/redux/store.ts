import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./product/productSlice"
import categoriesReducer from "./product/categroiesSlice"
import cartReducer from "./cart/cartSlice"
export const store = configureStore({
  reducer: {
    products:productsReducer,
    categories:categoriesReducer,
    cart:cartReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch