import React, {useEffect, useState} from 'react';
import {getRovers} from "../API/APICallFunctions";
import {Rover} from "../API/APIInterfaces";

function HenrysDumbTests() {
    const [result, setResult] = useState("Default");

    const handleButtonClick = () => {
        const fetchRovers = async () => {
            const rovers: Rover[] = await getRovers()
            setResult(String(rovers))
        }
        fetchRovers().then(() => {})
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click</button>
            <p>{result}</p>
        </>
    )
}

export default HenrysDumbTests