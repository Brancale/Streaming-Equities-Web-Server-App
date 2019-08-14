import React, { useState } from 'react';

import ReactDOM from 'react-dom';


function MyComponent({onClick}){
  
 return (    
        
  <form id= "formforlogin">
    <table  id='table'>
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
    <font text id ='errorText' color='red'></font>
    </th>
    </tr>
    </tbody>
    </table>
  </form>

);
}

export default MyComponent;
