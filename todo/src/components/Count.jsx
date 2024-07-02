import React, { useState } from 'react'

function Count() {

    const [state,setState]=useState({
        count:0,
        c:10
    })
    const handleClick=()=>{
        setState({...state,count:state.count+1})
    }

  return (
    <div id='box'>
        <div id='inner'>
            <h1>{state.count}</h1>
            <button onClick={handleClick}>+</button>
            <button disabled={state.count===0} onClick={(el)=>setState({count:state.count-1})}>-</button>
        </div>
    </div>
  )
}

export default Count
