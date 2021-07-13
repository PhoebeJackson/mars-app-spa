import React, {CSSProperties, useEffect, useState} from 'react';
import '../CSS/ImageFormsHost.css';
import {
    ImageFormContext,
    defaultImageFormContext,
    RoverOption,
    CameraOption,
    ImageFormContextInterface
} from "../contexts/ImageFormContext";
import RoverSelectForm from "./RoverSelectForm";
import {Rover} from "../API/APIInterfaces";
import CameraSelectionForm from "./CameraSelectionForm";
import RoverImageDisplay from "./RoverImageDisplay";
import {getRovers} from "../API/APICallFunctions";
import Select, { StylesConfig } from 'react-select'
export const colourStyles: StylesConfig<any, any> = {
    option: (provided, state) => {
        return {
            ...provided,
            color: "black"
        };
    }
};

function makeRoverOptions(rovers: Rover[]): RoverOption[] {
    const roverOptions = rovers.map((rover) => {
        return new RoverOption(rover)
    })
    return roverOptions
}

async function findMeRovers(): Promise<Rover[]> {
    const rovers: Rover[] = await getRovers()
    return rovers
}

function ImageFormsHost() {
    const [imageURLS, setImageURLS] = useState<string[]>([]);
    const [roverOptions, setRoverOptions] = useState<RoverOption[]>([{value: NaN, label: "Loading"}])
    const [roverSelection, setRoverSelection] = useState<RoverOption>({value: NaN, label: "UnknownRover"});
    const [cameraOptions, setCameraOptions] = useState<CameraOption[]>([{value: "", label: "Pick a Rover to see cameras"}])
    const [cameraSelection, setCameraSelection] = useState<CameraOption>({value: "", label: "Pick a Rover to see cameras"});
    const [rovers, setRovers] = useState<Rover[]>([])


    let initialContext: ImageFormContextInterface = {
        cameraOptions: cameraOptions,
        cameraSelection: cameraSelection,
        imageURLS: imageURLS,
        roverOptions: roverOptions,
        roverSelection: roverSelection,
        rovers: rovers,
        setCameraOptions: setCameraOptions,
        setCameraSelection: setCameraSelection,
        setImageURLS: setImageURLS,
        setRoverOptions: setRoverOptions,
        setRoverSelection: setRoverSelection,
        setRovers: setRovers

    }
    useEffect(() => {
        findMeRovers().then((roversResponse: Rover[]) => {
            setRoverOptions(makeRoverOptions(roversResponse))
            setRovers(roversResponse)
        })
    }, [])
    return (
        <section className="photo-forms">
            <ImageFormContext.Provider value={initialContext}>
                <RoverSelectForm></RoverSelectForm>
                <CameraSelectionForm></CameraSelectionForm>
                <RoverImageDisplay></RoverImageDisplay>
            </ImageFormContext.Provider>
        </section>

    )
}

export default ImageFormsHost