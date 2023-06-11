import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

import { List } from './ContactList.styled';

export function ContactList({ filteredContacts, onDelete }) {
  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}

// function onRender(name, filteredContacts) {
//   const allNames = filteredContacts.map(item => item.name.toLowerCase());

//   return allNames.includes(name.toLowerCase());
// }

// export class ContactList extends React.Component {
// onRender = name => {
//   const allNames = this.props.filteredContacts.map(item =>
//     item.name.toLowerCase()
//   );

//   return allNames.includes(name.toLowerCase());
// };

//   render() {
//     return (
//       <ul>
//         {this.props.filteredContacts.map(({ name, number, id }) => (
//           <ContactItem
//             key={id}
//             name={name}
//             number={number}
//             id={id}
//             onRender={() => this.onRender(name)}
//           />
//         ))}
//       </ul>
//     );
//   }
// }
