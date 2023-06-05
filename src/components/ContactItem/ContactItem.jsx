// import { nanoid } from 'nanoid';

export function ContactItem({ name, number, id, onRender }) {
  console.log(onRender(name.toLowerCase()));
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
}
