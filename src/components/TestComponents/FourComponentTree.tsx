import React, {useContext, useEffect, useState} from 'react';
import '../App.css';
import {CountContext} from "../contexts/CountContext";

function Component4() {
    const context = useContext(CountContext)
    return (
        <p>You clicked {context.count} times</p>
    )
}

function Component3() {
    return (
        <>
            <Component4></Component4>
            <p>Message</p>
        </>
    )
}

function Component2() {
    const context = useContext(CountContext)
    return (
        <button onClick={() => {
            context.setCount(context.count + 1)
            context.myStorage.setItem("count", String(context.count + 1))
        }}>
            No! Click me
        </button>
    )
}

function Component1() {
    return (
        <>
            <Component2></Component2>
            <Component3></Component3>
        </>

    )
}

function FourComponentTree() {
    const myStorage = window.localStorage
    useEffect(() => {
        if (myStorage.getItem("count") === null) {
            myStorage.setItem("count", "0")
        }
    })
    const [count, setCount] = useState(parseInt(myStorage.getItem("count") || "0"));

    return (
        <CountContext.Provider value={{count: count, setCount: setCount, myStorage: myStorage}}>
            <Component1></Component1>
        </CountContext.Provider>
    )
}

export default FourComponentTree