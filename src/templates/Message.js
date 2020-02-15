import React, { Component } from 'react'

export default class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor',
            count: 0
        }
    }

    changeMessage = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    increment = () => {
        this.setState(
            prevState => ({
                count: prevState.count + 1
            })
        )
    }

    render() {
        const { message, count } = this.state;
        return (
            <div>
                <h1>{message}</h1>
                <button onClick={this.changeMessage}>Hit it</button>

                <h1>Visits: {count}</h1>
                <button onClick={this.increment}>Counter ++</button>
            </div>
        )
    }
}
