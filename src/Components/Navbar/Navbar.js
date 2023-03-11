import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ id }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const LoginDetails = JSON.parse(localStorage.getItem("userArray"));
  console.log(LoginDetails);
  // console.log(LoginDetails[9].username)
  console.log(LoginDetails.username);

  const handleLogOut = (e) => {
    localStorage.removeItem("uniId");
    e.preventDefault();
    navigate("/");
    console.log("log out");
    localStorage.removeItem("userLogedIn");
    // localStorage.setItem("userArray")

    // console.log("navigate")
  };
  // const handleLogIn = (e) => {
  //   localStorage.setItem("userArray");
  //   e.preventDefault()

  // };
  const handleDashboard = (e) => {
    e.preventDefault();

    // const UserData = JSON.parse(localStorage.getItem("userArray"));
    // if (localStorage.getItem("userLogedIn")) {
    //   const idf = JSON.parse(localStorage.getItem("idE"));
    //   navigate(`/userdashboard/${idf}`);
    // } else
    if (localStorage.getItem("uniId")) {
      const idCard = localStorage.getItem("cardID");
      navigate(`/userdashboard/${idCard}`);
    }
    if (localStorage.getItem("userLogedIn")) {
      const navUser = JSON.parse(localStorage.getItem("userLogedIn"));
      const navId = navUser.id;
      navigate(`/dashboard/${navId}`);
    }
    if (
      !localStorage.getItem("uniId") &&
      !localStorage.getItem("userLogedIn")
    ) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="nav-right">
        <h2>
          Gallery <span>App</span>
        </h2>
        <div className="menu"></div>

        <div className=" flex">
          <ul className="flex">
            <li>
              <span className="nav-icon"></span>
              <Link to={"/"}>USER</Link>
            </li>
            <li>
              <span className="nav-icon-dash"></span>
              <Link onClick={handleDashboard}>DASHBOARD</Link>
            </li>
            <li>
              <span className="nav-icon-dash"></span>
              {/* <Link to={"/albums"}>ALBUMS</Link> */}
            </li>
          </ul>
          <div className="login">
            {localStorage.getItem("userLogedIn") ||
            localStorage.getItem("uniId") ? (
              <Link to={"/"} onClick={handleLogOut}>
                Log out
              </Link>
            ) : (
              <Link to={"/login"}>Log in</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
