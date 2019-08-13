import React from 'react';
import axios from 'axios';
import MyComponent from './MyComponent';
import AdvancedAnalyticsComponent from './AdvancedAnalyticsComponent'
import ReactDOM from 'react-dom';
import {Line} from 'react-chartjs-2';

function logOut(e) {
  e.preventDefault();
  ReactDOM.render(<MyComponent/>, document.getElementById('root'))
  
}
function goToAdvAnPage(e) {
  e.preventDefault();
  ReactDOM.render(<AdvancedAnalyticsComponent/>, document.getElementById('root'))
  
}

const ExtendedComponent = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 20, 50]
      }
    ]
  };
 return (

    <div id= "formforwork">
        <h1>Hello Dear Trader</h1>
        <form>
          <label>go to Advanced analitics page</label>
        <button id="advancedAnalytics" onClick={goToAdvAnPage}>go to</button>
        <br></br>
        <label>log out</label>
        <button id="logOut" onClick={logOut}>log out</button>
        
        {/*
         <script src="C:\Users\Client\Desktop\Kanban-Gang-reactDev\src\chart.js\dist\Char.js"></script> -->
        */}
        
        </form>
        
         <h1>Shows beautiful charts</h1>
         <form>
           <label>
             Period start:
             <input type="text"id="username" name="username" />
             <br></br>
             Period end:
             <input type="password" id="password" name="password" />
           </label>
           <div id="linechart1">
               <h2>Line Example</h2>
                <Line data={data}  width='30px !important' height='20px'>
                    </Line>
           </div>
         </form>
     </div>
      );
    };

export default ExtendedComponent;
