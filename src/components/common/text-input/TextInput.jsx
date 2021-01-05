import React from 'react'

import './TextInput.css'

const TextInput = ({ name, handleChange, ...rest }) => {
  return (
    <input
      {...rest}
      required
      className="input"
      name={name}
      onChange={handleChange}
    />
  )
}

export default TextInput;