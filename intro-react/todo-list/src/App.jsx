// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    // Récupère les tâches sauvegardées dans le localStorage lors du chargement de la page
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Sauvegarde les tâches dans le localStorage à chaque changement
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <nav>
          <h1>My Todo App</h1>
        </nav>
        <Todo
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          handleAddTask={handleAddTask}
        />
        <Footer tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
}

export default App;


