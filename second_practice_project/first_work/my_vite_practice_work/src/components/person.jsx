import React from "react";
import { useState } from "react";
import { someValues } from "./data";
function Person ({image, name, age}){

    return(
        <>
        <article className="person">
<img src={image} alt="name" />
<div>
    <h4>{name}</h4>
<h4>{age}</h4>
</div>
        </article>
        
        </>
    )
}
export default Person;