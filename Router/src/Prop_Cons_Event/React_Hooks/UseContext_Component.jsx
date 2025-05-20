import React, { useContext, useEffect } from 'react'
import UseContext from './UseContext'

function UseContext_Component() {
    const a=useContext(UseContext)

    useEffect(()=>{
        a.update();
    },[])
  return (
    <div>
    My name is {a.state.name} and class is {a.state.class}
    </div>
  )
}

export default UseContext_Component