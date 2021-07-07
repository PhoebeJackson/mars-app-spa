import React, {useContext, useEffect, useState} from 'react';
import './App.css';

interface ContextInterface {
    count: number
    setCount:  React.Dispatch<React.SetStateAction<number>> | {(): null}
    myStorage: Storage
}

const initialContext: ContextInterface = {count: 0, setCount: () => {}, myStorage: window.localStorage}
const CountContext = React.createContext(initialContext)

function Component4() {
    const context = useContext(CountContext)
    return (
        <li>Component 4
            <ul id={"component4"}>
                <li>You clicked {context.count} times</li>
            </ul>
        </li>
    )
}

function Component3() {
    return (
        <li> Component 3
            <ul id={"component3"}>
                <Component4></Component4>
                <li>Message</li>
            </ul>
        </li>
    )
}

function Component2() {
    const context = useContext(CountContext)
    return (
        <li> Component 2
            <ul id={"component2"}>
                <li>
                    <button onClick={() => {
                        context.setCount(context.count + 1)
                        context.myStorage.setItem("count", String(context.count + 1))
                    }}>
                        Click me
                    </button>
                </li>
            </ul>
        </li>
    )
}

function Component1() {
    return (
        <li> Component 1
            <ul id={"component1"}>
                <Component2></Component2>
                <Component3></Component3>
            </ul>
        </li>
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
            <ul id={"host"}>
                <Component1></Component1>
            </ul>
        </CountContext.Provider>
    )
}

export default FourComponentTree