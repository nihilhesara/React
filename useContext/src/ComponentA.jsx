import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

function ComponentA(){

    const [user, setUser] = useState("Nihil");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user}/>
        </div>
    );
}

export default ComponentA