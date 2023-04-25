import React, {Component} from "react"

class Message extends Component {
    constructor() {
        super()
        this.state= {
            message: 'Please Subscribe'
        }
    }
    changedMessage() {
        this.setState({
            message: "Thanks for Subscribing"
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.changedMessage()}>Subscribe!</button>
            </div>
        )
    }
}

export default Message