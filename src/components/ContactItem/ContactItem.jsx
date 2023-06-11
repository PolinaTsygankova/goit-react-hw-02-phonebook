import { Item, DeleteBtn, Text } from './ContactItem.styled';

export function ContactItem({ name, number, id, onDelete }) {
  return (
    <>
      <Item key={id}>
        <div>
          <Text>{name}: </Text>
          <Text> {number}</Text>
        </div>

        <DeleteBtn type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteBtn>
      </Item>
    </>
  );
}
