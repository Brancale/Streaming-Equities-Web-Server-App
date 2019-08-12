import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const getTime = async () => {
  const res1 = await axios.get('http://192.168.99.100:4000/');
  let time = await res1.data;
  console.log(time);
}

function App() {
  getTime();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
