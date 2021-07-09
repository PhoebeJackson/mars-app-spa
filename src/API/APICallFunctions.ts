import {Rover, Photo, Asteroid} from './APIInterfaces'
import axios from 'axios'
// import { configure, getLogger } from "log4js";

// configure({
//     appenders: {
//         file: { type: 'fileSync', filename: 'logs/debug.log' }
//     },
//     categories: {
//         default: { appenders: ['file'], level: 'debug'}
//     }
// });
//
// const logger = getLogger("./index.ts");

export async function getRovers(): Promise<Rover[]> {
    try {
        const response = await axios.get('http://finwhale.zoo.lan:8000/rovers')
        if (response.status === 200){
            return response.data.rovers
        }
        else {
            // logger.warn("getRover hand non 200 status: " + response.data)
            return []
        }
    }
    catch (error) {
        // logger.warn("getRover call failed: " + error)
        return []
    }
}

export async function getPhotos(roverName: string, cameraName: string): Promise<Photo[]> {
    try {
        const response = await axios.get(`http://finwhale.zoo.lan:8000/rovers/${roverName}/${cameraName}`)
        if (response.status === 200){
            return response.data.photos
        }
        else {
            // logger.warn("getPhotos hand non 200 status: " + response.data)
            return []
        }
    }
    catch (error) {
        // logger.warn("getPhotos call failed: " + error)
        return []
    }
}

export async function getAsteroids(startDate: string): Promise<Asteroid[]> {
    try {
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=pHRI4EDPhbY9sjYB4DcYvx2DMXKhaBjcQqmJdlfY`)
        if (response.status === 200){
            const datedNearEarthObjects: { [date: string]: Asteroid[]} = response.data.near_earth_objects
            const asteroids: Asteroid[] = []
            for (const date in datedNearEarthObjects) {
                datedNearEarthObjects[date].forEach((asteroid) => asteroids.push(asteroid))
            }
            return asteroids
        }
        else {
            // logger.warn("getPhotos hand non 200 status: " + response.data)
            return []
        }
    }
    catch (error) {
        // logger.warn("getPhotos call failed: " + error)
        return []
    }
}