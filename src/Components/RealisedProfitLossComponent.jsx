import React from 'react'; 
import { Bar } from 'react-chartjs-2';

import PeriodComponent from './PeriodComponent'

function RealisedProfitLossComponent({onClick, dataRealizedProfitLoss}){
    return (
        <div className="chart" align="left" id="realizedProfitLossChart" type="text/css" href="chart.css">
       <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellspacing="0" >
          <tbody>           
          <PeriodComponent />
          </tbody>
        </table>
      </form>
        <h2>Bar Example</h2>
        <Bar data={dataRealizedProfitLoss}>

        </Bar>

      </div>
    );
}

export default RealisedProfitLossComponent;