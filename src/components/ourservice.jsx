import React from "react";
import { useState } from "react";
import Title from "./Title";
import { services } from "./data";
function Service({theme, setTheme}){
    return(
        <>
        <section id="">


        <div className="serviceDiv">

            {/* <h1 id="ourId">OUR <span id="ourIdSpan">SERVICES</span></h1> */}
<Title title="Our" subtitle="Services"/>

<div className="servContDiv">  {/* this is the servConDiv starts */}
{services.map((service) =>{
    const {id, icon, text, title} = service;

    return (
        <>
          
<div className="firstServiceDiv" key={id}>
<i class={icon}></i>
<h3>{title}</h3>
<p>{text}</p>
</div>

        
        </>
    )
})}
</div>

        </div>

        </section>
        </>
    )
}
export default Service;