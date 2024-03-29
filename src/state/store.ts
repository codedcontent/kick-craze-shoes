import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import favsReducer from "./favs/favsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favs: favsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
