import React from "react";
import { useState } from "react";
import Title from "./Title";


function About({theme, setTheme}){

    const houseImage = "https://thumbs.dreamstime.com/b/beautiful-village-house-garden-picture-56425297.jpg";

    return(
        <>
        <section id="about" >

<div className="aboutContainerOne">
{/* <h1>ABOUT <span id="firstTextSpan">US</span></h1> */}
<Title title="ABOUT" subtitle="US"/>
<div className="aboutContent">
    <div className="imageOneDiv">
        <img className="houseImageClass" src={houseImage} alt="" />
    </div>
    <div className="contTwoDiv">
        <h2>Explore The Difference</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt id rerum ipsam adipisci quisquam porro sed. Sunt repellat corporis ut aspernatur, culpa similique, saepe tenetur quis cum perferendis quia?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nam dolore quia quae consectetur, autem atque esse architecto vero. Eos quod harum accusamus excepturi tempora rem, fuga ipsum repudiandae id.</p>
        <button>Read More</button>
    </div>
</div>
</div>

        </section>

        </>
    )
}
export default About;