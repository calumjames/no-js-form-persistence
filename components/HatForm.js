export default ({ data, hidden = false }) => {
  return (
    <>
      <input
        name="name"
        type="text"
        defaultValue={data.name}
        hidden={hidden}
      ></input>
    </>
  );
};
