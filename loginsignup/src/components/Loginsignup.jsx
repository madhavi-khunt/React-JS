import { useState } from "react";
import '../App.css'
import Swal from 'sweetalert2'





function Loginsignup(params) {

    const [state,setState]=useState("SignUp")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [arr,setArr]=useState([])

    const [lemail,setLemail]=useState("")
    const [lpass,setLpass]=useState("")
    const handleClick=()=>{

        let obj={
            name:name,
            email:email,
            pass:password
        }

        setArr([...arr,obj])
        setState("Login")
    }

    const handleCheck=()=>{
        let data=arr.filter((el)=>el.email==lemail && el.pass==lpass)
        if(data.length>0)
            {
                Swal.fire({
                    title: "Welcome",
                    text: "You Are Successfully Login",
                    icon: "success"
                  });
            }
            else{
                alert("login not successfull")
            }
    }


    return (
        <div id="main">
            {state=="SignUp"?
            <div id="login">
                <h1>Signup Form</h1>
                <input type="text" onChange={(el)=>setName(el.target.value)} placeholder="User Name" name="" id="" />
                <input type="email" placeholder="Email" onChange={(el)=>setEmail(el.target.value)} name="" id="" />
                <input type="text" placeholder="Password" onChange={(el)=>setPassword(el.target.value)} name="" id="" />
                <button onClick={handleClick} class="btn btn-primary">SignUp</button>
                <p onClick={()=>setState("Login")}>Already Have an Account ? Login</p>
            </div>
            :<div id="login">
                <h1>Login Form</h1>
                <input type="email" onChange={(el)=>setLemail(el.target.value)}  placeholder="Email" name="" id="" />
                <input type="text" onChange={(el)=>setLpass(el.target.value)} placeholder="Password" name="" id="" />
                <button onClick={handleCheck} class="btn btn-primary">Login</button>
                <p onClick={()=>setState("SignUp")}>Create  an Account ? SignUp</p>
            </div>
            }
        </div>
    )
}


export default Loginsignup;