import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import Singleproduct from '../Pages/Singleproduct'
import Error from '../Pages/Error'
import Signup from '../Pages/Signup'
import PrivateRoute from './PrivateRoute'
import Signin from '../Pages/Signin'

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={
          <PrivateRoute><Product/></PrivateRoute>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/product/:id' element={<Singleproduct/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRouter
