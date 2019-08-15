import React  from 'react';
import PeriodComponent from './PeriodComponent';
import InstrumentComponent from './InstrumentComponent'
import SelectButtonComponent from './SelectButtonComponent'
import CounterpartyComponent from './CounterpartyComponent'
import { Line } from 'react-chartjs-2';


function HistoricalDataComponent({ onClick, data, name }) {

  return (
    <div className="chart" align="left" id="formChart" type="text/css" href="chart.css">

      <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellSpacing="0" >
          <tbody>
            <PeriodComponent name={name} />
            <tr>
                <h4>Instrument type:</h4>
                <InstrumentComponent />

              <h4>Counterparty:</h4>
                <CounterpartyComponent />
            </tr>
            <tr>
              <th>
                <SelectButtonComponent onClick={onClick} />
              </th>
            </tr>
          </tbody>
        </table>
      </form>
      <h2 className="header" type="text/css" href="chart.css">Historical data</h2>
      <Line data={data}>
      </Line>
    </div>
  );
}

export default HistoricalDataComponent;
