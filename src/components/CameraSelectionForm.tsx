import React, {useContext} from 'react';
import '../App.css';
import Select from "react-select";
import {ImageFormContext} from "../contexts/ImageFormContext";
import {getPhotos} from "../API/APICallFunctions";

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
        <Select id={"myCameraSelectForm"} options={context.cameraOptions} onChange={(event) => {handleCameraSelectionChange(event)}}/>
    )
}

export default CameraSelectionForm