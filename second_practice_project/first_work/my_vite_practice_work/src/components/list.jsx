import React from "react";
import { useState } from "react";
import Person from "./person";

function List({people}){

    return(
        <>
        <div>

            {people.map((person)=>{
                return <section>
                    <Person key={person.id} {...person}/>
                </section>
            })}
        </div>
        
        </>
    )
}
export default List;