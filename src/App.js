import React, { useState } from 'react';
import MyComponent from './MyComponent';
import axios from 'axios';
import ExtendedComponent from './ExtendedComponent';


//username = document.getElementById("name").value;
//password = document.getElementById("password").value;

//alert(username);
//alert(password);

class User{
  constructor(){
    this.userName ="";
    this.password = "";
    this.isAutorised = false;
    this.role = "";

  }
  
}

async function makePostRequest() {

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

function submitLogin(e) {
  e.preventDefault();
  console.log("1")
  
  user = document.getElementById("username");
  console.log("2")
  pwd = document.getElementById("password");
  console.log("3")
  return makePostRequest()
}

let user="";
let pwd="";

function App() {
  const [authorised, setAuthorised] = useState(false);

  const handleAuthorisedChange =  (e) => {

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
