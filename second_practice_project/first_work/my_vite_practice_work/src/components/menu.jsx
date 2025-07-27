import React from "react";
import { useState } from "react";
import MenuItems from "./MenuItems";

function Menu({items}){

    return(
        <>
       {items.map((menuItem) =>{
        
        return <MenuItems key={menuItem.id} {...menuItem}/>
       })}
        </>
    )
}
export default Menu;