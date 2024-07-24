import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import fetching from '../Redux/Product/action'

function Product() {

    const dispatch=useDispatch()
    const data=useSelector((e)=>e.productreducer)
    console.log(data)

   useEffect(()=>{
    fetching(dispatch)
   },[dispatch])
  return (
    <div>
      <button onClick={()=>fetching(dispatch)}>Click</button>
     {
      data.data.map((e)=>{
        <h3>{e.id}</h3>
      })
     }
    </div>
  )
}

export default Product
