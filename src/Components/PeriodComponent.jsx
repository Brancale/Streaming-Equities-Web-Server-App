import React from 'react';

function PeriodComponent({ getSelectedParams, data, name }) {

  return (
    <tr>
      <th>
        Period start:
             </th>
      <th>
        <input type="date" id="periodStart" name={name}/>
      </th>
      <th>
        Period end:
             </th>
      <th>
        <input type="date" id="periodEnd" name={name} />
      </th>
    </tr>
  )
}

export default PeriodComponent;