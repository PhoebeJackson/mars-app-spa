import React, {useEffect, useState} from "react";
import {getAsteroids} from "../API/APICallFunctions";
import {Asteroid, Rover} from "../API/APIInterfaces";
import {DateTime} from "luxon";
import "../PageTwoCSS.css"

function averageDiameter(asteroid: Asteroid){
    return (asteroid.estimated_diameter.meters.estimated_diameter_max + asteroid.estimated_diameter.meters.estimated_diameter_min)/2
}

function timeFormat(asteroid: Asteroid){
    const date = DateTime.fromFormat(asteroid.close_approach_data[0].close_approach_date_full, "y-MMM-dd HH:mm")
    return `${date.toFormat('HH:mm')} on ${date.toFormat('DDD')}`
}

function PageTwo() {
    const [asteroids, setAsteroids] = useState<Asteroid[]>( [] )
    const listAsteroids = asteroids.map((asteroid) => {
        if (asteroid.is_potentially_hazardous_asteroid) {
            return <p key={asteroid.id}>There is a potentially hazardous asteroid, called {asteroid.name}, which has approximate diameter {Math.round(averageDiameter(asteroid))} metres. It will reach the closest point to us ({Math.round(parseInt(asteroid.close_approach_data[0].miss_distance.kilometers))} kilometres) at {timeFormat(asteroid)} and is approaching with velocity {Math.round(parseInt(asteroid.close_approach_data[0].relative_velocity.kilometers_per_second))} km/s!</p>
        }
    });
    useEffect(() => { //TODO - remove async and waiting
        getAsteroids("2021-07-07").then((asteroidsResponse) => {
            setAsteroids(asteroidsResponse)
        })
    }, [])

    return (
        <section>
            <body className="Two-body">
                <div>{listAsteroids}</div>
            </body>
        </section>
    );
}

export default PageTwo;
