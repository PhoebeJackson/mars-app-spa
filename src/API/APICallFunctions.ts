import {Rover, Camera, Photo} from './APIInterfaces'
import axios from 'axios'

export async function getRovers() {
    const response = await axios.get('http://finwhale.zoo.lan:8000/rovers')
    const rovers: Rover[] = response.data.rovers
    return rovers
}

export async function getPhotos(rover: Rover, camera: Camera) {
    const roverName: string = rover.name
    const cameraName: string = camera.name
    const response = await axios.get(`http://finwhale.zoo.lan:8000/rovers/${roverName}/${cameraName}`)
    const photos: Photo[] = response.data.photos
    return photos
}