import React from 'react'
import HOC from './HOC'

function CountMinus(props) {
    return (
        <div id='count1'>
           <h1>{props.s}</h1>
           <button onClick={props.m} disabled={props.s=== -15}>Minus</button>
        </div>
    )
}

export default HOC(CountMinus)
