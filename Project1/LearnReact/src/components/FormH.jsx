import React, { useState } from "react";

const FormH = () => {
    const [input, setInput] = useState({});
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page reload
        // alert("Form submitted!");
        console.log(input)
    };

    return (
        <div className="h-screen flex justify-center items-center bg-lime-950 text-white">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        //id="name" className="text-black" 
                        name="name"
                        onChange={handleInput}
                        value={input.name} />




                    <label htmlFor="email">Email</label>

                    <input
                        type="text"
                        name='email'
                        onChange={(handleInput)}
                        value={input.email} />

                    <button type="submit" className="bg-blue-400 px-8 py-2 rounded-lg mt-4">
                        Submit
                    </button></div>
            </form>
        </div >
    );
};

export default FormH;



//// e.target.value - to find currect value
// key binding - every value have value