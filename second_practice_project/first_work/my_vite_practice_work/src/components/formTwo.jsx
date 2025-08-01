import React from "react";
import { useState } from "react";
import FileName from "./fileName";
// import {nanoid} from "./nanoid";



function FormTwo({addItem}){



const [newItemName, setNewItemName] = useState("");


const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(newItemName);
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
}



    return(
        <>


    <div className="fileInfo">
        <FileName file="nine.jsx" repoName="React_practiceone/first_work(formTwo.jsx, ItemOne.jsx, singleItem.jsx )" folderName="second_pratice_project/first_work"/>
        </div>

        <section className="sect-cent">
        <form action="" onSubmit={handleSubmit}>

            <h4>Glocery bud</h4>

            <div className="form-control-div">
                <input type="text"className="glocery-form" value={newItemName} onChange={(event)=>setNewItemName(event.target.value)}/>
                <button type="submit" className="btn-form">Add Item</button>
            </div>
        </form>
        </section>
        </>
    )
}
export default FormTwo;