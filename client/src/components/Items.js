import React, { useState } from "react";
import AddItem from "./AddItem.js";
import Modal from "./Modal.js";

const Items = ({ items, removeItem, editItem }) => {
  const [editable, setEditable] = useState(false);
  const [elm, setElm] = useState({});
  function handleDelete(e) {
    removeItem(e.target.dataset.index);
  }

  function handleEdit(e) {
    //editItem(e.target.dataset.index);
    //const t = await e.target.dataset.item;
    //console.log(t);
    setElm({
      elmId: e.target.dataset.index,
      elmName: e.target.dataset.item,
      elmQty: e.target.dataset.qty,
    });
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
            <span
              onClick={handleEdit}
              data-item={item.name}
              data-qty={item.qty}
              data-index={item.id}
            >
              EDIT
            </span>
          </li>
        ))}
      </ul>
      <Modal open={editable} isOpen={() => setEditable(false)}>
        <AddItem editItem={editItem} info={elm} />
      </Modal>
    </div>
  );
};

export default Items;
