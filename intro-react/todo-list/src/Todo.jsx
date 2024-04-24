// Todo.jsx
import React from "react";

function Todo({ taskInput, setTaskInput, handleAddTask }) {
  return (
    <>
      <div className="todo">
        <input 
          type="text" 
          placeholder="Type a new todo" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
      <div className="todo-button">
        <button onClick={handleAddTask}>Add Todo</button>
      </div>
      <hr />
    </>
  );
}

export default Todo;

