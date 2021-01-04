import React from 'react'

import './TextInput.css'

const TextInput = ({ name, handleChange, ...rest }) => {
  return (
    <input
      {...rest}
      className="input"
      onChange={handleChange}
    />
  )
}

export default TextInput;