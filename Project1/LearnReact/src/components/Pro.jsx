import React from "react";
import Uiface from "./Uiface";
const Pro = (props) => {
    return (
        <>
            <h1>{props.info} </h1>
            <h1 className="text-4xl text-red-500 font-bold">Tailwind v4 Working!</h1>
            <li>{props.yourLink}</li>
            <li>{props.Add}</li>

        </>
    )
}
export default Pro;