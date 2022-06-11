import { useRef, useEffect} from "react";
import "../styles/Login.css";
// import useLocalStorage from "./useLocalStorage";
// import UserContext from "./UserContext";

// import Login from "./Pages/Login";

import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/init";
import { logInWithGoogle } from "../firebase/users";
import { logInWithGithub } from "../firebase/users";
import { logInWithEmailAndPassword } from "../firebase/users";
import { registerWithEmailAndPassword } from "../firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";

const LogIn = () => {
  // const [user, setUser] = useContext(UserContext);
  // const [localStorage, setLocalStorage] = useLocalStorage("user", "");

  const emailRef = useRef();
  const passwordRef = useRef();

  const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading)
            return
        if (user)
            navigate("/");
        if(error)
            console.error({error});
        }, [user, loading, error, navigate]);

  const handleLogIn = (e) => {
    logInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
  //   // setUser(emailRef.current.value);
  //   setLocalStorage(emailRef.current.value);
  //   console.log(emailRef.current.value);
  // };

  // const handleLogOut = () => {
  //   setUser("");
  //   setLocalStorage("");
  //   console.log("logged out" + user.email);
  };

  const handleRegister = () => {
    registerWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
  }

  // if (user === "" && localStorage === "") {
    return (
      <div className="app">
        <h1>Login</h1>
        <form className="login" onSubmit={handleLogIn}>
          <label>Email:</label>
          <input required type="email" name="email" ref={emailRef} />
          <label>Password:</label>
          <input required type="password" name="password" ref={passwordRef} />
          {/* <input type="submit" value="Login" /> */}
        </form>
        <button onClick={handleLogIn}>
            Login with Email
        </button>
        <button onClick={handleRegister}>
            Register with Email
        </button>
        <button onClick={logInWithGoogle}>
            Login with Google
        </button>
        <button onClick={logInWithGithub}>
            Login with Github
        </button>
        {/* <UserContext.Provider value={email}>
          <UserContext.Provider value={password}></UserContext.Provider>
        </UserContext.Provider> */}
        {/* <button href="/">Back to Home</button> */}
        {/* <button href="/signup">Sign Up</button> */}
      </div>
    );
  // } else {
  //   return (
  //     <div className="app">
  //       <h1>Welcome {user}</h1>
  //       <button onClick={handleLogOut}>Log Out</button>
  //     </div>
  //   );
  }
// };
export default LogIn;
