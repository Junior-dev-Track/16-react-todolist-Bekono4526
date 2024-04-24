// Footer.jsx
import React from "react";

function Footer({ tasks, handleDeleteTask }) {
  return (
    <>
      <h2>Todos</h2>
      <div className="footer">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              <span>{task}</span>
              <button className="btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Footer;



