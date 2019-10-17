import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className="head-main">Բարև ձեզ</div>
          <div className={"subtitle"}>
              Are you hungry? Don't care!
          </div>
          <header className="App-header">
            <img src="bludo.png" className="App-logo" alt="logo.svg" />
          <a
              className="App-link"
              href="localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
          >
            Hamova - official
          </a>
        </header>

      </div>
  );
}

export default App;
