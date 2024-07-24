

const fetching=(dispatch)=>{

    dispatch({type:"LOAD"})
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:"SUCCESS",payload:res})
    })
    .catch((err)=>{
        dispatch({type:"ERR"})
    })
    

}

export default fetching;