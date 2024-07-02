import React, { useRef } from 'react'

function Useref() {

    let iref=useRef(null)
    let iref1=useRef(null)
    let iref2=useRef(null)
    let iref3=useRef(null)
    let iref4=useRef(null)


    let handleClick=()=>{
      iref.current.focus()
    }

  return (
    <React.Fragment>
      <div id='box'>
        <div id='inner'>
            <h1>Input Focus</h1>
        </div>
        <div id='inner2'>
            <input type="text" name="fname" ref={iref} placeholder='First Name' id="" />
            <input type="text" name="lname"  ref={iref1}  placeholder='Last Name' id="" />
        </div>
        {/* <div id='inner3'>
            <input type="email" name="email"  ref={iref2}  placeholder='Email' id="" />
            <input type="text" name="subject" ref={iref3}   placeholder='Subject' id="" />
        </div>
        <div id='inner4'>
          <textarea name="" rows={3} ref={iref4}    placeholder='Address' id=""></textarea>
        </div> */}
        <div id='inner5'>
          <button onClick={handleClick}>Focus</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Useref
