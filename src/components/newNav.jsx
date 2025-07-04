import React from "react";
import { PageLinks } from "./data";
{PageLinks.map((link)=>{
    return(
        <>
        

            
    <li key={link.id}>

<div className="navAnchor">
          <a href="#home">Home</a>
</div>
</li>

        
        </>
    )
})}
