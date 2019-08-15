import React from 'react';

function SelectButtonComponent({onClick, name}) {
    return (

        <button id="getParams" name={name} onClick={onClick}>Select</button>
    )
}

export default SelectButtonComponent