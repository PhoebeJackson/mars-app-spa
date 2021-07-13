import React, {useContext} from 'react';
import {CameraOption, ImageFormContext} from "../contexts/ImageFormContext";
import Select from "react-select";
import {colourStyles} from "./ImageFormsHost";

function RoverSelectForm() {
    const context = useContext(ImageFormContext)

    const handleRoverSelectionChange = async (event: {value: number, label: string} | null) => {
        const myEvent = event || { value: NaN, label: 'BrokenRover' }
        context.setRoverSelection({value: myEvent.value, label: myEvent.label})
        let newCameraOptions: CameraOption[] = [{value: '', label: 'All Cameras'}]
        context.rovers.forEach((rover) => {
            if (rover.id === myEvent.value) {
                rover.cameras.forEach((camera) => {
                    newCameraOptions.push(new CameraOption(camera))
                })
            }
        })
        context.setCameraOptions(newCameraOptions)
        context.setCameraSelection({value: "Test", label: "Select a camera"})
        context.setImageURLS([])
    }

    return (
        <Select id={"myRoverSelectForm"} options={context.roverOptions} onChange={handleRoverSelectionChange} styles={colourStyles}/>
    )
}

export default RoverSelectForm