import React, { Component } from 'react';
import PeriodComponent from './PeriodComponent'; 
import { Line, Bar } from 'react-chartjs-2';

function HistoricalDataComponent({getSelectedParams, data}){

    return(       
      <div className="chart" align="left" id="formChart" type="text/css" href="chart.css">
      
      <form id="formParams"  >
        <table id="tableParams" className="tableParams" align="left" cellspacing="0" >
          <tbody>
            <PeriodComponent/>
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
    );
}

export default HistoricalDataComponent;