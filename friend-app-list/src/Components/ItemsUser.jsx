import React from "react";
import AddButton from "./AddButton";

const ItemsUser = ({ users, handleAddItem, onSelection }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div className="d-flex m-5  justify-content-between" key={user.id}>
          <img src={user.image} alt="not loading"></img>
          <li className="list-group-item border-0  " key={user.id}>
            {user.name}
          </li>
          {user.balance > 0 ? (
            <p className="text-success">
              {user.name} owe you money {user.balance} dollars
            </p>
          ) : (
            <p className="text-danger">
              You owe {user.name} money {Math.abs(user.balance)} dollars
            </p>
          )}

          <button className="btn btn-danger" onClick={() => onSelection(user)}>
            call
          </button>
        </div>
      ))}
      <AddButton handleAddItem={handleAddItem} />
    </div>
  );
};

export default ItemsUser;
