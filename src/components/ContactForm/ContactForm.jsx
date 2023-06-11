import React from 'react';
import { Label, Text, Submitbtn } from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();

    // this.addContact(this.state.name, this.state.number);
    this.props.addContact({ name: this.state.name, number: this.state.number });

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    // console.log(handleInputFromProps);
    return (
      <form onSubmit={this.handleSumbit}>
        <Text>Name</Text>
        <Label>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInput}
          />
        </Label>

        <Text>Number</Text>
        <Label>
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInput}
          />
        </Label>

        <Submitbtn type="submit">Add contact</Submitbtn>
      </form>
    );
  }
}
