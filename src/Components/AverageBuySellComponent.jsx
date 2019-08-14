import React from 'react';
import PeriodComponent from './PeriodComponent';
import { Bar } from 'react-chartjs-2';

function AverageBuySellComponent({ onClick, dataAverageBuySellPrices }) {
  return (

    <div className="chart" align="left" id="dataAverageBuySellPrices" type="text/css" href="chart.css">
      <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellspacing="0" >
          <tbody>
            <PeriodComponent />
          </tbody>
        </table>
      </form>
      <h2>Bar Example 2</h2>
      <Bar data={dataAverageBuySellPrices}>

      </Bar>

    </div>
  );
}

export default AverageBuySellComponent;