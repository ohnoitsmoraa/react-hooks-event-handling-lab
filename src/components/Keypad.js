// Code Keypad Component Here
import React from "react";
function Keypad (){
    function eventChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={eventChange}></input>
        </div>
    )
}

export default Keypad;