import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ClearAll from './components/ClearAll';
import './App.css';

function App() {

  const [inputJob,SetInputJob] = useState('')
  const [todos,SetTodos] = useState([])
  const [editToDo, setEditToDo] = useState(null)



  return (
    <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <div>
              <Header/>
            </div>
            <div>
              <Form
                input = {inputJob}
                setInput = {SetInputJob}
                todos = {todos}
                SetTodos = {SetTodos}
                editToDo = {editToDo}
                setEditToDo = {setEditToDo}
              />
            </div>
            <div>
              <TodoList
                todos={todos}
                SetTodos = {SetTodos}
                setEditToDo = {setEditToDo}
              />
            </div>
            <div>
              {todos.length  === 0 ? null : <ClearAll SetTodos = {SetTodos}  todo={todos}/>}
              

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
