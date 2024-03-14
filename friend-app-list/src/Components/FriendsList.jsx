import React from "react";
import ItemsUser from "./ItemsUser";
import FriendViewBoxSelext from "./FriendViewBoxSelext";

const FriendsList = ({
  users,
  handleAddItem,
  selectedFriend,
  onSelection,
  onSplitbill,
}) => {
  return (
    <div>
      <div className="container h-20">
        <div className="row my-5 p-2  ">
          <div className="col-md-6 ">
            <ul class="list-group ">
              <ItemsUser
                users={users}
                handleAddItem={handleAddItem}
                onSelection={onSelection}
                keyExtractor={(user) => user.id}
              />
            </ul>
          </div>
          {selectedFriend && (
            <div className="col-md-6 ">
              <div className="border bg-dark text-white rounded my-3 p-5">
                <FriendViewBoxSelext
                  selectedFriend={selectedFriend}
                  onSplitbill={onSplitbill}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
