import React from "react";
import {useState} from "react";


function MultipleInputs(){

const [user, setUser] = useState({
    name : "", email: "", password: ""
});

const handleChannge = (e) =>{
    // consolr.log(e.target.name);
    // console.log(e.target.value);
    setUser({...user,[e.target.name]: e.target.value})
}

const handleChanngeSubmit = () =>{
    e.preventDefault();
    console.log(user);
}

    return(
        <>
        <div className=" sixthCont-Div">
        <form className="sixth-form-T ">
            <h4> MultipleInputs Input </h4>

<div className="six-T">

        <label htmlFor="name" className=" " >
Name:
        </label>
        <input type="text" name="name" id="name" className=" " value={user.name} onChange={handleChannge} />
</div>

<div className="six-T">
<label htmlFor="email" className=" " >
Email:
        </label>
        <input type="text" name="email" id="email" className=" " value={user.email} onChange={handleChannge} />
</div>
<div className="six-T">
<label htmlFor="password" className=" " >
            Password:
        </label>
        <input type="password" name="password" id="password" className=" " value={user.password} onChange={handleChannge} />
</div>
        

<button className="sit-T-btn" onChange={handleChanngeSubmit}> SUBMIT </button>
        </form>
        </div>        
        </>
    )
}
export default MultipleInputs;