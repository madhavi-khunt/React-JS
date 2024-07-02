
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  function increase() {
    
    setState(state + 1);
  }

  function decrease() {
    if (state > 0) {
      
      setState(state - 1);
    }
  }

  return (
    <div className="App">
      <div id='timer'>
        <div id='box'>
          <h1>{state}</h1>
          <span>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease} disabled={state === 0}>Decrease</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
