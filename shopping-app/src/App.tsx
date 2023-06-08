import React, { useState } from "react";
import { Greeter } from "./components/Greeter";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListFrom } from "./components/ShoppingListForm";
import { Item } from "./models/item";
import { v4 as getId } from "uuid";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }]);
  };

  return (
    <div>
      {/* <Greeter person="tutu" /> */}
      <ShoppingList items={items} />
      <ShoppingListFrom onAddItem={addItem} />
    </div>
  );
}

export default App;
