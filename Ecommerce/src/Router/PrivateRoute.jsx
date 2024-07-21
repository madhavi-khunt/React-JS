import { Navigate } from 'react-router-dom';

import React from 'react'

function PrivateRoute({children}) {
    let isLogin = localStorage.getItem("isLogin")
  return (
       
    isLogin ? children : <Navigate to={"/signin"}/>
       
  )
}




export default PrivateRoute