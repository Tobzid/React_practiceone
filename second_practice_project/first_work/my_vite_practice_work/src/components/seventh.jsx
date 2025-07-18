import React from "react";
import { useState } from "react";

function UncontrolledInputs (){

    const [value, setValue] = useState(0);

    const handleUncontrolledSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // console.log(formData);
        // const email = formData.get("email");
        // console.log([...formData.entries()]);
    const newUser = object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
    }

    return(
        <>
        <div className="uncontrolled-div">
<form action="" className="uncontrolled-form"  >
    <h4>Form Data API</h4>
    <div className="for-data-api">
        <label htmlFor="name"> Name:</label>

        <input type="text" name="name" id="name" />
    </div>

    <div className="for-data-api">
        <label htmlFor="email"> Email:</label>

        <input type="email" name="email" id="email" />
    </div>

    <div className="for-data-api">
        <label htmlFor="password"> Password:</label>

        <input type="password" name="password" id="password" />
    </div>
    <button className="uncontrolled-btn" onClick={handleUncontrolledSubmit}>Submit</button>
</form>
        </div>
        </>
    )
}
export default UncontrolledInputs;