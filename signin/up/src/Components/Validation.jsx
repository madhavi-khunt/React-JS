import React, { useState } from 'react';
import Swal from 'sweetalert2';

let obj = {
  username: "",
  password: ""
};

function Validation() {
  const [state, setState] = useState("login");
  const [text, setText] = useState(obj);
  const [arr, setArr] = useState([]);
  const [valid, setValid] = useState(true);
  const [validemail, setValidemail] = useState(true);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({
      ...text, [name]: value
    });
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.password.length >= 6 && emailPattern.test(text.username)) {
      setArr([...arr, text]);
      setText(obj);
      setValid(true);
      setValidemail(true);
      Swal.fire({
        // title: "Welcome!",
        text: "You have successfully Signup!",
        icon: "success"
      });
    } else {
      setValid(false);
      setValidemail(false);
    }
  };

  const handleBlur = () => {
    if (text.password.length >= 6) {
      setValid(true);
    } else if (emailPattern.test(text.username)) {
      setValidemail(true); 
    } else{
      setValid(false);
      setValidemail(false);

    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = arr.filter(user => user.username === text.username && user.password === text.password);
    if (user.length > 0) {
      setLoginError("");
      console.log("Login successful");
      Swal.fire({
        title: "Welcome!",
        text: "You have successfully logged in!",
        icon: "success"
      });
      setText(obj);
    } else {
      Swal.fire({
        text: 'Invalid Password or Username',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      setLoginError("Invalid username or password");
    }
  };

  console.log(arr);

  return (
    <div id='box'>
      {state === "login" ?
        <div className="overlay">
          <div id='main'>
            <form onSubmit={handleLogin}>
              <div className="con">
                <header className="head-form">
                  <h2>Log In</h2>
                </header>
                <br />
                <div className="field-set">
                  <input
                    className="" value={text.username} id="form-input" type="text" placeholder="Email" onChange={handleChange} name="username" required
                  />
                  <br />
                  <input
                    className="form-input" value={text.password} type="password" placeholder="Password" id="form-input" name="password" onChange={handleChange} required
                  />
                  <br />
                  {!loginError?"":<p style={{color:"red"}}>Invalid Lgin</p>}
                  <button className="log-in" type="submit">Log In</button>
                </div>
              </div>
            </form>
            <div className="other">
              <button onClick={() => setState("signup")} className="btn submits sign-up">Sign Up</button>
            </div>
          </div>
        </div>
        :
        <div className="overlay">
          <div id='main'>
            <form onSubmit={handleSubmit}>
              <div className="con">
                <header className="head-form">
                  <h2>Sign Up</h2>
                </header>
                <br />
                <div className="field-set">
                  <input
                    className={validemail?"a":"b"} onChange={handleChange} value={text.username} id="form-input" type="text" onBlur={handleBlur} placeholder="Email" name='username' required
                  />
                  {validemail ?"": <p id='p'>Please enter a valid Email Id</p>}
                  <br/>
                  <input
                    className={valid?"a" :"b"} onChange={handleChange} value={text.password} type="password" onBlur={handleBlur} placeholder="Password" id="form-input" name="password" required
                  />
                  <br />
                  {valid ?"": <p id='p'>Password must be at least 6 characters</p>}
                  <button className="log-in" type="submit">Sign Up</button>
                </div>
              </div>
            </form>
            <div className="other">
              <button onClick={() => setState("login")} className="btn submits sign-up">Log In</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Validation;
