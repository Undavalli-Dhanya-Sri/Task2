// src/App.js
import React from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopwatch</h1>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
