// Filter.js
import React, { useState } from "react";
import students from "./Student";

function Filter() {
    const [search, setSearch] = useState("");

    // Filter students based on search input
    const filteredStudents = students.filter((stud) =>
        stud.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="h-screen bg-zinc-900 text-white p-6">
            <h1 className="text-2xl mb-4">Student List</h1>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 rounded text-black"
            />

            {/* Filtered List */}
            <ul className="mt-4">
                {filteredStudents.map((stud, i) => (
                    <li key={i} className="mb-2">
                        Name: {stud.name}, Roll No: {stud.rollNo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filter;