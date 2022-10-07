import React, { useState } from "react";
import { ToDo } from "../Models/model.todo";
type ContextType = {
   items: ToDo[],
   addToDo:(text:string)=>void,
   removeToDo:(id:string)=>void
}
export const ToDoContext = React.createContext<ContextType>({
    items: [],
    addToDo:()=>{},
    removeToDo:(id:string)=>{},
})

type ContextProviderProps = {
      children: JSX.Element,

}
export const ContextProvider:React.FC<ContextProviderProps> = (props)=>{
    const [data, setData] = useState<ToDo[]>([])
    const createToDoHandler = (text:string):void=>{
          const newToDo = new ToDo(text);
          setData((previousState)=>{
             return previousState.concat(newToDo);
          });
             
    }
    const deleteToDo = (id:string)=>{
         setData((previousState)=>{
              return previousState.filter((item)=>item.id!==id);
         })
    }
    const context:ContextType={
         items: data,
         addToDo:createToDoHandler,
         removeToDo:deleteToDo

    }
    return (
         <ToDoContext.Provider value={context}>
            {props.children}
         </ToDoContext.Provider>
    )
}

