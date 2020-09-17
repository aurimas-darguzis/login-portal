import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>this is main content</main>
      <footer>
        🌵 <span>Created by Aurimas Darguzis</span> 🌵{" "}
      </footer>
    </div>
  );
}

export default App;
