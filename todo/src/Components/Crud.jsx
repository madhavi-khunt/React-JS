import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Crud({m,del,edit}) {
  // console.log(m);
  return (
    <div id='box'>
      <ul>
        <li>
        {/* <span> */}
          <p>{m.task} - {m.isCompleted?"Complete":"Not Complete"}</p>
          <button onClick={()=>del(m.id)}>Delete</button>
          <button onClick={()=>edit(m.id)} id='edit'>Edit</button>
        {/* </span> */}
        </li>
        </ul>
    </div>
  )
}

export default Crud
