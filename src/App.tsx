import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App()  {
  const [counter, setCounter] = useState<number>(0);

  function aggiungi(): void {
    setCounter(counter + 1);
  }

  function decrementa(): void {
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
