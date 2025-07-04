import React from "react";

function Title({title, subtitle}){

    return(
        <>
                <section id="titleAbout" className="titleaboutpage">

<div className="aboutContainer">
<h1>{title} <span id="firstTextSpan">{subtitle}</span></h1>
</div>
</section>
        </>
    )
}
export default Title;