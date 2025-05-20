import React, { Component } from 'react'

class Constructor extends Component{
    constructor(){
        super();
        // console.log("Constructer Is");
        this.state={
            message:"Nikunj Bhai"
        }
    }
    
    render(){
        // console.log("Render Method");
        return( <>
            <h2>{this.state.message}</h2>
        </>)
        
    }
}

export default Constructor