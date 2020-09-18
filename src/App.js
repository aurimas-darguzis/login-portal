import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Step2 from "./Login/Step2";
import Step3 from "./Login/Step3";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/step-2" component={Step2} />
          <Route path="/step-3" component={Step3} />
          <Route path="/home" component={Home} />
          <Route
            render={() => (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )}
          />
        </Router>
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
