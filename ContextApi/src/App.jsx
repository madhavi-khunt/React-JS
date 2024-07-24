import { useContext } from 'react';
import './App.css';
import { mycontext } from './Components/ContextApi';

function App() {
  const data=useContext(mycontext)
  console.log(data);

  return (
    <>
    <h1>{data.state.count}</h1>
      <button onClick={()=>data.dispatch({type:"ADD"})}>ADD</button>
    </>
  );
}

export default App;
