import React, { useState } from "react";
import "./FormStyle.css";

function Form() {
    const [values,setvalues]=useState({
        name:"",
        email:"",
        contact:""
    })

    const handleChanges=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }
    const resetFun=()=>{
        setvalues({ name:"",email:"",contact:""})
    }
  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" required placeholder="Enter Name:" name="name" value={values.name}
         onChange={(e)=>handleChanges(e)}/>

         <label htmlFor="email">Email:</label>
        <input type="email" required placeholder="Enter Email:" name="email" value={values.email}
         onChange={(e)=>handleChanges(e)}/>

         <label htmlFor="contact">Mobail No:</label>
        <input type="text" required placeholder="Enter Mobail No::" name="contact" value={values.contact}
         onChange={(e)=>handleChanges(e)}/>

        <button type="button" onClick={resetFun}>Reset</button>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default Form;
