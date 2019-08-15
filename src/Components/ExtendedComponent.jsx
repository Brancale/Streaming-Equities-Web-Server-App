import React, { useState } from 'react';
import axios from 'axios';
import HistoricalDataComponent from './HistoricalDataComponent';
import "../chart.css";
import RealisedProfitLossComponent from './RealisedProfitLossComponent';
import AverageBuySellComponent from './AverageBuySellComponent';
import MyComponent from './MyComponent';


function ExtendedComponent(props) {


  function logOut(e) {
    props.history.push("/")
  }


  // todo to class
  var instrumentType = "";
  // var operation = "";
  // var selectedPeriodStart = "";
  // var selectedPeriodEnd = "";
  var counterpartySelect = "";
  
  //var dataAverageBuySellPrices = {}
  const [dataAverageBuySellPrices, setDataAverageBuySellPrices] = useState(
    {}
  );

  const [dataRealizedProfitLoss, setDataRealizedProfitLoss] = useState(
    {}
  );



  function onClick(e) {

    var name = e.currentTarget.name;    
    e.preventDefault();
    
    var operation = name;
    // instrumentType = selectedOption.value;
    var selectedPeriodStart = document.getElementsByName(name)[0].value;
    var selectedPeriodEnd = document.getElementsByName(name)[1].value;

    // counterpartySelect = document.getElementById("counterpartySelect").value;
    makePostRequestQuery(operation, selectedPeriodStart, selectedPeriodEnd);
  }

  async function makePostRequestQuery(operation, selectedPeriodStart, selectedPeriodEnd) {



    var data = {
      "operation": operation,
      "params": {
      "periodStart": selectedPeriodStart,
      "periodEnd": selectedPeriodEnd
      }
      // ,
      // "counterpartySelect": counterpartySelect
    };
    //http://127.0.0.1:5001/query
    axios.get('http://127.0.0.1:5001/query', { params: data })
      .then((response) => {
        var data = response.data;
        var msg = data['msg'];
        
        var labels = msg['labels']; 
        var operationType = msg['operationType'];

        if (operationType=="avgSellPrices"){
          var buys = msg['Buys']; 
        var sells = msg['Sells']; 

        const handleChange = () => 
        setDataAverageBuySellPrices({
          labels: labels,
          datasets:[
            {label: 'Avg Buy Prices',
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
            data:buys},
            {label: 'Avg Sell Prices',
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
            data:sells}

          ]
         
        }
        
        )
        handleChange(); }
        else if (operationType=="lossAndProfit"){
          var Profits = msg['Profits']; 
        const handleChange = () => 
        setDataRealizedProfitLoss({
          labels: labels,
          datasets:[
            {label: 'Realised Profit and Loss',
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
            data:Profits}

          ]
         
        }
        
        )
        handleChange(); 
      }       
        
        
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

  // let dataRealizedProfitLoss = {
  //   labels: ['Lewis', 'Richard'],
  //   // labels: data.labels
  //   datasets: [
  //     {
  //       label: 'Avg Sell Prices',
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(80,200,120,0.4)',
        // borderColor: 'rgba(80,200,120,1)',
        // borderCapStyle: 'butt',
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        // pointBorderColor: 'rgba(80,200,120,1)',
        // pointBackgroundColor: '#fff',
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgba(80,200,120,1)',
      //   pointHoverBorderColor: 'rgba(80,200,120,1)',
      //   pointHoverBorderWidth: 2,
      //   pointRadius: 1,
      //   pointHitRadius: 10,
      //   data: [65, 59]
      //   //data : data.data
      // },
      // {
      //   label: 'Avg Buy Prices',
      //   fill: false,
      //   lineTension: 0.1,
      //   backgroundColor: 'rgba(243,71,35,0.4)',
        // borderColor: 'rgba(243,71,35,1)',
        // borderCapStyle: 'butt',
        // borderDash: [],
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        // pointBorderColor: 'rgba(243,71,35,1)',
        // pointBackgroundColor: '#fff',
        // pointBorderWidth: 1,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgba(243,71,35,1)',
        // pointHoverBorderColor: 'rgba(243,71,35,1)',
        // pointHoverBorderWidth: 2,
        // pointRadius: 1,
        // pointHitRadius: 10,
        // data: [-14, 19],

     //   // data : data.data
  //     }
  //   ]
  // };

  //#endregion

  // #region

  //  dataAverageBuySellPrices = {
  //   labels: ['Lewis', 'Richard'],
  //   // labels: data.labels
  //   datasets: [
  //     {
  //       label: 'Historical data profit',
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgba(80,200,120,0.4)',
  //       borderColor: 'rgba(80,200,120,1)',
      //   borderCapStyle: 'butt',
      //   borderDash: [],
      //   borderDashOffset: 0.0,
      //   borderJoinStyle: 'miter',
      //   pointBorderColor: 'rgba(80,200,120,1)',
      //   pointBackgroundColor: '#fff',
      //   pointBorderWidth: 1,
      //   pointHoverRadius: 5,
      //   pointHoverBackgroundColor: 'rgba(80,200,120,1)',
      //   pointHoverBorderColor: 'rgba(80,200,120,1)',
      //   pointHoverBorderWidth: 2,
      //   pointRadius: 1,
      //   pointHitRadius: 10,
      //   data: [65, 59]
      //   //data : data.data
      // },
      // {
      //   label: 'Historical data loss',
      //   fill: false,
      //   lineTension: 0.1,
      //   backgroundColor: 'rgba(243,71,35,0.4)',
  //       borderColor: 'rgba(243,71,35,1)',
  //       borderCapStyle: 'butt',
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: 'miter',
  //       pointBorderColor: 'rgba(243,71,35,1)',
  //       pointBackgroundColor: '#fff',
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: 'rgba(243,71,35,1)',
  //       pointHoverBorderColor: 'rgba(243,71,35,1)',
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [14, 19],

  //     }
  //   ]
  // };

  //#endregion

  return (

    <div id="formforwork">
      <div>
        <form id="formNavig">
          <table>
            <tbody>
              <tr>
                
                <th><button id="logOut" onClick={logOut}>Log out</button></th>


              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {/* <HistoricalDataComponent onClick={onClick} data={historicalData} name={"historicalData"} /> */}
      <RealisedProfitLossComponent onClick={onClick} data={dataRealizedProfitLoss} name={"lossAndProfit"} />
      <AverageBuySellComponent onClick={onClick} data={dataAverageBuySellPrices} name={"avgSellPrices"} />

    </div>
  );
};


export default ExtendedComponent;
