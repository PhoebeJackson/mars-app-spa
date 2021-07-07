import React, {useEffect, useState} from 'react';

function ButtonCount() {

    const myStorage = window.localStorage
    useEffect(() => {
        if (myStorage.getItem("count") === null) {
            myStorage.setItem("count", "0")
        }
    })
    const [count, setCount] = useState(parseInt(myStorage.getItem("count")  || "0" ));
    return (
        <section>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count+1)
                myStorage.setItem("count", String(count+1))
            }}>
                Click me
            </button>
        </section>
    );
}

export default ButtonCount