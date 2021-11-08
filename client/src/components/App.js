import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Layout from "./Layout.js";
import Items from "./Items.js";
import AddItem from "./AddItem.js";

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = useCallback(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  function addItem(name, qty) {
    const newItem = { name, qty };
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  }

  function removeItem(id) {
    fetch("http://localhost:3000/items/" + id, {
      method: "DELETE",
    }).then(() => console.log("The item is deleted ..."));
  }

  function editItem(name, qty, id) {
    console.log(name + "-----" + id);

    const newItem = { name, qty };
    fetch("http://localhost:3000/items/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
  }

  return (
    <Layout>
      <div className="groceries">
        <AddItem addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </div>
    </Layout>
  );
};

export default App;
