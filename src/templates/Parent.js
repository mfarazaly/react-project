import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
    }
    
    greetMessage = (getValue) => {
        console.log(`Hello ${this.state.parentName} attribute value: ${getValue}`)
    }

    render() {
        return (
            <div>
                <Child greetHandler={this.greetMessage} />
            </div>
        )
    }
}

export default Parent
