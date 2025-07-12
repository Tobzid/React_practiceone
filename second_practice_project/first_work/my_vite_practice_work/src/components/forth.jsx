import React, { useState } from "react";

function ControlledInputs(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleChange =(e)=>{
        setName(e.target.value);    
    };

    const handleSubmit = (e)=>{
        e.preventDefault()
        // do something
        console.log(name, email);
    }


    return(
        <>
        <div className="control-form-div"> 

<form action="" className="form" onSubmit={handleSubmit}>
    <h4>Controlled inputs</h4>

<div className="form-row">
<label htmlFor="name" className="form-label">Name:</label>
<input type="text" name="" id="name" className="form-input" value={name} onChange={handleChange}/>
</div>


<div className="form-row">
<label htmlFor="email" className="form-label">Email:</label>
<input type="email" name="" id="email" className="form-input" value={email} onChange={(e)=> setEmail(e.target.value)}/>
</div>

<button type="submit" className="btn-submit">
    Submit
</button>
</form>

        </div>        
        </>
    )
}
export default ControlledInputs;