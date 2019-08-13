import React from 'react';
import axios from 'axios';

var user = "";
var pwd = "";

// Get
const getJSON = async () => {

  const res1 = await axios.get('http://127.0.0.1:5001/sendjson');
      const reply = await res1.data;
      console.log(reply)
      alert(reply);
}

// Send
const sendJSON = async () => {

  var data = JSON.stringify({
    "username": user.value,
    "password": pwd.value
  });

  var request = new XMLHttpRequest();
  request.open('POST', 'http://127.0.0.1:5001/recieveJSON', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(data);
}

function submitLogin(e) {
  e.preventDefault();
  
  user = document.getElementById("username");
  pwd = document.getElementById("password");
  document.getElementById('testMessage').innerHTML = "Username: "+ user.value + " Password: : " + pwd.value;
  sendJSON();
  getJSON();
  //alert("Success");
}

const MyComponent = () => {
 return (

    <div id= "formforlogin">
        <h1>Log In to Database</h1>
        <form>
          <label>
            Username:
            <input type="text"id="username" name="username" />
            <br></br>
            Password:
            <input type="password" id="password" name="password" />
          </label>
          <br></br>
          <button id="submit" onClick={submitLogin}>Submit</button>
          <div id="testMessage"></div>
        </form>
    </div>
      );
    };

export default MyComponent;
