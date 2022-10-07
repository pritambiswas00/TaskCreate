import React, {useRef, useContext} from 'react';
import { ToDoContext } from "../store/context.todo"
import './CreateToDo.scss';

type Props={
     
}
const CreateToDo:React.FC<Props> = (props)=>{
    const todoCtx = useContext(ToDoContext);
    const inputText = useRef<HTMLInputElement>(null);
    const formSubmit = (event:React.FormEvent)=>{
          event.preventDefault();
          const enteredText:string = inputText.current!.value;
          if(enteredText.trim().length===0) return;
          todoCtx.addToDo(enteredText);
          inputText.current!.value = ""
    }
  return (
    <form className='createForm' onSubmit={formSubmit}>
        <label htmlFor='todo'>Create Task</label>
        <input type={'text'} id="todo" placeholder="Enter Text" ref={inputText}/>
        <button>Save</button>
    </form>
  )
}

export default CreateToDo