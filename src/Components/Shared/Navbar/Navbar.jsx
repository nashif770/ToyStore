import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //   logOut();
  const handleLogOut = () => {
    logOut()
      .then()
      .cathc((error) => console.log(error));
  };

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">40K ACTION</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          <li>
            <Link to="/mytoys">My Toys</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex">
        {user && (
          <p className="btn btn-outline text-white justify-end m-auto">
            {user.displayName}
          </p>
        )}
        {!user?.displayName ? (
          <Link to="/login" className="btn bg-white text-black">
            Login
          </Link>
        ) : (
          <Link onClick={handleLogOut} className="btn bg-white text-black">
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
