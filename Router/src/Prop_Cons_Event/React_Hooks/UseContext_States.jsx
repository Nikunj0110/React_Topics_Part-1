import React, { useState } from "react";
import UseContext from "./UseContext";

const UseContext_States = (props) => {
    const s1={
        name:"Nikunj",
        class:"5b"
    }

    const [state,setState]=useState(s1)

    const update=()=>{
        setTimeout(() => {
            setState({
                name:"Nikunj Bhai",
                class:"12b"
            })
        }, 1000);
    }
return(
  <UseContext.Provider value={{state,update}}>
        {props.children}
  </UseContext.Provider>
)
};
export default UseContext_States;
