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
            <Link to="/addtoy">Add Toy</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="m-3">
          {user && (
            <p className="btn hover:bg-white hover:text-black border-none bg-gray-800 text-white justify-end m-auto">
              {user.displayName}
            </p>
          )}
        </div>
        <div className="m-3">
          {!user?.displayName ? (
            <Link to="/login" className="btn hover:bg-white hover:text-black border-none bg-gray-800 text-white">
              Login
            </Link>
          ) : (
            <Link onClick={handleLogOut} className="btn hover:bg-white hover:text-black border-none  bg-gray-800 text-white">
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
