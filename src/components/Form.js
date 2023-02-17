import React, { useRef } from "react";      
import { useEffect } from "react";
import {v4 as uuidV4} from "uuid"



function Form({input, setInput, todos, SetTodos, editToDo , setEditToDo})  {

    const inputRef = useRef()

    const updateTodo = (title,id,completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id ,completed} : todo
        )

        SetTodos(newTodo)
        setEditToDo("")
    }

    useEffect(() => {
        if(editToDo) {
            setInput(editToDo.title);
        } else {
            setInput("")
        }
    },[editToDo,setInput])

    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault();

        if(!editToDo) {
            SetTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
            setInput("");
            inputRef.current.focus()
        } else {
            updateTodo(input, editToDo.id, editToDo.completed)
        }

    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Enter a todo..." 
                className="task-input"
                value={input} 
                required
                onChange={(e) => onInputChange(e)}
            />
            <button className="button-add" type="submit" >
                {editToDo ? "Confirm" : "Add"}    
            </button>
        </form>
    );
}

export default Form;