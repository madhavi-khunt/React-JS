import React from 'react'
import './Style.css'
import {NavLink,Link} from "react-router-dom"

function Header() {
  return (
    <section>
    <header id='header'>
        <div id='hd1'>
            <p><NavLink id="link"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } to={'/'} >Home</NavLink></p>
        <p><NavLink id="link"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } to={'/product'} >Product</NavLink></p>
        </div>
        <div id='hd2'>  
          <h2>LOUIS VUITTON</h2>
        </div>
        <div id='hd3'>
          <NavLink id='link'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } to={'signup'}><i className='bi bi-person'></i></NavLink>
          <i className='bi bi-heart'></i>
          <p><NavLink id='link'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } to={'/contact'}>Call Us</NavLink></p>
        </div>
    </header>
    
    </section>


  )
}

export default Header
