import { Outlet, Link } from "react-router-dom";

import { auth } from "../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import {logout} from "../firebase/users"


const Layout = () => {

  const [userInny] = useAuthState(auth);

  return (
    <>
      <nav className="navigation">
        <ul className="sites">
          <li>
            <Link to="/" className="menu">
              Students
            </Link>
          </li>
          <li>
            <Link className="menu" to="/groups">
              groups
            </Link>
          </li>
          <li>
            <Link className="menu" to="/newGroup">
              New Group
            </Link>
          </li>
          <li>
            <Link className="menu" to="/newStudent">
              new student
            </Link>
          </li>
          <li>
          { (userInny && <button className="menu-button" onClick={logout}>Log Out {userInny.displayName} </button>)
            || <Link className="menu" to="/logIn">Log in</Link>}
            {/* <Link className="menu" to="/logIn">
              User
            </Link> */}
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
