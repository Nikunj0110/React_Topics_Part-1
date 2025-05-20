import React, { useState } from 'react'

function Jsx_Example() {
    const fruits=["Apple","Banana","Cherry","Strawberry"]
  return (
    <>
    <ul>
        {fruits.map((fruit)=>(
            <li>{fruit}</li>
        ))}
    </ul>
    </>
)
}

export default Jsx_Example




//1st EXAMPLE
// function Jsx_Example() {
//     const [count,setcount]=useState(0);
//   return (
//     <>
//     <h2>{count}</h2>
//     <button onClick={()=>{setcount (count+1)}}>Click Me</button>
//     </>
// )
// }



// 2nd example 
// function Jsx_Example({islogin}) {
//   return (
//     <>
//     <h1>Conditional Rendering JSX</h1>
//     {islogin?"Welcome Back!":"Go back"}
//     </>
// )
// }