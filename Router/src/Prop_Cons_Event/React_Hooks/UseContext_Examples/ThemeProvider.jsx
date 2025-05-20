import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider=({children})=>{
    const [Theme,setTheme]=useState("light")

    const themetoggler=()=> setTheme((prevtheme)=>(prevtheme==="light"?"dark":"light") )
    
    return (
        <ThemeContext.Provider value={{Theme,themetoggler}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;