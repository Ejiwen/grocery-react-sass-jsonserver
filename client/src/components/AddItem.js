import React, { useState } from "react";

const AddItem = ({ addItem, editItem, info }) => {
  const [item, setItem] = useState();
  const [qty, setQty] = useState(0);

  function sendItem(e) {
    e.preventDefault();
    info ? editItem(item, qty, info.elmId) : addItem(item, qty);
  }

  return (
    <div className="groceries__form">
      <form onSubmit={sendItem}>
        <input
          type="text"
          placeholder={info ? info.elmName : "Grocery Item"}
          name="name"
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <input
          type="number"
          min="0"
          max="10"
          placeholder={info ? info.elmQty : "Grocery Quantity"}
          name="qty"
          onChange={(e) => setQty(e.target.value)}
        ></input>
        <input type="submit" value={info ? "UPDATE" : "ADD"} />
      </form>
    </div>
  );
};

export default AddItem;
