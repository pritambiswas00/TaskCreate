import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '../../Apis/Users';

export type Post = {
    id: number;
    userId:number;
    body:string;
    title: string
}
type User={
    userPost: {
        posts: Post[],
        loading: boolean,
        error: string
    }
}
const name = "User";
const initialState:User={
    userPost:{
        posts:[],
        loading: false,
        error: ""
    }
}
export const users = createSlice({
    name : name,
    initialState: initialState,
    reducers:{
        addPostError: (state:User, action:PayloadAction<string>)=>{
            state.userPost.error = action.payload;
        },
        addPost: (state:User, action:PayloadAction<Post>)=>{
             state.userPost.posts.unshift(action.payload);
        },
        deletePost:(state:User, action:PayloadAction<number>)=>{
            console.log(action, "DLEELEEL")
             state.userPost.posts.filter((post:Post)=>post.id!==action.payload)
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getPosts.pending, (state:User)=>{
             state.userPost.loading = true;
        }),
        builder.addCase(getPosts.fulfilled, (state:User, action:PayloadAction<Post[]>)=>{
            state.userPost.loading = false;
            state.userPost.posts = action.payload;
            state.userPost.error=""
        }),
        builder.addCase(getPosts.rejected, (state:User, action)=>{
            state.userPost.loading = false;
            state.userPost.posts = []
            state.userPost.error=action.error.message||""
        }) 
    }

});
export const usersAction = users.actions;