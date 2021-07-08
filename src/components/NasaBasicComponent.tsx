import React from 'react';
import logo from '../images/logo.svg';
import '../App.css';
import BasicComponent from "./BasicComponent";

function NasaBasicComponent(){
    return BasicComponent( {titleString: "Nasa Information", paragraphOneString: "The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.", paragraphTwoString: "NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science.[7][8][9] Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion spacecraft, the Space Launch System, Commercial Crew vehicles, and the planned Lunar Gateway space station. The agency is also responsible for the Launch Services Program, which provides oversight of launch operations and countdown management for uncrewed NASA launches.", imageURL: "https://s23527.pcdn.co/wp-content/uploads/2017/04/nasa-gallery-768x646.jpg.optimal.jpg"})
}

export default NasaBasicComponent