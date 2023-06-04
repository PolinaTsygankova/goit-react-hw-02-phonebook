import { ContactItem } from '../ContactItem/ContactItem';

export function ContactList({ filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(contact => (
        // console.log(id);
        // <li key={id}>
        //   {name}: {number}
        // </li>
        <ContactItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
}
