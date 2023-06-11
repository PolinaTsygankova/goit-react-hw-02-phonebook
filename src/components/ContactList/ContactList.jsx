import { ContactItem } from '../ContactItem/ContactItem';
import React from 'react';

export function ContactList({ filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onRender={() => onRender(name, filteredContacts)}
        />
      ))}
    </ul>
  );
}

function onRender(name, filteredContacts) {
  const allNames = filteredContacts.map(item => item.name.toLowerCase());

  return allNames.includes(name.toLowerCase());
}

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
