import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

// const INITIAL_VALUES = {
//   contacts: [],
//   name: '',
//   number: '',
// };

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = data => {
    console.log(data);
  };

  // handleSumbit = e => {
  //   e.preventDefault();
  // };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // handleSumbit = e => {
  //   e.preventDefault();

  //   this.addContact(this.state.name, this.state.number);

  //   this.setState({ name: '' });
  //   this.setState({ number: '' });
  // };

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

    //!
    // <ul>
    //       {filteredContacts.map(({ name, number, id }) => (
    //         <li key={id}>
    //           {name}: {number}
    //         </li>
    //       ))}
    //     </ul>

    return (
      //       <div>
      //   <h1>Phonebook</h1>
      //   <ContactForm ... />

      //   <h2>Contacts</h2>
      //   <Filter ... />
      //   <ContactList ... />
      // </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} onInput={this.handleInput} />

        {/* <form onSubmit={this.handleSumbit}>
          <h1>Phonebook</h1>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInput}
            />
          </label>

          <button type="submit">Add contact</button>
        </form> */}

        <h2>Contacts</h2>
        <Filter filterValue={this.state.filter} onChange={this.handleInput} />
        {/* <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          required
          onChange={this.handleInput}
          value={this.state.filter}
        /> */}
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
