import React from 'react';
import axios from 'axios';
import HistoricalDataComponent from './HistoricalDataComponent';
import "../chart.css";
import RealisedProfitLossComponent from './RealisedProfitLossComponent';
import AverageBuySellComponent from './AverageBuySellComponent';


function ExtendedComponent(props) {


  function logOut(e) {
    props.history.push("/")
  }


  // todo to class
  var instrumentType = "";
  var selectedPeriodStart = "";
  var selectedPeriodEnd = "";
  var counterpartySelect = "";

  function onClick(e) {

    e.preventDefault();
    console.log("send req")
    var selectedOption = document.getElementById("instrumentSelect");
    instrumentType = selectedOption.value;

    selectedPeriodStart = document.getElementById("periodStart").value;
    selectedPeriodEnd = document.getElementById("periodEnd").value;

    counterpartySelect = document.getElementById("counterpartySelect").value;
    makePostRequestQuery();
  }

  async function makePostRequestQuery() {


    var data = {
      "instrumentType": instrumentType,
      "periodStart": selectedPeriodStart,
      "periodEnd": selectedPeriodEnd,
      "counterpartySelect": counterpartySelect
    };
    axios.post('http://192.168.0.101:5001/query', data)
      .then((response) => {
        console.log("ok");
      })
      .catch((error) => {
        console.log("error");
        alert("this is an error");
      });
  }

  //#region 

  let historicalData = {
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
  //#endregion

  //#region

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
        data: [-14, 19],

        //data : data.data
      }
    ]
  };

  //#endregion

  //#region

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

      }
    ]
  };

  //#endregion

  return (

    <div id="formforwork">
      <div>
        <form id="formNavig">
          <table>
            <tbody>
              <tr>
                <button id="logOut" onClick={logOut}>Log out</button>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <HistoricalDataComponent onClick={onClick} data={historicalData} />
      <RealisedProfitLossComponent onClick={onClick} data={dataRealizedProfitLoss} />
      <AverageBuySellComponent onClick={onClick} data={dataAverageBuySellPrices} />

    </div>
  );
};


export default ExtendedComponent;
