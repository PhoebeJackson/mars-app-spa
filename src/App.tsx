import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import pageTwo from "./components/pageTwo";
import pageOne from "./components/pageOne"
import Navbar from "./components/Navbar";

function App() {
  return (
      <section className="App-body">
          <header className="App-header">
              <Navbar/>
          </header>
          <Switch>
              <Route exact path={"/"} component={pageOne}></Route>
              <Route exact path={"/asteroids"} component={pageTwo}></Route>
          </Switch>
      </section>
  );
}

export default App;
