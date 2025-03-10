import { useState } from "react";

function ListGroup() {
  let list = ["New York", "Tokyo", "San Fransisco", "London"];

  const handleClick = (event) => {
    console.log(event);
  };
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      {" "}
      <h1>List</h1>
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
