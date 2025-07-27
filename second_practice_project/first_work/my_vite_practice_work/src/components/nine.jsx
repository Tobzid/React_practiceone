import React from "react";
import { useState } from "react";
import { questions } from "./data";
import FileName from "./fileName";
import { someValues } from "./data";
import Title from "./title";
import Menu from "./menu";
import MenuItems from "./MenuItems";



function Accordion(){


    const [menuItems, setMenuItems] = useState(someValues);

    return(
        <>
        <div className="nine-container-Div">

<div className="fileInfo">
<FileName file="nine.jsx" repoName="React_practiceone/first_work(nine.jsx, menuitems.jsx, menu.jsx)" folderName="second_pratice_project/first_work"/>
                </div>

<div className="text-title-div">
<Title text="Our Menu"/>
</div>

<Menu items={menuItems}/>
        </div>
        </>
    )
}
export default Accordion;