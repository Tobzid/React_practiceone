import { useState } from "react";


function UseStateObject(){

    const [person, setPerson] = useState(
        {name: "Peter",
            age: 24,
            hobby: "Read books"
        }
    );



// const [name, setName] = useState("Peter");
// const [age, setAge] = useState(24);
// const [hobby, setHobby] = useState("Read books");

const displayPerson = ()=>{
    // setName("John");
    // setAge(28);
    // setHobby("Scream at the computer");
    setPerson({name: "John", age: 28, hobby : "Scream At The Computer"});

}
return(
    <>
    <div className="objUseCont">
<h4>useState Object example</h4>

<h3>{person.name}</h3>
<h3>{person.age}</h3>
<h4> Enjoys: {person.hobby}</h4>
<button className="btn" onClick={displayPerson}>Change to John</button>
    </div>
    
    </>
)


}
export default UseStateObject;