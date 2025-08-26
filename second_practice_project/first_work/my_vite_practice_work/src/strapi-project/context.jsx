import React from "react";
import { useState, createContext,useContext } from "react";


const AppContext = createContext();

function AppProvider({children}){

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [pageId, setPageId] = useState(null);
    const openSideBar = () =>{
        setIsSideBarOpen(true);
    };
    const closeSideBar = () =>{
        setIsSideBarOpen(false);
    };

    return <AppContext.Provider value={{isSideBarOpen, openSideBar, closeSideBar, pageId, setPageId}}>
                {children}       
    </AppContext.Provider>
}
export default AppProvider;


export const useGlobalContext = () =>{
    return useContext(AppContext);
};