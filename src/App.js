import React, { useState } from 'react';
import MyComponent from './Components/MyComponent';
import axios from 'axios';
import ExtendedComponent from './Components/ExtendedComponent';
import Axios from 'axios'
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route} from 'react-router-dom'


//username = document.getElementById("name").value;
//password = document.getElementById("password").value;

//alert(username);
//alert(password);


class User{
  constructor(){
    this.userName ="";
    this.password = "";
  }
  
}

function makePostRequest() {

  // var data = {
  //   "username": user.value,
  //   "password": pwd.value
  // };

  console.log("posting req")
  // axios.post('http://127.0.0.1:5001/login', data)
  //   .then((response) => {
  //     return true;
  //   })
  //   .catch((error) => {
      
  //   document.getElementById("errorText").innerHTML = "Access denied";
  //   return false;

  //   });

  // var xhr = new XMLHttpRequest();
  // var url = 'http://127.0.0.1:5001/login';
  // xhr.open("POST", url, true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send(data);

}

// function  submitLogin(e) {
  

  
// }

function App() {
  // const [authorised, setAuthorised] = useState(false);

  const history = createBrowserHistory();
  


 return (
   <Router >
    
  <Route exact path="/" component={MyComponent} />
  <Route path="/chart" component={ExtendedComponent} />

</Router>
  );
}

export default App;
