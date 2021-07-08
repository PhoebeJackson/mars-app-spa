import React from 'react';
import logo from './images/Cartoon_space_rocket.png';
import './App.css';
import BasicComponent from "./components/BasicComponent";
import NasaBasicComponent from "./components/NasaBasicComponent";
import ButtonCount from "./components/ButtonCount";
import FourComponentTree from "./components/FourComponentTree";

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <ButtonCount></ButtonCount>
        <FourComponentTree></FourComponentTree>
        <img src={logo} className="App-logo" alt="logo" />
        <NasaBasicComponent></NasaBasicComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </section>
  );
}

export default App;
