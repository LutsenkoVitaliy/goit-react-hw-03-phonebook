import React, { Component } from "react";
import PropTypes from "prop-types";
 
import './ContactForm.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }; 

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({ name: '' , number: '' })
  }

  render() { 
      const { name, number } = this.state

    return (
    <form className="contactform_wrap" onSubmit={this.handleSubmit}>
    <label className="lable_form">Name</label>
      <input
      type="text"
      value={name}
      onChange={this.handleChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      />

    <label className="lable_form">Number</label>
      <input
      type="tel"
      value={number}
      onChange={this.handleChange}
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      />
      <button className="addContact__button" type='submit'>Add contact</button>
    </form>
    )}
}
 
export default ContactForm;


      
  
