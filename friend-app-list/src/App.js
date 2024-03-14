import "./App.css";
import FriendsList from "./Components/FriendsList";
import { ListUsers } from "./Service/UserList";
import { useEffect, useState } from "react";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectionFriend = (friend) => {
    setSelectedFriend(friend);
  };
  const handleSplitBill = (value) => {
    console.log(value);
    setUsers((friends) =>
      Array.isArray(friends)
        ? friends.map((friend) =>
            friend.id === selectedFriend.id
              ? { ...friend, balance: friend.balance + value }
              : friend
          )
        : friends
    );
    setSelectedFriend(null);
  };

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : ListUsers;
  });

  const handleAddItem = (item) => {
    setUsers((items) => [...items, item]);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users)); // Corrected line
  }, [users]);

  useEffect(() => {
    document.title = "Friends List";
  }, []);

  return (
    <div className="App">
      <FriendsList
        users={users}
        handleAddItem={handleAddItem}
        selectedFriend={selectedFriend}
        onSelection={handleSelectionFriend}
        onSplitbill={handleSplitBill}
      />
    </div>
  );
}

export default App;
