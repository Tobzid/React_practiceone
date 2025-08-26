import React from "react";
import sublinks from "./strapi-data";
import { useGlobalContext } from "./context";

function NavLinks(){
    const {setPageId} = useGlobalContext();
    return(
        <>
        <div className="strapi-nav-link">
        {
            sublinks.map((item)=>{
                const {pageId, page} = item;
                return <button key={pageId} className="strapi-nav-link"
                onMouseEnter={()=> setPageId(pageId)}
                >
                    {page}
                </button>
            })
        }
        </div>
        <h2>NavLinks</h2>
        </>
    )
}
export default NavLinks;