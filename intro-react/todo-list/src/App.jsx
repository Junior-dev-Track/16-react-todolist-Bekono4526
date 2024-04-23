import { useState } from "react";
import "./App.css";
import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";

function App() {
  {/*ajouter les  */}
  return (
    <>
    <div className="container">
    <nav>
        <h1>My Todo App</h1>
      </nav>
      <Todo />
      <Footer />
    </div>

    </>
  );
}

export default App;
