import React, { useState } from 'react'

function Calculator() {
const [input,setInput]=useState()

const handleClick=(value)=>{
    if(value==="C"){
        setInput("")
    }

    else if(value==="="){
        try{
            setInput(eval(input))
        }
        catch{
            setInput("Error Ocured")
        }
    }
    else{
        setInput((prev)=>prev+value)
    }
}

const buttons=[
      "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
]
  return (
    <div>
        <div>
            <input type='text'
            value={input}
                readOnly
            />
        </div>
        <div>
        {buttons.map((btn)=>(
            <button key={btn} onClick={()=>handleClick(btn)}>
                {btn}
            </button>
        ))}
        
        </div>
    </div>
  )
}

export default Calculator               



