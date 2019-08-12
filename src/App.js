import React from 'react';
import MyComponent from './MyComponent';




//username = document.getElementById("name").value; 
//password = document.getElementById("password").value;

//alert(username);
//alert(password);


function App() {
 return ( 
  <form>
  <label>
      Username:  
      <input type="text"id="name" name="username" />
      <br></br>
      Password:
      <input type="password" id="password" name="password" />
      </label>
      <br></br>
      <button id="submit">Submit</button>
    </form>
  );
}


document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("do you need a hug");
  });

export default App;