import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import "./Login.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Login() {
  return (
    <Router>
      <Route exact path="/" component={Step1} />
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
  );
}
