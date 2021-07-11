import React, {useEffect, useState} from "react";
import {getAsteroids} from "../API/APICallFunctions";
import {Asteroid, Rover} from "../API/APIInterfaces";
import {DateTime} from "luxon";
import "../PageTwoCSS.css"
import asteroidPicture from '../images/asteroid.png';
import earthPicture from '../images/earth.png'

function averageDiameter(asteroid: Asteroid){
    return (asteroid.estimated_diameter.meters.estimated_diameter_max + asteroid.estimated_diameter.meters.estimated_diameter_min)/2
}

function timeFormat(date: DateTime){
    // const date = DateTime.fromFormat(asteroid.close_approach_data[0].close_approach_date_full, "y-MMM-dd HH:mm")
    return `${date.toFormat('HH:mm')} on ${date.toFormat('DDD')}`
}

class AsteroidForImage {
    diameter: number;
    distance: number;
    id: string;
    name: string;
    date: DateTime;
    velocity: number;

    constructor(asteroid: Asteroid) {
        this.diameter = Math.round(averageDiameter(asteroid))
        this.distance = Math.round(parseInt(asteroid.close_approach_data[0].miss_distance.kilometers))
        this.id = asteroid.id
        this.name = asteroid.name
        this.date = DateTime.fromFormat(asteroid.close_approach_data[0].close_approach_date_full, "y-MMM-dd HH:mm")
        this.velocity = Math.round(parseInt(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second))
    }
}

function PageTwo() {
    useEffect(() => {
        getAsteroids("2021-07-07").then((asteroidsResponse) => {
            setAsteroids(asteroidsResponse)
            console.log("fetching")
        })
    }, [])
    const [currentAsteroidText, setCurrentAsteroidText] = useState("Hover over an asteroid to learn about it!")
    const [asteroids, setAsteroids] = useState<Asteroid[]>( [] )
    const asteroidsForImage: AsteroidForImage[] = []
    asteroids.forEach((asteroid) => {
        if (asteroid.is_potentially_hazardous_asteroid) {
            asteroidsForImage.push(new AsteroidForImage(asteroid))
            // return <p key={asteroid.id}>There is a potentially hazardous asteroid, called {asteroid.name}, which has approximate diameter {Math.round(averageDiameter(asteroid))} metres. It will reach the closest point to us ({Math.round(parseInt(asteroid.close_approach_data[0].miss_distance.kilometers))} kilometres) at {timeFormat(asteroid)} and is approaching with velocity {Math.round(parseInt(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second))} km/s!</p>
        }
    });
    asteroidsForImage.sort( function (asteroidOne, asteroidTwo) {
        return asteroidTwo.distance - asteroidOne.distance
    } )
    console.log(asteroidsForImage)
    const listImages = asteroidsForImage.map((asteroid) => {
        return (
            <img key={asteroid.id} src={asteroidPicture} alt={asteroid.name} width={asteroid.diameter/5} onMouseLeave={() => setCurrentAsteroidText("Hover over another asteroid to learn about it")} onMouseEnter={() => {setCurrentAsteroidText(`This is a potentially hazardous asteroid, called ${asteroid.name}, which has approximate diameter ${asteroid.diameter} metres. It will reach the closest point to us (${asteroid.distance} kilometres) at ${timeFormat(asteroid.date)} and is approaching with velocity ${asteroid.velocity} km/s!`)}}/>
            )
    });
    return (
        <section className="Page-Two">
            {/*//TODO - make this a fixed size to avoid moving!*/}
            <p>{currentAsteroidText}</p>
            {listImages}
            <img className={"asteroid-image"} src={earthPicture}/>
            <figcaption>Earth (not to scale)</figcaption>
        </section>
    );
}

export default PageTwo;
