import React from 'react'

function Child(props) {
    const {greetHandler} = props;
    return (
        <div>
            <button onClick={() => greetHandler('function attribute')}>Greet Parent</button>
        </div>
    )
}

export default Child