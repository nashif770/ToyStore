import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">40K ACTION</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <Link to='/orders'>Orders</Link>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-white text-black">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
