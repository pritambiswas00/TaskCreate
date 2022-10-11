import React from 'react';
import {ToDo} from "../Models/model.todo";
import { Post } from '../reduxStore/Chunks/user.slice';
type Props = {
    value: Post,
}

const Todo:React.FC<Props> =(props)=>{
   return (
       <li>
        <div className="posts">
             <h3>{props.value.title}</h3>
             <p>{props.value.body}</p>
        </div>
       </li>
   )
}

export default Todo;