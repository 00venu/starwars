import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Search from "./pages/Search";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
