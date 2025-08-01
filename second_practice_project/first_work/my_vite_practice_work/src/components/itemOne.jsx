import React from "react";
import { useState } from "react";
import SingleItem from "./singleItem";

function ItemOne({items, removeItem , editItem}){

    return(
        <>
        <div className="items">
        {items.map((item)=>{
            return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>
        })}

            <h4>ItemOne</h4>
        </div>
        
        </>
    )
}
export default ItemOne;