import React, { useContext, useEffect } from 'react';
import { ToDo } from '../Models/model.todo';
import Todo from './Todo';
import "./ToDoList.scss";
import { Post } from '../reduxStore/Chunks/user.slice';
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../reduxStore';
import { usersAction } from '../reduxStore/Chunks/user.slice';
import { getPosts } from "../Apis/Users"
type Props ={
    children?:JSX.Element,
}
const ToDosList:React.FC<Props> = ()=>{
  const ctx = useSelector((state:RootState) => state.Users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
       dispatch(getPosts())
  },[]);
  const remove=(id:number):void=>{
       dispatch(usersAction.deletePost(id))
  }
  return (
    <ul className='toDoList'>
      {ctx.userPost.posts.map((item:Post)=><Todo key={item.id} value={item} onRemove={()=>remove.bind(item.id)}/>)}
    </ul>
  )
}

export default ToDosList