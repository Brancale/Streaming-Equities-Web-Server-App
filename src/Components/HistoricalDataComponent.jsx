import React  from 'react';
import PeriodComponent from './PeriodComponent';
import InstrumentComponent from './InstrumentComponent'
import SelectButtonComponent from './SelectButtonComponent'
import CounterpartyComponent from './CounterpartyComponent'
import { Line } from 'react-chartjs-2';


function HistoricalDataComponent({ onClick, data }) {

  return (
    <div className="chart" align="left" id="formChart" type="text/css" href="chart.css">

      <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellspacing="0" >
          <tbody>
            <PeriodComponent />
            <tr>
              <th>
                Instrument type:
             </th>
              <th>
                <InstrumentComponent />
              </th>

              <th>Counterparty:</th>
              <th>
                <CounterpartyComponent />
              </th>

            </tr>
            <tr>
              <th>
                <SelectButtonComponent onClick={onClick} />
              </th>
            </tr>
          </tbody>
        </table>
      </form>
      <h2 className="header" type="text/css" href="chart.css">Line Example</h2>
      <Line data={data}>
      </Line>
    </div>
  );
}

export default HistoricalDataComponent;