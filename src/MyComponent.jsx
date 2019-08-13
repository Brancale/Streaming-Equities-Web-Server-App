import React from 'react';
import axios from 'axios';
import ExtendedComponent from './ExtendedComponent'
import ReactDOM from 'react-dom';

let user="";
let pwd="";

async function makePostRequest() {

  var data = {
    "username": user.value,
    "password": pwd.value
  };
  axios.post('http://127.0.0.1:5001/login', data)
    .then((response) => {
      console.log(response);
      //alert('authorised')
      ReactDOM.render(<ExtendedComponent />, document.getElementById('root'))
    })
    .catch((error) => {
      console.log(error);
      document.getElementById("errorText").innerHTML = "Access denied";
     ReactDOM.render(<ExtendedComponent />, document.getElementById('root'))

    });
}

function submitLogin(e) {
  e.preventDefault();
  
  user = document.getElementById("username");
  pwd = document.getElementById("password");
  //document.getElementById('testMessage').innerHTML = "Username: "+ user.value + " Password: : " + pwd.value;
  makePostRequest()
  
}

const MyComponent = (user) => {

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
          <font text id ='errorText' color='red'></font>
          <div id="testMessage" text=""></div>
        </form>
    </div>
    
      );
    };

export default MyComponent;
