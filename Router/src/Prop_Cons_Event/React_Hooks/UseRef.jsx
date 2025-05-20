import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

function UseRef() {
    const[count,setcount]=useState(0);
    const btnref=useRef();

    useEffect(()=>{
        console.log(`First Rendering`);
        btnref.current.style.backgroundColor="red"
    })
  return (
    <>
    <button ref={btnref} onClick={()=>setcount(count+1)}>Count {count}</button>
    <button onClick={()=>{btnref.current.style.backgroundColor="blue"}}>Hello</button>
    </>
  )
}
//For more examples go to useRef Documentation in google
export default UseRef

