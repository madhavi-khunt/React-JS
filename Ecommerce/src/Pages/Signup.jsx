import React, { useState } from 'react'
import '../App.css'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


 
function Signup() {


  const [state,setState]=useState(
    {
      email:"",
      password:"",
      title:"",
      fname:"",
      lname:"",
      dob:""
    }
  );
  const navil = useNavigate()

  const handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }

  // console.log(state);

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:3000/user`,{
      method : 'POST',
      headers : {
          'Content-Type' : 'application/json'
      },
      body : JSON.stringify(state)
  })
  .then((res)=>res.json())
  .then((res)=>{
    Swal.fire({
      title: "Welcome !",
      text: "You Are Registered!",
      icon: "success"
    });
      navil("/signin")
  }).catch((err)=>{
      console.log(err)
  })
  setState({
    email:"",
    password:"",
    title:"",
    fname:"",
    lname:"",
    dob:""
  })
  }

  return (
    <>
      <section id='signup'>
        <form action="" className='form' onSubmit={handleSubmit}>
        <div id='sd1'>
          <h6><span>C</span>reate your account</h6>
          <p>Create your account to have access to a more personalised experience.</p>
          <p>Already have MyLV account?<Link id='links'
           to={'/signin'}> Login here</Link></p>
           <label htmlFor="">Email</label><br />
           <input type="email" value={state.email} name='email' onChange={handleChange}  required/><br /><br />
           <label htmlFor="">Password</label><br />
           <input type="password" value={state.password}  name='password' onChange={handleChange} required/><br /><br />
           <label htmlFor="">Title</label><br />
           <select name="title" value={state.title} onChange={handleChange} id="">
            <option value="s">Select your title</option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
           </select>
        </div>
        <div id='sd2'>
          <label htmlFor="">First Name</label><br />
          <input type="text" value={state.fname} name="fname" id="fname" onChange={handleChange}   required/><br /><br />
          <label htmlFor="">Last Name</label><br />
          <input type="text" value={state.lname} name="lname"  onChange={handleChange} id="lanme" required /><br /><br />
          <label htmlFor="">Date Of Birth</label><br />
          <input type="date" value={state.dob} name="dob" onChange={handleChange}  id="dob" required /><br /><br />
          <input type="submit" name="" id="s" />
        </div>
        </form>
      </section>
    </>
  )
}

export default Signup
