import React, { useState } from "react";

const FriendViewBoxSelext = ({ selectedFriend, onSplitbill }) => {
  const [bill, setBill] = useState("");
  const [paidbyUser, setpaidbyUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidbyUser : "";

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    if (!bill || !paidbyUser) return;
    onSplitbill(whoIsPaying === "user" ? paidByFriend : -paidbyUser);
  };

  return (
    <div>
      <h1>Split a bill with {selectedFriend.name} </h1>

      <form
        className="text-center justify-content-center align-items-center"
        onSubmit={onSubmitHandle}
      >
        <div className="row my-3 justify-content-between align-items-center">
          <label className="col-4 my-2 p-1"> Bill value</label>
          <input
            className=" text-center col-8 my-2 p-1"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="row my-3 justify-content-between align-items-center">
          <label className="col-4 my-2 p-1"> Your expenses</label>
          <input
            className="col-8 text-center my-2 p-1"
            value={paidbyUser}
            onChange={(e) =>
              setpaidbyUser(
                Number(e.target.value) > bill
                  ? paidbyUser
                  : Number(e.target.value)
              )
            }
          />
        </div>
        <div className="row my-3 justify-content-between align-items-center">
          <label className="col-4  my-2 p-1">
            {selectedFriend.name}'s expenses
          </label>
          <input
            className="col-8 text-center my-2 p-1"
            disabled
            value={paidByFriend}
          />
        </div>
        <div className="row my-3 justify-content-between align-items-center">
          <label className="col-5 my-2 p-1"> Who's paying the bill</label>
          <select
            className="col-5 bg-dark text-white justify-content-center align-items-center text-center p-2"
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>
        <div className="row my-3 justify-content-center align-items-center">
          <button
            className="col-5 my-2 p-1 d-flex justify-content-center align-items-center"
            type="submit"
          >
            Split
          </button>
        </div>
      </form>
    </div>
  );
};

export default FriendViewBoxSelext;
