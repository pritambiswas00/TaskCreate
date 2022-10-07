import './App.scss'
import CreateToDo from './Component/CreateToDo'
import ToDosList from './Component/ToDoList'

function App() {
  return (
    <div className="App">
        <CreateToDo/>
        <ToDosList/>
    </div>
  )
}

export default App
