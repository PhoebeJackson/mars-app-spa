import React, {useContext} from 'react';
import '../App.css';
import {CameraOption, ImageFormContext} from "../contexts/ImageFormContext";
import Select from "react-select";

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
        await context.setCameraOptions(newCameraOptions)
    }

    return (
        <Select id={"myRoverSelectForm"} options={context.roverOptions} onChange={handleRoverSelectionChange}/>
    )
}

export default RoverSelectForm