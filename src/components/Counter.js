import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
        this.state= {
            count: 0
        }
    }

    increment() {
        this.setState(
            {
                count: this.state.count+1
            },
            () => {
                console.log(this.state.count)
            }
        )
    }

    decrement() {
        this.setState(
            {
                count: this.state.count - 1
            },
            () => {
                console.log(this.state.count)
            }
        )
    }

    reset() {
        this.setState(
            {
                count: 0
            },
            () => {
                console.log(this.state.count)
            }
        )
    }

  render() {
    return (
      <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.increment()}>Increase</button>
          <button onClick={() => this.decrement()}>Decrease</button>
          <button onClick={() => this.reset()}>Reset</button>
    </div>
    )
  }
}

export default Counter