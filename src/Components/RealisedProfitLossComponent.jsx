import React from 'react'; 
import { Bar } from 'react-chartjs-2';
import SelectButtonComponent from './SelectButtonComponent'
import PeriodComponent from './PeriodComponent'

function RealisedProfitLossComponent({onClick, data}){
    return (
        <div className="chart" align="left" id="realizedProfitLossChart" type="text/css" href="chart.css">
       <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellSpacing="0" >
          <tbody>           
          <PeriodComponent />
          <SelectButtonComponent onClick={onClick} />
          </tbody>
        </table>
      </form>
        <h2>Bar Example</h2>
        <Bar data={data}>

        </Bar>

      </div>
    );
}

export default RealisedProfitLossComponent;