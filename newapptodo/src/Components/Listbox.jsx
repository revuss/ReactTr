import React from "react";
import ItemSingle from "./ItemSingle";

const Listbox = ({ items, onDeleteItem, onStrike }) => {
  return (
    <div className="container">
      <ul className="list-group ">
        <ItemSingle
          items={items}
          onDeleteItem={onDeleteItem}
          onStrike={onStrike}
        />
      </ul>
    </div>
  );
};

export default Listbox;
