import React from 'react'; 
import { Bar } from 'react-chartjs-2';
import SelectButtonComponent from './SelectButtonComponent'
import PeriodComponent from './PeriodComponent'

function RealisedProfitLossComponent({onClick, data, name}){
    return (
        <div className="chart" align="left" id="realizedProfitLossChart" type="text/css" href="chart.css">
       <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellSpacing="0" >
          <tbody>           
          <PeriodComponent name={name} />
          <SelectButtonComponent name={name} onClick={onClick} />
          </tbody>
        </table>
      </form>
        <h2>Realised profit</h2>
        <Bar data={data}>

        </Bar>

      </div>
    );
}

export default RealisedProfitLossComponent;