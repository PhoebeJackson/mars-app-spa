import React, {useContext} from 'react';
import '../App.css';
import Select from "react-select";
import {ImageFormContext} from "../contexts/ImageFormContext";
import {getPhotos} from "../API/APICallFunctions";
import {colourStyles} from "./ImageFormsHost";

function CameraSelectionForm() {
    const context = useContext(ImageFormContext)

    const handleCameraSelectionChange = (event: {value: string, label: string} | null) => {
        const myEvent = event || { value: "", label: 'BrokenCamera' }
        context.setCameraSelection({value: myEvent.value, label: myEvent.label})
        // setString(<></>)
        const urls: string[] = []
        getPhotos(context.roverSelection.label, myEvent.value).then((photosResponse) => {
            photosResponse.forEach((photo) => {
                urls.push(photo.img_src)
            })
            console.log(urls)
            context.setImageURLS(urls.slice(0, 5))
        })

    }

    return (
        <Select id={"myCameraSelectForm"} options={context.cameraOptions} value={context.cameraSelection} onChange={(event) => {handleCameraSelectionChange(event)}} styles={colourStyles}/>
    )
}

export default CameraSelectionForm