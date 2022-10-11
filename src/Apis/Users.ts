import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { Post } from '../reduxStore/Chunks/user.slice'

export const getPosts = createAsyncThunk(
    "Users/getPosts",
    async (thunkAPI)=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").then((res:any):Post[]=>{
              return res.data; 
        });
        return response.filter((post:Post, index:number)=>index<5);
    }
)