import React from "react";
import { useState } from "react";
import { data } from "./data";
// import { people } from "./data";



function Second(){

 const [people, setPeople] = useState(data);

    const removeItem = (id) =>{
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    const clearAllItems = () =>{
         setPeople([]);
    };


    return(
        <>
        
        <div className="deleteContainer">
        {people.map((link) =>{
            return(
                <div key={link.id}>

<h4>{link.name}</h4>
<button type="button" onClick={removeItem}>Remove</button>
                </div>
            )
        })}


        <button type="button" onClick={clearAllItems}> ClearAll</button>
        </div>
        
        </>
    )
}
export default Second;