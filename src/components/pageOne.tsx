import React from 'react';
import logo from '../images/Cartoon_space_rocket.png';
import NasaBasicComponent from "./NasaBasicComponent";
import ButtonCount from "./TestComponents/ButtonCount";
import FourComponentTree from "./TestComponents/FourComponentTree";
import SelectForm from "./SelectForm";
import ImageFormsHost from "./ImageFormsHost";

function PageOne() {
    return (
        <section className="App">
            <ImageFormsHost></ImageFormsHost>
            <div className="circle">
                <img src={logo} className="rocket" alt="logo" />
            </div>

            <NasaBasicComponent></NasaBasicComponent>
        </section>
    );
}

export default PageOne;