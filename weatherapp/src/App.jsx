import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleClick = () => {
    setLoad(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=53e67e4a69d99a1fff5caf66fc6bec57&units=metric`;

    fetch(url)
      .then(k => k.json())
      .then(res => {
        setData(res);
        setLoad(false);
        setCurrentDate(new Date());
      })
      .catch((err) => {
        console.log(err);
        setData(null);
        setLoad(false);
      });
      setState("")
  };

  console.log(data);
  // useEffect(()=>{
  //   handleClick();
  // },[state])

  return (
    <div className="App">
      <div id='box'>
        <div id='inner1'>
          <input type="text" placeholder="City" value={state} onChange={(e) => setState(e.target.value)} name="" id="" />
          <button onClick={handleClick}>Show</button>
        </div>
        <div id='inner2'>
        {load ? (
          <p>Loading...</p>
        ) : (
          data && (
            <div id='i1'>
                <div id='i'>
                  <h1 id='h3'>{data.name}</h1>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                  style={{height :"150px", width:"150px"}} alt="Weather Icon" />
                  <h3 id='h3'>{data.weather[0].main}</h3>
                  
                </div>
                {/* <hr /> */}
                <div id='ii'>
                  <h3 id='h'>{data.main.temp}<sup>°C</sup></h3>
                  <h3 id='h'>humidity : {data.main.humidity}%</h3>
                  <h3 id='h'>pressure : {data.main.pressure}</h3>
                  <h3 id='h'>degree : {data.wind.deg}</h3>
                  <h3 id='h'>speed   : {data.wind.speed}km/h</h3>
                  <h3 id='h'>{currentDate.toLocaleString()}</h3>
                </div>
        

            </div>
           
          )
        )}  
         {!load && !data && <p>No data found</p>}  
        </div>
      </div>
      
    </div>
  );
}

export default App;

