import React from 'react';
import logo from './Robbie2.png';
import logo2 from './cube1.png';
import logo3 from './borat.png';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are number one! </p>
        <p>The cake is a lie </p>
        <img src={logo2} className="App-logo" alt="logo2" />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=BjDebmqFRuc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the dark side
        </a>
        <p>We have cookies </p>
      </header>
      <header className="App-body">
        
      <p>Grate success! </p>
      <img src={logo3} className="App-logo" alt="logo3" />
      </header>
      
      
    </div>
  );
}

export default App;
