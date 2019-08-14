import React from 'react';
import PeriodComponent from './PeriodComponent'; 
import { Bar } from 'react-chartjs-2';

function RealisedProfitLossComponent({dataRealizedProfitLoss}){
    return (
        <div className="chart" align="left" id="realizedProfitLossChart" type="text/css" href="chart.css">
      <table id="tableParams" align="left" cellspacing="0" >
            <tbody>
      <PeriodComponent/>
      </tbody>
      </table>
        <h2>Bar Example</h2>
        <Bar data={dataRealizedProfitLoss}>

        </Bar>

      </div>
    );
}

export default RealisedProfitLossComponent;