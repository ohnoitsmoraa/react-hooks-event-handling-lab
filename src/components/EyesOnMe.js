// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function eventFocus() {
    console.log("Good!");
  }
  function eventBlur() {
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={eventFocus} onBlur={eventBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
