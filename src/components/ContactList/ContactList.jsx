import { ContactItem } from '../ContactItem/ContactItem';
import React from 'react';

export class ContactList extends React.Component {
  onRender = name => {
    console.log(name);
    const allNames = [];
    const filteredValues = Object.values(this.props.filteredContacts);
    filteredValues.map(item => {
      return allNames.push(item.name.toLowerCase());
    });

    // console.log(allNames);

    // if (allNames.includes(name.toLowerCase())) {
    //   console.log('Includes!');
    //   return true;
    // } else {
    //   console.log('Not Includes!');
    //   return false;
    // }

    return allNames.includes(name.toLowerCase());
  };

  render() {
    return (
      <ul>
        {this.props.filteredContacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onRender={this.onRender}
            // onRender={() => this.onRender(name)}
          />
        ))}
      </ul>
    );
  }
}

// export function ContactList({ filteredContacts }) {
//   if (bebra()) {
//     console.log(5);
//   }
//   return (
//     <ul>
//       {filteredContacts.map(({ name, number, id }) => (
//         <ContactItem
//           key={id}
//           name={name}
//           number={number}
//           id={id}
//           onRender={bebra}
//         />
//       ))}
//     </ul>
//   );
// }
