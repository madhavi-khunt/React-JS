import { err, load, success } from "./actiontype"


const fetching=()=>{
    return (dispatch)=>{
    dispatch({type:load})
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((data)=>{
        dispatch({type:success,payload:data})
    })
    .catch((error)=>{
        dispatch({type:err})
    })}
}

export default fetching