import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleLogout = () => {};
  return (
    <>
      <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">
            Tài Heo Dev Web
          </Link>
        </span>

        <ul className="list">
          <li className="listItem">
            {/* <img src={user.photos[0].value} alt="" className="avatar" /> */}
            <img
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=xnYWSqjvTl4AX9RY_UY&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-1E-96WzLB7pj7W7bDKwwLN7vtbE5gzAd_jzOv_Jfuyg&oe=61F16B9E"
              alt=""
              className="avatar"
            />
          </li>
          {/* <li className="listItem">{user.displayName}</li> */}
          <li className="listItem">N Tien Tai</li>
          <li className="listItem" onClick={handleLogout}>
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
