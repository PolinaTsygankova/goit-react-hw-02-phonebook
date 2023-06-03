import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({ filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        // console.log(id);
        // <li key={id}>
        //   {name}: {number}
        // </li>
        <ContactItem name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
