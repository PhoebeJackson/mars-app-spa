import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {Camera, Rover} from "../API/APIInterfaces";
import {getRovers} from "../API/APICallFunctions";

class RoverOption {
    value: number;
    label: string

    constructor(rover: Rover) {
        this.value = rover.id
        this.label = rover.name
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
    const [roverOptions, setRoverOptions] = useState([{value: NaN, label: "This is loading"}])
    const [selection, setSelection] = useState({value: NaN, label: "Unknown"});
    const handleSelectionChange = (event: {value: number, label: string} | null) => {
        const myEvent = event || { value: 6, label: 'Broken' }
        setSelection({value: myEvent.value, label: myEvent.label})
    }
    useEffect(() => {
        findMeRovers().then((rovers: Rover[]) => {
            setRoverOptions(makeRoverOptions(rovers))
        })
    })
    return (
        <section>
            <Select id={"mySelectForm"} options={roverOptions} onChange={(event) => {handleSelectionChange(event)}}/>
            <p>You picked {selection.label}</p>
        </section>
    )
}

export default SelectForm

