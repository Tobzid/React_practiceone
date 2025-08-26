import React from "react";
import { useState } from "react";
import Title from "./title";
import { shortList, longList, list } from "./data";
import FileName from "./fileName";


function Carousel(){
const [people, setPeople] = useState(list);

const prevSlide = () =>{

};
  
const nextSlide = () =>{

};


return (
        <>
       <section className="slider-container">


<div className="fileInfo">
<FileName file="nine.jsx" repoName="React_practiceone/first_work(nine.jsx, menuitems.jsx, menu.jsx)" folderName="second_pratice_project/first_work[carousel.jsx,]"/>
</div>

{people.map((person, personIndex)=> {

const {id, name , title, age, image } = person;
    return <article className="slide " key={id} style={{transform: `translate(${100 * personIndex} %)`}}>
<img src={image} alt={name} className="person-image"/>
<h4>{name}</h4>
<p>{title}</p>


<button type="button" className="prev" onClick={prevSlide}>prev</button>

<button type="button" className="next" onClick={nextSlide}>next</button>
    </article>
})}



       </section>
        </>
    )
}
export default Carousel;