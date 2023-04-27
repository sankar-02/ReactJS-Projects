import React, { Component } from 'react'

class ClassClick extends Component {
     clickHandler = () => console.log("Class component Click")
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick