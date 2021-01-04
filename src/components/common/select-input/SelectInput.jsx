import React from 'react'

import './SelectInput.css'

const SelectInput = ({ name, value, handleChange }) => {
  return (
    <select name={name} onChange={handleChange} className="select">
      <option value="free" className="select__option">Basic Pack Free </option>
      <option value="pro" className="select__option"> Pro Pack $9.99 </option>
      <option value="ultimate" className="select__option">Ultimate Pack $19.99 </option>
    </select>
  );
}

export default SelectInput;