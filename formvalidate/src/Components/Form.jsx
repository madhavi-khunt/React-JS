import React, { useEffect, useRef, useState } from 'react'


let initial={
  fname:"",
  lname:"",
  email:"",
  password:""
}

function Form() {
  const [state,setState]=useState(initial)
  const [arr,setArr]=useState([]);
  const [valid,setvalid]=useState(true)



  const handleChange=(e)=>{
    let {name,value}=e.target
    setState({...state,[name]:value})
    
  }
  // console.log(state)



  const handleSubmit=(e)=>{
    e.preventDefault()
    if (state.password.length >= 6) {
      setArr([...arr, state]);
      setState(initial);
      setvalid(true);
    } else {
      setvalid(false);
    }
  }
  console.log(arr);


  const handleBlur=()=>{
    if(state.password.length>6)
      {
        setvalid(true)
      }
      else
      {
        setvalid(false)
      }
  }



  return (
    <>  
      <div id='box'>
        <form action="" id='form' onSubmit={handleSubmit}> 
          <h3>Registration</h3>
            <input type="text" onChange={handleChange} value={state.fname} name="fname" placeholder='First Name'   required/><br />  
            <input type="text" onChange={handleChange} value={state.lname} name="lname" placeholder='Last Name'  required /><br /> 
            <input type="email" onChange={handleChange} value={state.email} name="email" placeholder='Email'   required/><br />  
            <input type="password" onChange={handleChange} onBlur={handleBlur} value={state.password}  name="password" placeholder='Password' className={valid?"a":"b"}  required /><br />
            {valid?"":<span>Password must be 6 characters</span>}
            <button>submit</button>
        </form>
      </div>
    </>
  )
}

export default Form
