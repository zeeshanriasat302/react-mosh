import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Tokyo", "San Fransisco", "London"];
  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
