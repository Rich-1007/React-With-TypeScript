import { useState } from "react";

const Loggedin = () => {
  const [islogedin, setIslogedin] = useState(false);

  const HandleLogIn = () => {
    setIslogedin(true);
  };
  const HandleLogOut = () => {
    setIslogedin(false);
  };

  return (
    <div>
      <button onClick={HandleLogIn}>LogIn</button>
      <button onClick={HandleLogOut}>LogOut</button>

      <div>User is{islogedin ? "LogedIn" : "LogedOut"}</div>
    </div>
  );
};

export default Loggedin;
