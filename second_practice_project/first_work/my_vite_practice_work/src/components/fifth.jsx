import React from "react";
import { useState } from "react";
import { data } from "./data";
function UserChallenge(){


    const [name, setName] = useState("");
    const [users, serUsers] = useState(data);

    const handleThisSubmit = (e) => {
        e.preventDefault()
        if (!name) return;
        const fakeId = Date.now();
        console.log("form submit");
        const newUser = {id:fakeId, name}
        const updatedUsers = [...users, newUser]
        serUsers(updatedUsers)
        setName("");
        // console.log(fakeId);
    }

    const removeUser = (id) =>{
        const updatedUsers = users.filter((person)=> person.id !== id);
        serUsers(updatedUsers)
    }
return(
    <>
    <div className="user-form-cont">
<form action="" className="user-form" onSubmit={handleThisSubmit}>
<h4>Add User</h4>

<div className="for-r-w">
    <label htmlFor="name" className="forLabel">Name</label>
    <input type="text" name="" id="name" className="inputForm" value={name} onChange={(e) => setName(e.target.value)}/>
</div>

{/* <div className="for-r-w">
    <label htmlFor="name" className="forLabel">Name</label>
    <input type="text" name="" id="name" className="inputForm" />
</div> */}
<div className="bTnDiv">
<button type="submit" className="submitBtn">Submit</button>
</div>

</form>
<h4>Users</h4>
{
    users.map((user)=>{
        return <div key={user.id}>
                        {user.name}
                        <button onClick={()=> removeUser(user.id)} className="remove-btn"> remove user</button>
             </div>
    })
}

    </div>   
    </>
)

}
export default UserChallenge;