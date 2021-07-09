import React from 'react';
import logo from './images/Cartoon_space_rocket.png';
import './App.css';
import NasaBasicComponent from "./components/NasaBasicComponent";
import ButtonCount from "./components/ButtonCount";
import FourComponentTree from "./components/FourComponentTree";
import SelectForm from "./components/SelectForm";
import ImageFormsHost from "./components/ImageFormsHost";

function App() {
  return (
    <section className="App">
      <section className="App-header">
        {/*<SelectForm></SelectForm>*/}
        <ImageFormsHost></ImageFormsHost>
        <ButtonCount></ButtonCount>
        <FourComponentTree></FourComponentTree>
        <img src={logo} className="App-logo" alt="logo" />
        <NasaBasicComponent></NasaBasicComponent>
      </section>
    </section>
  );
}

export default App;
