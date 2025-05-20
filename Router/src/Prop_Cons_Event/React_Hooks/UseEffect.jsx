// import React, { useEffect, useState } from 'react'

// function UseEffect() {
//     const [Count,setCount]=useState(0)

//     useEffect(()=>{
//         console.log(Count);
//     },[Count])

//   return (
//     <>
//     <h2>Count:{Count}</h2>
//     <button onClick={()=> setCount(Count+1)}>Click me</button>
//     </>
//   )
// }

// export default UseEffect




//2nd Example
// import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [Time, setTime] = useState();

//   useEffect(() => {
//     setInterval(() => {
//       const res = new Date();
//       setTime(res.toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return (
//     <>
//       <h2>Time:{Time}</h2>
//     </>
//   );
// }

// export default UseEffect;



//3rd Example
import React, { useEffect } from 'react';

function UseEffect() {
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function (optional)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means this runs once on mount

  return <h1>Hello, World!</h1>;
}

export default UseEffect;
