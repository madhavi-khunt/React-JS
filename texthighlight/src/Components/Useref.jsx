import React, { useRef } from 'react'

function Useref() {

    let text=useRef(null);

const handleClick=()=>{
    text.current.select()
    // console.log(text.current.select());
}

  return (
    <>
      <div id='box'>
        <h1>Text Highlighter</h1>
        <textarea name="message" placeholder='Message' ref={text}  rows={4} cols={30} id=""></textarea>
        <button onClick={handleClick}>Highlighter</button>
      </div>
    </>
  )
}

export default Useref
