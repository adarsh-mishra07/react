import React from "react";

function MapList() {
    const arr = ["home", "contact", "service", "app"];
    const stu = ["Adarsh", "rahul", "rohan"];

    return (
        <div>
            <ul>
                {arr.map((list, index) => {
                    console.log(list, index); // logs to console
                    return <li key={index}>{list}</li>; // renders to UI
                })}
            </ul>
            <ol>
                {stu.map((student, ind) => {
                    console.log(student, ind); // logs to console
                    return <li key={ind}>{student}</li>; // renders to UI
                })}
            </ol>
        </div>
    );
}

export default MapList;