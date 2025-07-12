import { useState } from "react";


function UseStateObject(){

const [name, setName] = useState("Peter");
const [age, setAge] = useState(24);
const [hobby, setHobby] = useState("Read books");

const displayPerson = ()=>{
    setName("John");
    setAge(28);
    setHobby("Scream at the computer");
}
return(
    <>
    <div className="objUseCont">
<h4>useState Object example</h4>

<h3>{name}</h3>
<h3>{age}</h3>
<h4> Enjoys: {hobby}</h4>
<button className="btn" onClick={displayPerson}>Change to John</button>
    </div>
    
    </>
)


}
export default UseStateObject;