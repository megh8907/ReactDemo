import React from "react";
import { useState } from "react";

function Sanu(){
    const [color,setColor]=useState("red");
    return(
        <>
        <h1>my favourite colour is {color}</h1>
        <button type="button" onClick={()=> setColor("blue")}>
           Blue 
        </button>
        </>
    );
}

export default Sanu;