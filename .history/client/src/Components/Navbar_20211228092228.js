import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">
            Lama App
          </Link>
        </span>

        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>

        <Link className="link" to="login">
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;
