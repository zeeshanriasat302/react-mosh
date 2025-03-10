function ListGroup() {
  let list = ["New York", "Tokyo", "San Fransisco", "London"];

  return (
    <>
      {" "}
      <h1>List</h1>
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
