import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MyComponent from './MyComponent';
import ExtendedComponent from './ExtendedComponent'


function logOut(e) {
    e.preventDefault();
    ReactDOM.render(<MyComponent/>, document.getElementById('root'))
    
  }
  function goToAnalytics(e) {
    e.preventDefault();
    ReactDOM.render(<ExtendedComponent/>, document.getElementById('root'))
    
  }
const AdvancedAnalyticsComponent = () => {
    return (
   
       <div id= "formforwork">
           <h1>Welcome to advanced analytics page</h1>
           <form>
             <label>go to analitics page</label>
           <button id="advancedAnalytics" onClick={goToAnalytics}>go to</button>
           <br></br>
           <label>log out</label>
           <button id="logOut" onClick={logOut}>log out</button>
           </form>
           {/*
            <script src="C:\Users\Client\Desktop\Kanban-Gang-reactDev\src\chart.js\dist\Char.js"></script> -->
           */}
            </div>
            
         );
       };
   
   export default AdvancedAnalyticsComponent;