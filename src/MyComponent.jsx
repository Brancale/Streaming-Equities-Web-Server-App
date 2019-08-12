import React from 'react';


const MyComponent = () => {
 return ( 
    
    <div id= "formforlogin">
        <h1>Log In to Database</h1>
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
    </div>
      );
    };

export default MyComponent;