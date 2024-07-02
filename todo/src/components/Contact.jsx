import React, { useState } from 'react'

function Contact() {

    const [state,setState]=useState({
        name:"",
        email:"",
        city:""
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
            name:"",
            email:"",
            city:""
        })
    }

    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show)
    }

  return (
    <div id='box'>
      <div id='inner'>
        <h1>Contact</h1>
        <input type="text" onChange={handleChange} value={state.name} placeholder='Name' name="name" id="" /><br />
        <input type="text" onChange={handleChange} placeholder='Email' value={state.email} name='email' /><br />
        <input type="text" onChange={handleChange} placeholder='City' value={state.city} name='city' /><br />
        <button onClick={handleClick}>Contact</button>
        <button onClick={handleShow}>Show</button>
        {
            show ?
            arr.map((el)=>{
                return(
                        <div>
                            <p>Name : {el.name}</p>
                            <p>Email : {el.email}</p>
                            <p>City : {el.city}</p>
                        </div>
                )
            }): "Press Button"
        }
      </div>
    </div>
  )
}

export default Contact
