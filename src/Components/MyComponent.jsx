import React from 'react';
import axios from 'axios';


function MyComponent(props) {


  function onClick(e) {

    let user = "";
    let pwd = "";


    e.preventDefault();

    user = document.getElementById("username");
    pwd = document.getElementById("password");

    var data = {
      "username": user.value,
      "password": pwd.value
    };

    console.log("posting req")
    //http://127.0.0.1:5001/login

    axios.get('webserver:5001/login', {params:data})
      .then((response) => {
        props.history.push("/chart")
        
      })
      .catch((error) => {

        document.getElementById("errorText").innerHTML = "Access denied";


      });
  };

  return (

    <form id="formforlogin">
      <table id='table'>
        <tbody>
          <tr>
            <th>
              <h1>Log in </h1>
            </th>
          </tr>
          <tr>
            <th>Username:</th>
            <th>
              <input type="text" id="username" name="username" />
            </th>
          </tr>
          <tr>
            <th>Password:</th>
            <th>
              <input type="password" id="password" name="password" />
            </th>
          </tr>
          <tr>
            <th>
              <button id="submit" onClick={onClick}>Submit</button>
            </th>
            <th>            
              <font text id='errorText' color='red'></font>
            </th>
          </tr>
        </tbody>
      </table>
    </form>

  );
}

export default MyComponent;
