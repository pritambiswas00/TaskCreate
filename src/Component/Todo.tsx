import React from 'react';
import { Post } from '../reduxStore/Chunks/user.slice';
import "./Todo.scss"
type Props = {
    value: Post,
    onRemove:()=>void
}

const Todo:React.FC<Props> =(props)=>{
   return (
       <li className='todo' onClick={props.onRemove}>
        <div className="post">
             <h3>{props.value.title}</h3>
             <p>{props.value.body}</p>
        </div>
       </li>
   )
}

export default Todo;