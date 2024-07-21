import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Singleproduct() {
  const { id } = useParams()
  const [state, setState] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((res) => setState(res))
      .catch((err) => console.log(err))
  }, [])
  console.log(state);

  return (
    <div id='sinpro'>
      <div id='spd1'>
      <img src={state.image} alt={state.title} width="150px" height="150px"/>
      </div>
      <div id='spd2'>
        <i className='bi bi-heart'></i>
        <p id='stitle'>{state.title}</p>
        <p id='sprice'>₹ {state.price}</p>
        <p id='smrp'>(M.R.P. incl. of all taxes)</p>
        <button id='scbtn'>Contact Concierge Services</button>
        <p id='sdes'>Our Digital Concierge is available if you have any question on this product.Contact us at <Link id='lfont'>concierge.in@contact.louisvuitton.com</Link></p>
        <p id='sdch'>Check availability in store
        </p>
        <p id='spd'>Product Details</p>
      </div>
    </div>
  )
}

export default Singleproduct

