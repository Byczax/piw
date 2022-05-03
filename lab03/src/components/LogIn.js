import { useRef, useContext } from "react";
import "../styles/Login.css";
import useLocalStorage from "./useLocalStorage";
import UserContext from "./UserContext";

const LogIn = () => {
  const [user, setUser] = useContext(UserContext);
  const [localStorage, setLocalStorage] = useLocalStorage("user", "");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogIn = (e) => {
    setUser(emailRef.current.value);
    setLocalStorage(emailRef.current.value);
    console.log(emailRef.current.value);
  };

  const handleLogOut = () => {
    setUser("");
    setLocalStorage("");
    console.log("logged out" + user.email);
  };

  if (user === "" && localStorage === "") {
    return (
      <div className="app">
        <h1>Login</h1>
        <form className="login" onSubmit={handleLogIn}>
          <label>Email:</label>
          <input required type="email" name="email" ref={emailRef} />
          <label>Password:</label>
          <input required type="password" name="password" ref={passwordRef} />
          <input type="submit" value="Submit" />
        </form>
        {/* <UserContext.Provider value={email}>
          <UserContext.Provider value={password}></UserContext.Provider>
        </UserContext.Provider> */}
        {/* <button href="/">Back to Home</button> */}
        {/* <button href="/signup">Sign Up</button> */}
      </div>
    );
  } else {
    return (
      <div className="app">
        <h1>Welcome {user}</h1>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }
};
export default LogIn;
