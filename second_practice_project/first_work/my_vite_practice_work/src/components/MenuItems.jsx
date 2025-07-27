import React from "react";
import { useState } from "react";

function MenuItems({image, name, age}){

    return(
        <article className="menu-items-image">
            <img src={image} alt={name} />

            <div className="item-info">
                <h4>{name}</h4>
                <span className="item-age">
                    {age}
                </span>
            </div>
        </article>
    )
}
export default MenuItems;