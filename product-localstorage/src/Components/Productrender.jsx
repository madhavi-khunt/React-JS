import React from 'react'

function Productrender({arr,handleEdit,handleDelete}) {
  return (
    <>
      {
          arr.map((el)=>{
            return(
             
                <div id='card' key={el.id}>
                  <img src={el.img} alt="" />
                  <h5 id='ht'><span>Title : </span>{el.title}</h5>
                  <h5><span>Des : </span>{el.des}</h5>
                  <h5><span>Price : </span>{el.price}</h5>
                  <span>
                  <button id='bt' onClick={()=>handleEdit(el.id)}>Edit</button>
                  <button id='bt' onClick={()=>handleDelete(el.id)}>Delete</button>
                  </span>
                </div>
          
            )
          })
        }
    </>
  )
}

export default Productrender
