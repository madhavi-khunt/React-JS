import React from 'react'
import HOC from './HOC'

function CountAdd(props) {
  return (
    <div id='count1'>
       <h1>{props.s}</h1>
       <button onClick={props.h}>add</button>
    </div>
  )
}

export default HOC(CountAdd)
