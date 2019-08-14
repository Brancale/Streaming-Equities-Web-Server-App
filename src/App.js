import React, { useState } from 'react';
import MyComponent from './Components/MyComponent';
import axios from 'axios';
import ExtendedComponent from './Components/ExtendedComponent';
import Axios from 'axios'


//username = document.getElementById("name").value;
//password = document.getElementById("password").value;

//alert(username);
//alert(password);
let user="";
let pwd="";

class User{
  constructor(){
    this.userName ="";
    this.password = "";
  }
  
}

function makePostRequest() {

  var data = {
    "username": user.value,
    "password": pwd.value
  };

  console.log("posting req")
  axios.post('http://127.0.0.1:5001/login', data)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      
    document.getElementById("errorText").innerHTML = "Access denied";
    return false;

    });
}

function  submitLogin(e) {
  e.preventDefault();
  
  user = document.getElementById("username");
  pwd = document.getElementById("password");
  var result = makePostRequest();
  return result;
}

function App() {
  const [authorised, setAuthorised] = useState(false);

  const  handleAuthorisedChange =  (e) => {

    var isAuthorised = submitLogin(e);
    if (isAuthorised){
     setAuthorised(true);
    }
  };


 return (
  authorised?   
    <ExtendedComponent/>:
    <MyComponent onClick={handleAuthorisedChange}/>  
  );
}

export default App;
