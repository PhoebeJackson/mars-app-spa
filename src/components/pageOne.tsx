import React from 'react';
import logo from '../images/Cartoon_space_rocket.png';
import '../App.css';
import NasaBasicComponent from "./NasaBasicComponent";
import ButtonCount from "./ButtonCount";
import FourComponentTree from "./FourComponentTree";
import SelectForm from "./SelectForm";

function PageOne() {
    return (
        <section className="App">
            <header className="App-header">
                <SelectForm></SelectForm>
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
                <p>

                </p>
            </header>
        </section>
    );
}

export default PageOne;