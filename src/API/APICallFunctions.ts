import {Rover, Camera, Photo} from './APIInterfaces'
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
            const rovers: Rover[] = response.data.rovers
            return rovers
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

export async function getPhotos(rover: Rover, camera: Camera): Promise<Photo[]> {
    const roverName: string = rover.name
    const cameraName: string = camera.name
    try {
        const response = await axios.get(`http://finwhale.zoo.lan:8000/rovers/${roverName}/${cameraName}`)
        if (response.status === 200){
            const photos: Photo[] = response.data.photos
            return photos
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