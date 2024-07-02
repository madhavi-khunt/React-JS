import React, { useState } from 'react'



function Todo() {

    const [state,setState]=useState({
        title:"",
        img:""
    })

    const [arr,setArr]=useState([])

    const handleChange=(el)=>{
        let {name,value}=el.target
        setState({
            ...state,
            [name]:value
        })
    }
    // console.log(state);

    const handleClick=()=>{
        setArr([...arr,state])
        setState({
            title:"",
            img:""
        })
    }
    console.log(arr);

    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
   
  return (
    <div id='box'>
        <div id='inner'>

        <input type="text" name='title' value={state.title}  placeholder='Title' onChange={handleChange} /><br />
        <input type="text" name='img' placeholder='Imgurl' value={state.img}  onChange={handleChange} /><br />
        <button onClick={handleClick}>Submit</button>
        {/* <button onClick={(el)=>setShow(!show)}>show</button> */}
        <button onClick={handleShow}>Show</button>
        <div>
            {
                show ?
                arr.map((el)=>{
                   return (
                   <div>
                     <h1>{el.title}</h1>
                     <img src={el.img} alt={el.title} width={"100px"} />
                   </div>
                   )
                }) : <h5>Click The Button</h5>
            }
             {/* {show ? 
                    arr.map((el) => 
                        (
                        <div>
                            <h1>{el.title}</h1>
                            <img src={el.img} alt={el.title} />
                        </div>
                    ))
                 : (
                    <h1>Click the button</h1>
                )} */}
        </div>
    </div>
    </div>

  )
}

export default Todo
