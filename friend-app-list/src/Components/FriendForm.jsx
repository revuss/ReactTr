import React, { useState } from "react";

const FriendForm = ({ handleAddItem }) => {
  const [name, setName] = useState("");
  const [profiledp, setProfiledp] = useState("https://i.pravatar.cc/50");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newUser = {
      id,
      name,
      image: `${profiledp}?=${id}`,
      balance: 0,
    };

    handleAddItem(newUser);
    setName("");
    setProfiledp("https://i.pravatar.cc/50");
  };

  return (
    <div className=" col-md-12 border justify-content-center align-items-center d-flex my-4">
      <form onSubmit={handleSubmitForm}>
        <div className=" my-3  ">
          <input
            className="p-2 m-3 "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="p-2 m-3"
            type="text"
            value={profiledp}
            onChange={(e) => setProfiledp(e.target.value)}
          ></input>
          <button className="btn btn-danger col-4 my-3" type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FriendForm;
