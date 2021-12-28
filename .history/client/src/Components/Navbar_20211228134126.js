import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const handleLogout = () => {
    window.open("https://loginfull.herokuapp.com/", "_self");
  };
  console.log(user, "alo");
  return (
    <>
      <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">
            Tien tai
          </Link>
        </span>
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        ) : (
          <Link className="link" to="login">
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
