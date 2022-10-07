import React from 'react';
import {ToDo} from "../Models/model.todo";
type Props = {
    value: ToDo,
    removeToDo:()=>void
}

const Todo:React.FC<Props> =(props)=>{
   return (
       <li onClick={props.removeToDo}><p>{props.value.text}</p></li>
   )
}

export default Todo;