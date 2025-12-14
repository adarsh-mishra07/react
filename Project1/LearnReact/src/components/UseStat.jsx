import React from "react";
import { useState } from "react";


const UseStat = () => {
    //let a = 0;
    const [a, setA] = useState(0);
    const increment = () => {
        setA(a + 1);
    }
    const decrement = () => {
        setA(a - 1);
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Hello= {a}</h1>
            <button className="bg-purple-300 rounded-sm p-2" onClick={increment}>increment</button>
            <button className="bg-purple-300 rounded-sm p-2" onClick={decrement}>decrement</button>
        </div>
    )
}

export default UseStat;