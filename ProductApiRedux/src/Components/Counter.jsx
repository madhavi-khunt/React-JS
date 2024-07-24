import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import a from '../Redux/Counter/action'

function Counter() {

  const select=useSelector((e)=>e.reducer)
  // console.log(select);
  const  dispatch=useDispatch()


  return (
    <div>
      <h1>{select.count}</h1>
      <button onClick={()=>dispatch(a())}>INC</button>
      <button onClick={()=>dispatch({type:"DEC"})}>DEC</button>
      
    </div>
  )
}

export default Counter
