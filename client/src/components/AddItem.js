import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState();
  const [qty, setQty] = useState(0);

  function sendItem(e) {
    e.preventDefault();
    addItem(item, qty);
  }

  return (
    <div className="groceries__form">
      <form onSubmit={sendItem}>
        <input
          type="text"
          placeholder="Grocery item"
          name="name"
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Quantity"
          name="qty"
          onChange={(e) => setQty(e.target.value)}
        ></input>
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default AddItem;
