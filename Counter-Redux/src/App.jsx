import './App.css'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const count=useSelector((el)=>el)
  const dispatch=useDispatch()

  return (
    <div id='counter'>
      <div id='inner'>
        <h3>Counter : {count}</h3>
        <button onClick={()=>dispatch({type:"Add"})}>Count Up</button>
        <button onClick={()=>dispatch({type:"Minus"})} disabled={count === 0}>Count Down</button>
      </div>
    </div>
  )
}

export default App
