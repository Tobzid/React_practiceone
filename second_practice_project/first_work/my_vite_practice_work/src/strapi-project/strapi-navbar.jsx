import React from "react";
import NavLinks from "./strapi-NavLink";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Navbar(){

    const {openSideBar} = useGlobalContext();

    return(
        <nav>

           <div className="nav-nav">
             <div className="strapi-nav-center">
                <h3 className="strapi-logo">Strapi</h3>
                <button className="strapi-toggle-btn" onClick={openSideBar}>
                    <FaBars/>
                </button>
                <NavLinks/>
            </div>
           </div>
        </nav>
    )
}
export default Navbar;