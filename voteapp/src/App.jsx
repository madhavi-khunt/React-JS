
import './App.css';
import { useState } from 'react';

function App() {

    const [stateA,setstateA]=useState(0);
    const [stateB,setstateB]=useState(0);


    function add()
    {
      setstateA(stateA+1);
    }

    function remove()
    {
      setstateA(stateA-1);
    }
   
    function increase()
    {
      setstateB(stateB+1)
    }

    function decrease()
    {
      setstateB(stateB-1);
    }
   


  return (
    <div className="App">
        <div id='box'>
            <div id='main'>
                <div id='votea'>
                    <h1 id='h' >VOTE FOR A</h1>
                    <h1>{stateA}</h1>
                    <button onClick={add}>Vote A</button>
                    <button disabled={stateA===0} onClick={remove}>Remove</button>
                </div>
                <div id='voteb'>
                    <h1 id='h'>VOTE FOR B</h1>
                    <h1>{stateB}</h1>
                    <button onClick={increase}>Vote B</button>
                    <button disabled={stateB===0}  onClick={decrease}>Remove</button>
                </div>
            </div>
            <div id='total'>
              <h1>Total Vote : {stateA+stateB}</h1>
            </div>
        </div>
    </div>
  );
}

export default App;
