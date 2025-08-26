// This strapi-sidebar.jsx explains fetching data from backend.

import React from "react";
import {FaTimes} from "react-icons/fa";
import sublinks from "./strapi-data";


import {useGlobalContext} from "./context";

function Sidebar(){

  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return(
    <>
    <aside className={isSidebarOpen? "strapi-sidebar show-sidebar" : "strapi-sidebar"}>
    <div className="strapi-sidebar-container">

<button className="strapi-close-btn" onClick={closeSidebar}>
<FaTimes/>
</button>

<div className="strapi-sidebar-links">
  {sublinks.map((item) =>{
    console.log(item);
    const {links, page, pageId} = item;
    return <article key={pageId} > 
      <h4>{page}</h4>

      <div className="strapi-sidebar-sublinks">
        {links.map((link)=>{
          const {url, icon, label, id} = link;
          return <a href={url} key={id}>
            {icon} {label}
          </a>
        })}
      </div>
    </article>
  })}
</div>
    </div>
    </aside>
    </>
  )
}
export default Sidebar;