import React from "react";

const ItemSingle = ({ items, onDeleteItem, onStrike }) => {
  return (
    <div className="mb-5">
      {items.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={item.id}
        >
          <p className="btn" onClick={() => onStrike(item.id)}>
            ✔️
          </p>
          {item.packed ? (
            <p className="btn">
              <s>
                {item.quantity} : {item.description}
              </s>
            </p>
          ) : (
            <p className="btn">
              {item.quantity} : {item.description}
            </p>
          )}
          <p className="btn" onClick={() => onDeleteItem(item.id)}>
            ❌
          </p>
        </li>
      ))}
    </div>
  );
};

export default ItemSingle;
