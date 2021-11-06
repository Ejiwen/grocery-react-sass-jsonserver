import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout.js";
import Items from "./Items.js";
import AddItem from "./AddItem.js";

const App = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(data => setItems(data));
  });

  function addItem(item,quantity) {
    const newItem= {item, quantity};
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    });
  }


  return (
    <Layout>
      <div className="groceries">
        <AddItem addItem={addItem} />
        <Items items={items} />
      </div>
    </Layout>
  );
}

export default App;
