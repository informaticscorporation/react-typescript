import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App()  {
  const [counter, setCounter] = useState(0);

  function aggiungi() {
    setCounter(counter + 1);
  }

  function decrementa() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <button onClick={aggiungi}>Incrementa</button>
      <div style={{ color: counter < 0 ? 'red' : 'green' }}>{counter}</div>
      <button onClick={decrementa}>Decrementa</button>
    </div>
  );
}


export default App;
