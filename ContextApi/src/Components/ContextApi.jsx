import React, {  createContext, useContext, useReducer } from 'react'

export const mycontext=createContext()
let initial={
  count:0
}

const reducer=(state,action)=>{
  switch(action.type){
    case "ADD":
      return{
        ...state,
        count:state.count+1
      }
    default :
    return state;
  }
}

function ContextApi({children}) {
  const [state,dispatch]=useReducer(reducer,initial)
  return (
    <mycontext.Provider value={{state,dispatch}}>
      {children}
    </mycontext.Provider>
  )
}

export default ContextApi
