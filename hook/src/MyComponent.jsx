import React, { useState } from "react";

function MyComponent() {
    // Create constant values
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    // Create functions
    const updateName = () => {
        setName("Nihil");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    };

    // return the output
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employment Status: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Toggle status</button>
        </div>
    );
}

export default MyComponent;
