import React from "react";

const Items = ({items}) => {
  return (
    <div className="groceries__list">
      <ul>
        {
          items.map((item) => <li> {item.name}  <span>{item.qty}</span> </li>)
        }
      </ul>
    </div>
  );
};

export default Items;
