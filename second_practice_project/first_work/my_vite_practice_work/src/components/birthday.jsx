import React from "react";
import { useState } from "react";
import { someValues } from "./data";
import List from "./list";
import Person from "./person";

function BirthDay(){

const [people, setPeople] = useState(someValues);
console.log(someValues);
return(
    <>
    <section className="birthday-container">
    <div>
        
<h3>Birthday reminder starter</h3>
<h4>{people.length} birthday today</h4>
<List people={people}/>
    </div>
    </section>
    </>
)
}
export default BirthDay;