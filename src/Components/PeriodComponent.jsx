import React from 'react';

function PeriodComponent({ getSelectedParams, data }) {

  return (
    <tr>
      <th>
        Period start:
             </th>
      <th>
        <input type="date" id="periodStart" />
      </th>
      <th>
        Period end:
             </th>
      <th>
        <input type="date" id="periodEnd" />
      </th>
    </tr>
  )
}

export default PeriodComponent;