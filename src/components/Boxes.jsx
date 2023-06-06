import React from "react";

export default function Boxes(props){
    
    const styles = {
        backgroundColor: props.on ? "black" : "transparent"
    }   

    return(
        <div 
        style={styles} 
        className="box" 
        onClick={()=>{props.toggle()}}
        ></div>
    )
}