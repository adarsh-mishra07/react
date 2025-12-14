import React from "react";
import { useState } from "react";

const EventH = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (

        <div className="bg-blue-950 text-white h-screen flex flex-col items-center justify-center">
            <div>
                <h1 className="text-3xl font-semibold">{count}</h1>
            </div>
            <div>
                <button className="bg-blue-400 px-8 py-2 rounded-lg" onClick={increment}>+</button>
                <button className="bg-blue-400 px-8 py-2 rounded-lg" onMouseEnter={decrement}>-</button>
                <button className="bg-blue-400 px-8 py-2 rounded-lg" onMouseLeave={reset}> Reset</button>
            </div>
        </div>
    )
}

export default EventH;