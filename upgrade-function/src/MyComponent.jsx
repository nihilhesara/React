import React, { useState } from "react";

function MyComponent() {
    // Initialize values
    const [count, setCount] = useState(0);

    // Create functions
    const increment = () => {
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        // Takes the PENDING state to calculate NEXT state.
        // React puts your upate function in a queue (waiting in line)
        // During the next render, it will call them in the same order.
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    // Return the output
    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponent;
