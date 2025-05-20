// import React, { useEffect, useState } from 'react'

// function Api_Call() {
//   const [users,setUsers]=useState([])

//   useEffect(()=>{
//        fetch("https://jsonplaceholder.typicode.com/users")
//        .then((response)=>response.json())
//        .then((data)=>setUsers(data))
//        .catch ((error)=>console.log("Error Ocured",error))
//   },[])
//   return (
//     <>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user)=>(
//           <li><b>{user.name}</b> - {user.email}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default Api_Call




// SECNOD METHOD IN API CALLING 
import React, { useEffect, useState } from 'react'

function Api_Call() {
  const [users,setUsers]=useState([])

  const getdata=async()=>{
    try{
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await res.json();
      setUsers(data)
    }
    catch(error){
      console.error("Error IN fetching Data:",error)
    }
  };

  useEffect(()=>{
    getdata();
  },[])
  return (
    <>
    <h2>User List</h2>
    <ul>
      {users.map((user)=>(
        <li>
          {user.name}-{user.email}
        </li>
      ))}
    </ul>
    </>
  )
}

export default Api_Call