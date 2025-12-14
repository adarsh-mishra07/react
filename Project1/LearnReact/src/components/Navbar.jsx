import React from "react";
//import "./css/Navbar.css";
import RouterDom from "../RouterDom";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="flex flex-row justify-between p-4 bg-gray-200">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Yotube</li>
                <div className="flex space x-S">
                    <Link to="/home">Home</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/about">about</Link>
                </div>
            </ul>
            Adarsh Mishra
        </div>
    );
};

export default Navbar;