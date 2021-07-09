import React, {useState} from "react";
import {getAsteroids} from "../API/APICallFunctions";
import {Asteroid, Rover} from "../API/APIInterfaces";

function PageTwo() {
    const [asteroids, setAsteroids] = useState<{ [date:string] : Asteroid[]}>()
    getAsteroids("2021-07-07").then((response) => {
        setAsteroids(response)
    })
    return (
        <section className="App">
            <header className="App-header">
                Hi
            </header>
        </section>
    );
}

export default PageTwo;
