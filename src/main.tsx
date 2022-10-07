import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss';
import {ContextProvider} from "./store/context.todo"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
  </React.StrictMode>
)
