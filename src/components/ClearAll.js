function ClearAll({SetTodos,todo}) {

    const handleClear = () =>  { 
        return SetTodos([]) 
    }

    return ( 
        <div className="footer">
            <span className="num-task"> You have {todo.length}  task</span>
            <button className="button-add clearAll" onClick={() => handleClear()}> ClearAll </button>
        </div>
    );
}

export default ClearAll;