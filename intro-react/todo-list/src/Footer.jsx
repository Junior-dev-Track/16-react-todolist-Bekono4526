import { useState } from "react";
import "./App.css";

function Footer() {
  return (
    <>
      <h2>Todos</h2>


      <div className="footer">
<ul>
  <li> <input type="checkbox" />Learn React</li>
  <li><input type="checkbox" /> Be Awesome!</li>
</ul>
      </div>
      <button className="btn">Delete</button>
    </>
  );
}

export default Footer;
