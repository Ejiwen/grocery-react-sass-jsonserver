import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Layout from "./Layout.js";
import Items from "./Items.js";
import AddItem from "./AddItem.js";
// Algolia Search
const algoliasearch = require("algoliasearch");
const client = algoliasearch("***", "*******");
const index = client.initIndex("*********");

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = useCallback(() => {
    let items = [];
    index
      .browseObjects({
        attributesToRetrieve: ["name", "qty"],
        batch: (batch) => {
          items = items.concat(batch);
        },
      })
      .then(() => setItems(items));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  function addItem(name, qty) {
    const newItem = { name, qty };
    console.log(newItem);
    index.saveObject(newItem, {
      autoGenerateObjectIDIfNotExist: true,
    });
  }

  function removeItem(id) {}

  function editItem(name, qty, id) {
    const newItem = { name, qty };
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
