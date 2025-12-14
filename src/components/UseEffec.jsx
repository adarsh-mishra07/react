import React from "react";
import { useEffect, useState } from "react";
const UseEffec = () => {

    // useEffect(<call back fuction>,<[dependency may be optional | variable]>)

    //usecase 1st
    useEffect(() => {
        console.log("case 1")
    }, [])

    // usecase 2
    useEffect(() => {
        console.log("case 2")
    })

    //usecase 3
    //     const [dependency, setDependency] = useState(0);
    //     useEffect(() => {
    //         alert("Render completed")
    //     }, [dependency])
    //     return (

    //         <div> <h1>{dependency}</h1>
    //             <button onClick={() => setDependency(dependency + 1)}>Incement</button>
    //         </div>
    //     );
    // };


    //use case 4
    //     const [dependency, setDependency] = useState(0);
    //     useEffect(() => {
    //         alert(`mount ho rha h ${dependency}`)
    //         return () => {
    //             alert(`unmount ho rha h ${dependency}`)
    //         }
    //     }, [dependency])
    //     return (

    //         <div> <h1>{dependency}</h1>
    //             <button onClick={() => setDependency(dependency + 1)}>Incement</button>
    //         </div>
    //     );
    // };


    //use case 5
    const [dependency, setDependency] = useState(0);
    useEffect(() => {
        // 2 second बाद alert दिखेगा
        const timer = setTimeout(() => {
            alert("login kro");
        }, 2000);

        // cleanup function (optional)
        return () => clearTimeout(timer);
    }, []); // empty dependency array → सिर्फ पहली बार render पर चलेगा

    return (
        <div>
            <h1>{dependency}</h1>
            <button onClick={() => setDependency(dependency + 1)}>Increment</button>
        </div>
    );
};



export default UseEffec; 