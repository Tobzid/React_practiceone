import React from "react";
import { useState } from "react";
import Title from "./Title";
import { tours } from "./data";

function Feature(){

    return(
<>

<section id="tour">
<div className="featureDiv"> {/* the container div starts here */}

{/* <h1 id="idInFeature">FEATURED <span id="idTours">TOURS</span></h1> */}
<Title title="FEATURED" subtitle="TOURS"/>

<div className="featuredContent"> {/* the inner container div starts here */}


<div className="featcontDiv">
<img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />

<div className="underImgCont">
    <h5>Tibet Adventure</h5>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo totam quaerat minus, illum quam, nihil nisi quasi eos blanditiis reiciendis, deserunt consequuntur animi repellendus cum tempore sunt vitae quibusdam culpa.</p>

</div>
</div>

<div className="featcontDiv">
<img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
<div className="underImgCont">
<h5>Best of Java</h5>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo totam quaerat minus, illum quam, nihil nisi quasi eos blanditiis reiciendis, deserunt consequuntur animi repellendus cum tempore sunt vitae quibusdam culpa.</p>
</div>
</div>

<div className="featcontDiv">
<img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
<div className="underImgCont">
 <h5>Explore Hong Kong</h5>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo totam quaerat minus, illum quam, nihil nisi quasi eos blanditiis reiciendis, deserunt consequuntur animi repellendus cum tempore sunt vitae quibusdam culpa.</p>

</div>
</div>

</div> {/* the inner container div ends here */}


<div className="featuredContent"> {/* the inner container div starts here */}
{tours.map((tour) =>{
    const {id, title, info, location, duration, cost} = tour;
    
    return(
        <>
        <section className="theTourSess">



<div key={id} className="featcontDiv">
<img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />

<div className="underImgCont">
    <h5>{title}</h5>
<p>{info}</p>

</div>
</div>

        </section>        
        
        </>
    )
})}
</div>    
</div> {/* the container div ends here */}

</section>

</>
    )
}
export default Feature;