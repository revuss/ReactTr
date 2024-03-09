import React, { useState } from "react";

const AddForm = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { description, quantity, package: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="mt-3 p-5 d-flex align-items-center justify-content-center row">
      <form
        className="d-flex inline justify-cotent-center align-items-center col-12  "
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="mx-5 my-2 p-3 col-md-2">
          <b> Enter the task : </b>{" "}
        </p>
        <select
          className="border rounded bg-dark text-white p-2 m-1 col-md-2 text-center"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
            <option value={num} key={index}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="mx-5 my-2 p-2 col-md-4"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <button className="btn btn-danger col-md-2" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
