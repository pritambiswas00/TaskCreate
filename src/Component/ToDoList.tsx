import React, { useContext } from 'react';
import { ToDo } from '../Models/model.todo';
import Todo from './Todo';
import {ToDoContext} from "../store/context.todo"
import "./ToDoList.scss";
type Props ={
    children?:JSX.Element,
}
const ToDosList:React.FC<Props> = ()=>{
  const todoCtx = useContext(ToDoContext);
  return (
    <ul className='toDoList'>
      {todoCtx.items.map((item:ToDo)=><Todo removeToDo={todoCtx.removeToDo.bind(null,item.id)} key={item.id} value={item}/>)}
    </ul>
  )
}

export default ToDosList