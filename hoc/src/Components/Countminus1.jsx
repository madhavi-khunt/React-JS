import React from 'react'
import HOC from './HOC'

function Countminus1(props) {
  return (
    <div id='count1'>
      <h1>{props.s}</h1>
      <button onClick={props.m}>Minus</button>
    </div>
  )
}

export default HOC(Countminus1)
