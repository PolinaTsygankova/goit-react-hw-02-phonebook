// import { nanoid } from 'nanoid';

export function ContactItem({ name, number, id }) {
  console.log(id);
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
}
