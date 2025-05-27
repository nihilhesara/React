import React, {useState} from "react";

function MyComponent(){

    const [food, setFood] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){
        // getting new food
        const newFood = document.getElementById("foodInput").value;
        // clear the input feild after click the add food button
        document.getElementById("foodInput").value = "";

        // add the new item to the array using update function
        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        // parameter used to the function is ignored (click the item to remove it)
        setFood(food.filter((_,i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>

            <ul>
                {food.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li> )}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent