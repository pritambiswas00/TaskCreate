import { configureStore } from "@reduxjs/toolkit";
import { users } from "./Chunks/user.slice";


const store = configureStore({
     reducer: {
        Users: users.reducer
     }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;