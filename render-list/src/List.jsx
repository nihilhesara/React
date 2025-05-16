function List () {
    // if the array has only 1 value
    // const fruits = ["Apple", "Orange", "Banana", "Mango", "Pineapple"];

    // const listItems = fruits.map(fruit => <li>{fruit}</li>)

    const fruits = [{id: 1, name: "Apple", calaories: 95}, 
                    {id: 2, name: "Orange", calaories: 45}, 
                    {id: 3, name: "Banana", calaories: 105}, 
                    {id: 4, name: "Mango", calaories: 159}, 
                    {id: 5, name: "Pineapple", calaories: 37}];
    
    // SORTING
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse Alphabetical order
    // fruits.sort((a,b) => a.calaories - b.calaories); // Numeric
    // fruits.sort((a,b) => b.calaories - a.calaories); // Reverse Numeric
    
    // FILTER ONLY LOW CAL FRUITS
    const lowCalFruits = fruits.filter(fruit => fruit.calaories < 100)

    // const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
    //                                         {lowCalFruits.name} : &nbsp;
    //                                         <b>{lowCalFruits.calaories}</b></li>)

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name} : &nbsp;
                                            <b>{fruit.calaories}</b></li>)

    return(<ul>{listItems}</ul>);
}

export default List