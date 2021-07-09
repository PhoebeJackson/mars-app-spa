import React, {useEffect, useState} from "react";
import {getAsteroids} from "../API/APICallFunctions";
import {Asteroid, Rover} from "../API/APIInterfaces";

function PageTwo() {
    const [asteroids, setAsteroids] = useState<Asteroid[]>( [] )
    const listAsteroids = asteroids.map((asteroid) => {
        if (asteroid.is_potentially_hazardous_asteroid) {
            return <p key={asteroid.id}>{asteroid.name}</p>
        }
    });
    useEffect(() => { //TODO - remove async and waiting
        getAsteroids("2021-07-07").then(async (asteroidsResponse) => {
            await setAsteroids(asteroidsResponse)
        })
    }, [])

    return (
        <section className="App">
            <header className="App-header">
                Hi
                <div>{listAsteroids}</div>
            </header>
        </section>
    );
}

export default PageTwo;
