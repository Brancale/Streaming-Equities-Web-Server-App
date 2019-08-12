import React from 'react';


function submitLogin() {
  var user = document.getElementById("username");
  var pwd = document.getElementById("password");
  document.getElementById('testMessage').innerHTML = "Username: "+ user.value + " Password: : " + pwd.value;
  alert("Success");
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
