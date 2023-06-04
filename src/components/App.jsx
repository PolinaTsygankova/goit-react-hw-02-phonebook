import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = data => {
    console.log(data);
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} onChange={this.handleInput} />
        <ContactList filteredContacts={filteredContacts} />
      </div>
    );
  }
}
