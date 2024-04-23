import { useState } from "react";
import "./App.css";

function Todo() {
  return (
    <>
      <div className="todo">
        <input type="text" placeholder="Type a new todo" />
      </div>
      <button>Add Todo</button>
      <hr />
    </>
  );
}

export default Todo;
