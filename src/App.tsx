import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Tokyo", "San Fransisco", "London"];
  return (
    <div>
      <ListGroup items={items} heading="list" />
    </div>
  );
}

export default App;
