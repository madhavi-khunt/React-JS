import React, { useState } from 'react'
import '../index.css'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function Signin() {


  const [state,setState] = useState({
    email : "",
    password : ""
})
const nevala = useNavigate()
const handleChange = (e)=>{
    let {name,value} = e.target
    setState({...state,[name] : value})
}
const handleSubmit = (e)=>{
    e.preventDefault()
    if(state.email){
        fetch(`http://localhost:3000/user?email=${state.email}`)
        .then(res=>res.json())
        .then((res)=>{
           if(res.length>0){
               if(res[0].password == state.password){
                Swal.fire({
                  position: "middle",
                  icon: "success",
                  title: "Your are successfully login",
                  showConfirmButton: false,
                  timer: 1500
                });
                  localStorage.setItem("isLogin", true)
                  nevala("/")
               }else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Password not match",
                  // footer: '<a href="#">Why do I have this issue?</a>'
                });
               }
           }else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Register First",
              // footer: '<a href="#">Why do I have this issue?</a>'
            });
           }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

  return (
    <section id='login'>
     <form onSubmit={handleSubmit} id='form'>
      <h6><span>W</span>elcome Back</h6>
        <p>Sign in with your email address and your password</p>
        <label htmlFor="">Email *</label>
            <input type="email" name='email' value={state.email} placeholder='Email Id' onChange={handleChange} /><br />
        <label htmlFor="">Password *</label>
            <input type="password" name='password' value={state.password} placeholder='Password' onChange={handleChange} /><br />
            <input type="submit" id='s' />
            <p id='acc'>Don't have a MyLV account?
            <Link id='ll' to={'/signup'}>Create yours now</Link>
            </p>
        </form>
        <div id='ld'>
          <div id='box'>
            <p id='fp'>WHAT YOU'LL FIND IN YOUR LV ACCOUNT</p>
            <p id='sp'><i id='bi' className='bi bi-bag'></i>Track your orders, repairs and access your invoices</p><hr />
            <p id='sp'><i id='bi' class="bi bi-folder2-open"></i>Manage your personal information</p><hr />
            <p id='sp'><i id='bi' class="bi bi-envelope"></i>Receive newsletters from Louis Vuitton</p><hr />
            <p id='sp'><i id='bi' className='bi bi-heart'></i>Create, view and share your wishlist</p>
          </div>
        </div>
    </section>
  )
}

export default Signin
