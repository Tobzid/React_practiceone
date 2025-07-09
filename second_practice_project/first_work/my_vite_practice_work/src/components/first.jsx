import React from "react";
import { useState } from "react";

function TheState(){

    const [count, setCount] = useState(0);

    const handledClick = ()=>{
        setCount(count + 1);
    };

    return(
        <>
        <div>

<h1>You clicked {count} times</h1>

<button type="button" className="btn" onClick={handledClick}>click here</button>
        </div>
         </>
    )
}
export default TheState;