/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import NavBar from "../components/Navbar/index";
import Routes from "../routes/index";
import { Route, Switch } from "react-router"
import "./App.css";
import LoginUser from "../pages/LoginUser";
import CreateUser from "../pages/CreateUser";
import Landing from "../pages/Landing";

function App() {
  return (
    <Router>
      <Switch>"
      <Route exact path="/" component={() => (<Redirect to="/dashLanding" />)} />
        <Route exact path="/login" component={LoginUser} />
        <Route exact path="/createuser" component={CreateUser} />
        <Route exact path="/dashLanding" component={Landing} />
        <div>
          <NavBar />
          <div className="container">
            <br />
            <Routes />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;