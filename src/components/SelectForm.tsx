import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import {Camera, Rover} from "../API/APIInterfaces";
import {getRovers} from "../API/APICallFunctions";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const rovers = [{value: 0, label: "Loading"}]

class SmallRover {
    value: number;
    label: string

    constructor(rover: Rover) {
        this.value = rover.id
        this.label = rover.name
    }
}

function makeSmallRovers(rovers: Rover[]): SmallRover[] {
    const smallRovers = rovers.map((rover) => {
        return new SmallRover(rover)
    })
    return smallRovers
}

async function findMeRovers(): Promise<Rover[]> {
    const rovers: Rover[] = await getRovers()
    return rovers
}



// [{id: 0,
//     name: "Loading",
//     landing_date: "Date",
//     launch_date: "Other date",
//     status: "loading still",
//     max_sol: 1000,
//     max_date: "Never",
//     total_photos: 250,
//     cameras: [{
//         id: 1,
//         name: "our Camera",
//         rover_id: 3,
//         full_name: "longer camera"}]

function SelectForm(){
    const [smallRovers, setSmallRovers] = useState([{value: NaN, label: "This is loading"}])
    const [selection, setSelection] = useState({value: NaN, label: "Unknown"});
    const handleSelectionChange = (event: {value: number, label: string} | null) => {
        const myEvent = event || { value: 6, label: 'Broken' }
        setSelection({value: myEvent.value, label: myEvent.label})
    }
    useEffect(() => {
        findMeRovers().then((rovers: Rover[]) => {
            setSmallRovers(makeSmallRovers(rovers))
        })
        //smallRovers = array of small rovers
    })
    return (
        <section>
            <Select id={"mySelectForm"} options={smallRovers} onChange={(event) => {handleSelectionChange(event)}}/>
            <p>You picked {selection.label}</p>
        </section>
    )
}

export default SelectForm

