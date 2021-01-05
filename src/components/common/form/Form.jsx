import React, { Component } from 'react'
import TextInput from '../text-input/TextInput';
import SelectInput from '../select-input/SelectInput';

import './Form.css'

export class Form extends Component {
  state = {
    name: '',
    email: '',
    tier: '',
    number: '',
    company: '',
    errors: []
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ name: '', email: '', tier: '', number: '', company: '' })
  }

  render() {
    const { name, email, tier, number, company } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <TextInput
          handleChange={this.handleChange}
          name="name"
          type="text"
          value={name}
          placeholder="Name" />
        <TextInput
          handleChange={this.handleChange}
          name="email"
          type="email"
          value={email}
          placeholder="Email Address" />

        <SelectInput
          handleChange={this.handleChange}
          name="tier"
          value={tier} />

        <TextInput
          handleChange={this.handleChange}
          name="number"
          type="text"
          value={number}
          placeholder="Phone Number" />
        <TextInput
          handleChange={this.handleChange}
          name="company"
          type="text"
          value={company}
          placeholder="Company" />
        <button className="form-btn">Get on the list</button>
      </form>
    )
  }
}

export default Form
