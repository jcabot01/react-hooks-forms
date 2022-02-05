import React from "react";

//this function renders the current State to the page in <h1>s, in real time, no submit needed
function DisplayData({ firstName, lastName }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>  
  )
}

export default DisplayData