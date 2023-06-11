import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { MainTitle, MainDiv, ContactTitle } from './App.styled';

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

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deleteId),
    }));
  };

  addContact = ({ name, number }) => {
    const allContacts = this.state.contacts;
    let contactExists;

    allContacts.forEach(contact => {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        contactExists = true;
        alert(`${name} is already in contacts`);
        return;
      }
    });

    if (!contactExists) {
      this.setState(prevState => ({
        contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <MainDiv>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />

        <ContactTitle>Contacts</ContactTitle>
        <Filter filterValue={this.state.filter} onChange={this.handleInput} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </MainDiv>
    );
  }
}
