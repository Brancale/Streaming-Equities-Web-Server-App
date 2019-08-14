import React, { useState } from 'react';
import axios from 'axios';
import MyComponent from './MyComponent';
import AdvancedAnalyticsComponent from './AdvancedAnalyticsComponent'
import ReactDOM from 'react-dom';
import { Line, Bar } from 'react-chartjs-2';
import "./chart.css";

var instrumentType = "";
var selectedPeriodStart = "";
var selectedPeriodEnd = "";
var counterpartySelect = "";
var data;


function logOut(e) {
  e.preventDefault();
  ReactDOM.render(<MyComponent />, document.getElementById('root'))

}
function goToAdvAnPage(e) {
  e.preventDefault();
  ReactDOM.render(<AdvancedAnalyticsComponent />, document.getElementById('root'))

}


function getSelectedParams(e) {
  e.preventDefault();
  console.log("send req")
  var selectedOption = document.getElementById("instrumentSelect");
  instrumentType = selectedOption.value;

  selectedPeriodStart = document.getElementById("periodStart").value;
  selectedPeriodEnd = document.getElementById("periodEnd").value;

  counterpartySelect = document.getElementById("counterpartySelect").value;
  makePostRequestQuery();
}
// todo DRY
async function makePostRequestQuery() {


  var data = {
    "instrumentType": instrumentType,
    "periodStart": selectedPeriodStart,
    "periodEnd": selectedPeriodEnd,
    "counterpartySelect": counterpartySelect
  };
  axios.post('http://127.0.0.1:5001/query', data)
    .then((response) => {
      console.log("ok");
    })
    .catch((error) => {
      console.log("error");
      alert("this is an error");
    });
}



const ExtendedComponent = () => {
  let data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', '1', '2', '3', '4', '5'],
    // labels: data.labels
    datasets: [
      {
        label: 'Historical data',
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
        data: [65, 59, 80, 81, 56, 55, 40, 20, 50, 4, 10, 45, 33, 66]
        //data : data.data
      }
    ]
  };

  let dataRealizedProfitLoss = {
    labels: ['Lewis', 'Richard'],
    // labels: data.labels
    datasets: [
      {
        label: 'Historical data profit',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(80,200,120,0.4)',
        borderColor: 'rgba(80,200,120,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(80,200,120,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(80,200,120,1)',
        pointHoverBorderColor: 'rgba(80,200,120,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59]
        //data : data.data
      },
      {
        label: 'Historical data loss',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(243,71,35,0.4)',
        borderColor: 'rgba(243,71,35,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(243,71,35,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(243,71,35,1)',
        pointHoverBorderColor: 'rgba(243,71,35,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [14, 19],

        //data : data.data
      }
    ]
  };

  let dataAverageBuySellPrices = {
    labels: ['Lewis', 'Richard'],
    // labels: data.labels
    datasets: [
      {
        label: 'Historical data profit',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(80,200,120,0.4)',
        borderColor: 'rgba(80,200,120,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(80,200,120,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(80,200,120,1)',
        pointHoverBorderColor: 'rgba(80,200,120,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59]
        //data : data.data
      },
      {
        label: 'Historical data loss',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(243,71,35,0.4)',
        borderColor: 'rgba(243,71,35,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(243,71,35,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(243,71,35,1)',
        pointHoverBorderColor: 'rgba(243,71,35,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [14, 19],

        //data : data.data
      }
    ]
  };


  return (

    <div id="formforwork">
      <div>
        <form id="formNavig">
          <table>
            <tbody>
              <tr>
                <button id="advancedAnalytics" onClick={goToAdvAnPage}>Go to Advanced analitics</button>
              </tr>
              <tr>
                <button id="logOut" onClick={logOut}>Log out</button>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    

      <div className="chart" align="left" id="formChart" type="text/css" href="chart.css">
      
        <form id="formParams"  >
          <table id="tableParams" align="left" cellspacing="0" >
            <tbody>
              <tr>
                <th>
                  Period start:
             </th>
                <th>
                  <input type="date" id="periodStart" />
                </th>
                <th>
                  Period end:
             </th>
                <th>
                  <input type="date" id="periodEnd" />
                </th>
              </tr>
              <tr>
                <th>
                  Instrument type:
             </th>
                <th>
                  <select id="instrumentSelect">
                    <option>Astronomica</option>
                    <option>Borealis</option>
                    <option>Celestial</option>
                    <option>Deuteronic</option>
                    <option>Eclipse</option>
                    <option>Floral</option>
                    <option>Galactia</option>
                    <option>Heliosphere</option>
                    <option>Interstella</option>
                    <option>Jupiter</option>
                    <option>Koronis</option>
                    <option>Lunatic</option>
                  </select>
                </th>
                <th>Counterparty</th>
                <th>
                  <select id="counterpartySelect">
                    <option>Lewis</option>
                    <option>Selvyn</option>
                    <option>Richard</option>
                    <option>Lina</option>
                    <option>John</option>
                    <option>Nidia</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <button id="getParams" onClick={getSelectedParams}>Select</button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
        <h2 className="header" type="text/css" href="chart.css">Line Example</h2>
        <Line data={data}>
        </Line>
      </div>
      <div className="chart" align="left" id="realizedProfitLossChart" type="text/css" href="chart.css">
        <h2>Bar Example</h2>
        <Bar data={dataRealizedProfitLoss}>

        </Bar>

      </div>

      <div className="chart" align="left" id="dataAverageBuySellPrices" type="text/css" href="chart.css">
        <h2>Bar Example 2</h2>
        <Bar data={dataAverageBuySellPrices}>

        </Bar>

      </div>
    </div>
  );
};


export default ExtendedComponent;
