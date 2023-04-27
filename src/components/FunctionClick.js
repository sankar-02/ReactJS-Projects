// ReactJS Tutorial - 13 - Event Handling
// Event Handler is a function not a function call
import React from 'react'

export default function () {
    const clickHandler = () => console.log("Functional component Click")
  return (
    <div>
        <button onClick= {clickHandler}> Function Click </button>
    </div>
  )
}
