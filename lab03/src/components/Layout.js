import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navigation">
        <ul className="sites">
          <li>
            <Link to="/" className="menu">
              Student
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
            <Link className="menu" to="/logIn">
              User
            </Link>
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
