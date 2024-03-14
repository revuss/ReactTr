import { useState } from "react";

export const ToggleAddFriend = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return { showForm, toggleForm };
};
