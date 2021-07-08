import React from "react";

interface ContextInterface {
    count: number,
    setCount:  React.Dispatch<React.SetStateAction<number>> | {(): null},
    myStorage: Storage,
}

const initialContext: ContextInterface = {count: 0, setCount: () => {}, myStorage: window.localStorage}
export const CountContext = React.createContext(initialContext)