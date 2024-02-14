import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App()  {
 const [random, setNumero] = useState <string | number >("genera numero");

function generaNumero() {
  setNumero(Math.random());
}

  return (
    <div>
      <button onClick={generaNumero}>{random}</button>
    </div>
  );
}


export default App;
