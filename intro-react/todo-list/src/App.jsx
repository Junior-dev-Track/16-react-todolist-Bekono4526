import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";

const LSKEY = "tasks";

function App() {
  // Initialisation des tâches à partir du localStorage ou un tableau vide
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem(LSKEY));
    return savedTasks || [];
  });

  const [taskInput, setTaskInput] = useState('');

  // Sauvegarde les tâches dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      // Ajoutez la nouvelle tâche sans écraser les tâches existantes
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
  );
}

export default App;



