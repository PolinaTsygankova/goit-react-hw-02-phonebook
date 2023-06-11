export function ContactItem({ name, number, id, onRender }) {
  console.log(onRender());
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
}
