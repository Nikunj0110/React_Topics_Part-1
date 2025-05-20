import React, { useState } from 'react'
function Function_Component() {
let [state,setstate]=useState()

const handleTime=()=>{
  let demo=new Date();
  let main=demo.toLocaleTimeString();
  setstate(main)
}
  return (
   <>
   <button onClick={handleTime}>Current Time</button>
   <h3>{state}</h3>
   </>
  );
}

export default Function_Component


// 1st Example
// function Function_Component() {
// const [visible,setvisible]=useState(true)

// function handleclick(){
//   setvisible(!visible)
// }
//   return (
//     <div>
//   <button onClick={handleclick}>{visible? "Hide":"Show"}</button>
//   {visible && <p>Hello Bhai Log</p>}
//     </div>
//   );
// }




//2nd example
// function Function_Component() {
// const [click,setclick]=useState(0)
//   return (
//    <>
//     <h1>Click Tracker</h1>
//     <button onClick={()=> setclick(click+1)}>Click {click}</button>
//    </>
//   );
// }


// 3rd Example
// function Function_Component() {
// const [text,settext]=useState("")
//   return (
//    <>
//  <input type='text'
//   value={text}
//   onChange={(e)=>settext(e.target.value)}
//   placeholder='type here..'
//  />
// <p>You typed {text}</p>
//    </>
//   );
// }


// 4th Example
// function Function_Component() {
//   const [bgcolor,setbgcolor]=useState("black")

//   return (
//    <>
//    <div style={{height:'200px', width:'500px', backgroundColor:bgcolor}}></div>

//   <button onClick={(color)=>setbgcolor('red')}>Red</button>
//   <button onClick={(color)=>setbgcolor('green')}>green</button>
//   <button onClick={(color)=>setbgcolor('yellow')}>yellow</button>
//    </>
//   );
// }


// 5th Example
// function countincrease(){
//   setcount(count+1)
// }
//   return (
//    <>
//    <h1>Heart count increase</h1>
//    <button onClick={countincrease}>❤</button>
//    <button>{count}</button>
//    </>
//   );
// }