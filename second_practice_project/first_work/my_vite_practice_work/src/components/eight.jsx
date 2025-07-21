import React from "react";
import { useState } from "react";
import { info } from "./data";
import { people } from "./data";

function EightPrevNext(){
const prevImg = "https://cdn-icons-png.flaticon.com/512/151/151846.png";
const nextImg = "https://cdn-icons-png.flaticon.com/512/130/130884.png";

const [index, setIndex] = useState(0);
const {name, age, quote} = info[index];

const checkNumber = ()=>{
    if (number > info.length - 1){
        return 0;
    }; 
    if (number < 0){
        return info.length - 1;
    };
    return number;
};

// this is for the random button.
const randomPerson = () =>{
    // console.log(Math.random());
    let randomNumber = Math.floor(Math.random() * people.length);
    // console.log(randomNumber);
    if (randomNumber === index){
        randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
};

// this works for the next button
const nextPerson = ()=>{
    setIndex( (currentPerson) =>{
        const newIndex = currentPerson + 1;
        if(newIndex > info.length - 1){
            return 0;
        };
        return newIndex;
    }
    )
}
 
// this works for the previous button
const prevPerson = ()=>{
    setIndex( (currentPerson) =>{
        const newIndex = currentPerson - 1;
        if(newIndex < 0){
            return info.length - 1;
        }
        return newIndex;
    }
    )
}


return(
        <>
        <article className="review">
            <div>
<h4 className="author-review">
    {name}
</h4>
<p>This person is {age} years old</p>
<p>This is the person's quote {quote}</p>
            </div>
            <div className="nextPrev">

<img src={prevImg} alt="" onClick={prevPerson}/>
<img src={nextImg} alt="" onClick={nextPerson}/>
</div>

<button className="btn-random" onClick={randomPerson}>surprise me</button>
        </article>
        </>
    )
}
export default EightPrevNext