import React from "react";


function TodoList({todos,SetTodos,setEditToDo}) {

    const handleDelete =  ({id}) => {
        SetTodos(todos.filter((item) => item.id !== id))
    }  
    const handleComplete =  (todo) => {
        SetTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}   
            }
            return item
        }))
    }  

    const handelEdit = (todo) => {
        const findToDo = todos.find((item) => item.id = todo.id);
        setEditToDo(findToDo);
        console.log(findToDo)
    }



    return ( 
        <div className="list-todo">
            {todos.map((todo) => {
                return (
                    <li className="list-item" key={todo.id}>
                        <input 
                            type="text" 
                            value={todo.title} 
                            className={`list ${todo.completed ? "complete" : "" } `}
                            onChange ={(e) => e.preventDefault()} 
                        />

                        <div className="edit">
                            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                                <li className="fa fa-check-circle "></li>
                            </button>
                            <button className="button-edit task-button"  onClick={() => handelEdit(todo)}>
                                <li className="fa fa-edit "></li>
                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                                <li className="fa fa-trash "></li>
                            </button>
                        </div>
                    </li>
                )
            })}
        </div>

        
    );
}

export default TodoList;