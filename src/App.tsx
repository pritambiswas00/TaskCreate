import {useEffect, useRef, useState} from 'react';
import './App.scss';
import Canvas from './Component/Canvas/Canvas';
import CreateToDo from './Component/CreateToDo'
import ToDosList from './Component/ToDoList'

function App() {
  return (
    <div className="App">
      <Canvas>
        <CreateToDo />
        <ToDosList/>
      </Canvas>
    </div>
  )
}

export default App
