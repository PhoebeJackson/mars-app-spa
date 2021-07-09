import React from "react";
import {Camera, Rover} from "../API/APIInterfaces";

export class RoverOption {
    value: number;
    label: string

    constructor(rover: Rover) {
        this.value = rover.id
        this.label = rover.name
    }
}

export class CameraOption {
    value: string;
    label: string

    constructor(camera: Camera) {
        this.value = camera.name
        this.label = camera.full_name
    }
}

export interface ImageFormContextInterface {
    roverOptions: RoverOption[],
    setRoverOptions:  React.Dispatch<React.SetStateAction<RoverOption[]>> | {(): null},
    roverSelection: RoverOption,
    setRoverSelection:  React.Dispatch<React.SetStateAction<RoverOption>> | {(): null},
    cameraOptions: CameraOption[],
    setCameraOptions:  React.Dispatch<React.SetStateAction<CameraOption[]>> | {(): null},
    cameraSelection: CameraOption,
    setCameraSelection:  React.Dispatch<React.SetStateAction<CameraOption>> | {(): null},
    rovers: Rover[],
    setRovers:  React.Dispatch<React.SetStateAction<Rover[]>> | {(): null},
    imageURLS: string[],
    setImageURLS:  React.Dispatch<React.SetStateAction<string[]>> | {(): null},
}

export const defaultImageFormContext: ImageFormContextInterface = {
    cameraOptions: [],
    cameraSelection: {value: "", label: "loading"},
    imageURLS: [],
    roverOptions: [],
    roverSelection: {value: NaN, label: "loading"},
    rovers: [],
    setCameraOptions: () => {},
    setCameraSelection: () => {},
    setImageURLS: () => {},
    setRoverOptions: () => {},
    setRoverSelection: () => {},
    setRovers: () => {}
}
export const ImageFormContext = React.createContext(defaultImageFormContext)