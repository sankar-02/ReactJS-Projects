import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    if(this.state.isLoggedIn) {
        return <h1>Hello Sankar!</h1>
    } else {
        return <h1>User Login</h1>
    }
  }
}

export default UserGreetings