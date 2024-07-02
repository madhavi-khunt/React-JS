import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomUser = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setState(response.data.results[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div id='box'>
      <h1>Random User</h1>
      <div id='inner'>
        {loading ? 
          <div className='loader'></div>
        : state && (
          <div id='user'>
            <img src={state.picture.large} alt="Random User" style={{ width: '200px', height: '200px' }} />
            <p>Name: <span>{state.name.first} {state.name.last}</span></p>
            <p>Email: <span>{state.email}</span></p>
            <p>Location: <span>{state.location.city} - {state.location.country}</span></p>
          </div>
        )}
      </div>
      <button onClick={handleClick}>New User</button>
    </div>
  );
};

export default RandomUser;
