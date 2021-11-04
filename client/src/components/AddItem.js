import React from "react";

const AddItem = () => {
  return (
    <div className="groceries__form">
      <form>
        <input type="text" placeholder="Grocery item"></input>
        <input type="text" placeholder="Quantity"></input>
      </form>
    </div>
  );
};

export default AddItem;
