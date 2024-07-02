import './App.css';
import CountAdd from './Components/CountAdd';
import CountAdd1 from './Components/CountAdd1';
import CountAdd2 from './Components/CountAdd2';
import CountMinus from './Components/CountMinus';
import Countminus1 from './Components/Countminus1';
import Countminus2 from './Components/Countminus2';

function App() {
  return (
    <div className="App">
      <CountAdd/>
      <CountMinus/>
      <CountAdd1/>
      <Countminus1/>
      <CountAdd2/>
      <Countminus2/>
    </div>
  );
}

export default App;
