import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  //   logOut();
  const handleLogOut = () => {
    logOut()
      .then()
      .cathc((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
      <img className="ps-11 h-20" src="https://i.ibb.co/YkcS8RD/Logo-Makr-4583am.png" alt="" />
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
            <Link to="/blogs">Blogs</Link>
          </li>
          {user && (
            <div className="flex flex-row">
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
              <li>
                <Link to="/addtoy">Add Toy</Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div className="flex">
        <div className="m-3">
          {user &&
            (isHovered ? (
              <p
                onMouseLeave={handleLeave}
                className="btn hover:bg-white hover:text-black border-none bg-gray-800 text-white justify-end m-auto"
              >
                {user.displayName}
              </p>
            ) : (
              <img
                onMouseEnter={handleHover}
                className="h-12 rounded-full border"
                src={user.photoURL}
                alt=""
              />
            ))}
        </div>
        <div className="m-3">
          {!user?.displayName ? (
            <Link
              to="/login"
              className="btn hover:bg-white hover:text-black border-none bg-gray-800 text-white"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={handleLogOut}
              className="btn hover:bg-white hover:text-black border-none  bg-gray-800 text-white"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
