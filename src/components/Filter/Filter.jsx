export function Filter({ filterValue, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        required
        onChange={onChange}
        value={filterValue}
      />
    </>
  );
}
