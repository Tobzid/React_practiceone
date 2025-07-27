import React from "react";
import { useState } from "react";



function Title({text}){

    return(
        <>
        <div className="title-text">
        {text || "No Default Menu"}
        </div>
        </>
    )
}
export default Title;