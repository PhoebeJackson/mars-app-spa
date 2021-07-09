import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import pageTwo from "./components/pageTwo";
import pageOne from "./components/pageOne"

function App() {
  return (
      <Switch>
          <Route exact path={"/"} component={pageOne}></Route>
          <Route exact path={"/asteroids"} component={pageTwo}></Route>
      </Switch>
  );
}

export default App;
