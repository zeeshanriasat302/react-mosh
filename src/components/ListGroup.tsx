function ListGroup() {
  let list = ["New York", "Tokyo", "San Fransisco", "London"];

  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <>
      {" "}
      <h1>List</h1>
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
