import React, { Component } from 'react'

import './Form.css'

export class Form extends Component {
  state = {

  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Form
