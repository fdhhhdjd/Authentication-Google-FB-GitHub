import React from "react";
import Google from "../Img/google.png";
import Facebook from "../Img/facebook.png";
import Github from "../Img/github.png";
const Login = () => {
  const handleGoogle = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const handleFacebook = () => {
    window.open("https://loginfull.herokuapp.com/auth/facebook", "_self");
  };
  const handleGithub = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <>
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={handleGoogle}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton facebook" onClick={handleFacebook}>
              <img src={Facebook} alt="" className="icon" />
              Facebook
            </div>
            <div className="loginButton github" onClick={handleGithub}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
