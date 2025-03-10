import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { Children } from "react";
function App() {
  let items = ["New York", "Tokyo", "San Fransisco", "London"];
  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  let children = "Hello World";
  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    <>
      <Alert children={children} />
    </>
  );
}

export default App;
