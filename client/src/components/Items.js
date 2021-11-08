import React, { useState } from "react";
import Modal from "./Modal.js";

const Items = ({ items, removeItem, editItem }) => {
  const [editable, setEditable] = useState(false);
  function handleDelete(e) {
    removeItem(e.target.dataset.index);
  }

  function handleEdit(e) {
    //editItem(e.target.dataset.index);
    console.log(editable);
    setEditable(true);
  }

  return (
    <div className="groceries__list">
      <ul>
        {items.map((item) => (
          <li>
            {item.name} <span>{item.qty}</span>
            <span onClick={handleDelete} data-index={item.id}>
              DELETE
            </span>
            <span onClick={() => setEditable(true)} data-index={item.id}>
              EDIT
            </span>
          </li>
        ))}
      </ul>
      <Modal open={editable} isOpen={() => setEditable(false)}>
        <h1> Hi From Modal ....</h1>
      </Modal>
    </div>
  );
};

export default Items;
