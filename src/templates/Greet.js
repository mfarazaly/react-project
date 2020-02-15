import React from 'react'

export default function Greet(props) {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}
