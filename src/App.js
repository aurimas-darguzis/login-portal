import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Login />
      </main>
      <footer>
        <span role="img" aria-label="cactus">
          🌵
        </span>
        <span className="footer-text">Created by Aurimas Darguzis</span>
        <span role="img" aria-label="cactus">
          🌵
        </span>
      </footer>
    </div>
  );
}

export default App;
