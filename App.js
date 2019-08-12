import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


const getJSON = async () => {

  const res1 = await axios.get('http://127.0.0.1:5001/sendjson');
      const time = await res1.data;
      console.log(time)
}

const sendJSON = async () => {

  var data = JSON.stringify({"dealId": "20001"});

  var request = new XMLHttpRequest();
  request.open('POST', 'http://127.0.0.1:5001/recieveJSON', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(data);
}

const getTime = async () => {
  const res1 = await axios.get('http://192.168.99.100:4000/');
  let time = await res1.data;
  console.log(time);
}

function App() {
  
  getTime()

  // post and
  // sendJSON()
  getJSON()
  
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
