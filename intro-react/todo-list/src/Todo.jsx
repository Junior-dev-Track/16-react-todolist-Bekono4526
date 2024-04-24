import React, { useRef } from "react";

function Todo({ taskInput, setTaskInput, handleAddTask }) {
  const inputRef = useRef(null);

  const handleAddTaskAndFocus = () => {
    handleAddTask();
    inputRef.current.focus(); // Mettre le focus sur l'input après l'ajout de la tâche
  };

  return (
    <>
      <div className="todo">
        <input 
          ref={inputRef} // Référence à l'input
          type="text" 
          placeholder="Type a new todo" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
      <div className="todo-button">
        <button onClick={handleAddTaskAndFocus}>Add Todo</button>
      </div>
      <hr />
    </>
  );
}

export default Todo;



