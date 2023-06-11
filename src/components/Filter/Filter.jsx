import { Title, Label } from './Filter.styled';

export function Filter({ filterValue, onChange }) {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Label>
        <input
          type="text"
          name="filter"
          required
          onChange={onChange}
          value={filterValue}
        />
      </Label>
    </>
  );
}
