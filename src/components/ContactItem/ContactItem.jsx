// import { nanoid } from 'nanoid';

export function ContactItem({ name, number, id }) {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
}
