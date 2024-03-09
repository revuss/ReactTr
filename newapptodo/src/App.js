import "./App.css";
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import Listbox from "./Components/Listbox";
import { useEffect, useState } from "react";
import { initialItems } from "./Services/Itemstorage";
import Footer from "./Components/Footer";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : initialItems;
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const onToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  useEffect(() => {
    document.title = "List Application";
  });
  return (
    <div className="App">
      <Header />
      <AddForm onAddItem={handleAddItem} />
      <Listbox
        items={items}
        onDeleteItem={handleDeleteItems}
        onStrike={onToggleItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
