import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import fetching from './Redux/Productreducer/action';


function App() {
  
  const dispatch=useDispatch()
  const info=useSelector((m)=>m)
  console.log(info);
  const handleclick=()=>{
    // fetching(dispatch)
    dispatch(fetching());
  }

  return (
    <>
      <button onClick={handleclick}>Click</button>
    </>
  )
}

export default App
