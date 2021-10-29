import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    setIsloggedIn(true);
  };
  const handleLogout = () => {
    setIsloggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
