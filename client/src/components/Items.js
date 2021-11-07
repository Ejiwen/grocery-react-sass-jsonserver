import React from "react";

const Items = ({ items, removeItem }) => {
  function handleDelete(e) {
    removeItem(e.target.dataset.index);
  }

  return (
    <div className="groceries__list">
      <ul>
        {items.map((item) => (
          <li>
            {item.name} <span>{item.qty}</span>
            <span onClick={handleDelete} data-index={item.id}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
