import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {Camera, Rover} from "../API/APIInterfaces";
import {getPhotos, getRovers} from "../API/APICallFunctions";

class RoverOption {
    value: number;
    label: string

    constructor(rover: Rover) {
        this.value = rover.id
        this.label = rover.name
    }
}

class CameraOption {
    value: string;
    label: string

    constructor(camera: Camera) {
        this.value = camera.name
        this.label = camera.full_name
    }
}

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

function SelectForm(){
    const [imageURLs, setImageURLS] = useState<string[]>([]);
    const listImages = imageURLs.map((url) =>
        <img key={url} src={url}/>

    );
    const [roverOptions, setRoverOptions] = useState<RoverOption[]>([{value: NaN, label: "Loading"}])
    const [roverSelection, setRoverSelection] = useState<RoverOption>({value: NaN, label: "UnknownRover"});
    const [cameraOptions, setCameraOptions] = useState<CameraOption[]>([{value: "", label: "Pick a Rover to see cameras"}])
    const [cameraSelection, setCameraSelection] = useState<CameraOption>({value: "", label: "UnknownCamera"});
    const [rovers, setRovers] = useState<Rover[]>([])
    const handleRoverSelectionChange = async (event: {value: number, label: string} | null) => {
        const myEvent = event || { value: NaN, label: 'BrokenRover' }
        setRoverSelection({value: myEvent.value, label: myEvent.label})
        let newCameraOptions: CameraOption[] = [{value: '', label: 'All Cameras'}]
        rovers.forEach((rover) => {
            if (rover.id === myEvent.value) {
                rover.cameras.forEach((camera) => {
                    newCameraOptions.push(new CameraOption(camera))
                })
            }
        })
        await setCameraOptions(newCameraOptions)
    }
    const handleCameraSelectionChange = (event: {value: string, label: string} | null) => {
        const myEvent = event || { value: "", label: 'BrokenCamera' }
        setCameraSelection({value: myEvent.value, label: myEvent.label})
        // setString(<></>)
        const urls: string[] = []
        getPhotos(roverSelection.label, myEvent.value).then((photosResponse) => {
            photosResponse.forEach((photo) => {
                urls.push(photo.img_src)
            })
            console.log(urls)
            setImageURLS(urls.slice(0, 5))
        })

    }
    useEffect(() => {
        findMeRovers().then((roversResponse: Rover[]) => {
            setRoverOptions(makeRoverOptions(roversResponse))
            setRovers(roversResponse)
        })
    }, [])
    return (
        <section>
            <Select id={"myRoverSelectForm"} options={roverOptions} onChange={handleRoverSelectionChange}/>
            <p>You picked {roverSelection.label}</p>
            <Select id={"myCameraSelectForm"} options={cameraOptions} onChange={(event) => {handleCameraSelectionChange(event)}}/>
            <p>You picked {cameraSelection.label}</p>
            <div>{listImages}</div>
        </section>
    )
}

export default SelectForm

