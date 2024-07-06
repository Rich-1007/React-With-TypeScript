import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const HandleLogin = () => {
    setUser({
      name: "Rich",
      email: "ghricheak@gmail.com",
    });
  };
  const HandleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={HandleLogin}>Login</button>
      <button onClick={HandleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
