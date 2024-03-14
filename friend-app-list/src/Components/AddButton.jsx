import React from "react";
import FriendForm from "./FriendForm";
import { ToggleAddFriend } from "../Service/OpenClose";

const AddButton = ({ handleAddItem }) => {
  const { showForm, toggleForm } = ToggleAddFriend(); // Call ToggleAddFriend to get the state and toggle function

  return (
    <div className="h-50">
      {showForm && <FriendForm handleAddItem={handleAddItem} />}
      <div
        className="btn btn-danger col-md-5 py-2 my-5"
        onClick={toggleForm} // Use toggleForm directly as the click handler
      >
        {showForm ? "Close" : "Add"}{" "}
      </div>
    </div>
  );
};

export default AddButton;
