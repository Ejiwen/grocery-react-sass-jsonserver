import React from "react";

const AddItem = () => {
  return (
    <div className="groceries__form">
      <form>
        <input type="text" placeholder="Grocery item"></input>
        <input type="text" placeholder="Quantity"></input>
        <input type="button" value="ADD" />
      </form>
    </div>
  );
};

export default AddItem;
