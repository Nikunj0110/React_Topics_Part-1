export const Event =() =>{
    // function handleClick(){
    //     alert("Hey I Am A BUtton CLick Event");
    // }
    const handleClick =(event)=>{
        alert(`Hey ${event} click`)
        console.log(`Hey ${event} click`);
        // console.log(event);
        // console.log(event.target);
    }
    return (
        <> 
            <button onClick={handleClick}>Click Me</button> <br/>
            {/* <button onClick={(event)=>handleClick(event)}>Click Me 2</button><br/> */}

            {/* <button onClick={(event)=>console.log(event)}>Click me 3</button>
            <button onClick={()=>alert("High Alert che")}>Click me 4 </button> */}
            <button onClick={()=>handleClick("Nikunj")}>Click Please</button>
        </>
    )
};


import { useState } from "react"
export const TextChanger=()=>{

const[text,setText]=useState("Hello");

const handleClick=()=>{
    setText("New Value Generated");
}
    return (
        <>
        <p>{text}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
