import React, { useState } from "react";
import "../Log In/Login.css";
import "../Universal Log In/Universal.css";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Universal = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const params = useParams();
  // const idd = JSON.parse(localStorage.getItem("idE"));
  // localStorage.setItem("idE")
  // console.log(idd);

  // const UniLog = JSON.parse(localStorage.getItem("userArray"));
  // console.log(UniLog)
  console.log(params.userName);

  const data = { id:params.id, username: params.username, email: params.email };

  const hangleUniLogin = (e) => {
    e.preventDefault();
    if (email === params.username) {
      // const idd = JSON.parse(localStorage.getItem("idE"));
      alert("log in successfull");
      navigate(`/userdashboard/${params.id}`);
      localStorage.setItem("uniId", JSON.stringify(data));
      const cardi=params.id
      console.log(cardi);
      localStorage.setItem("cardID" , cardi)
      // localStorage.setItem('token', JSON.stringify("userLogedIn"));
    } else {
      alert("Plz Enter correct login details");
    }
    // console.log(UniLog[1].username)
  };

  return (
    <>
      <Navbar />
      <form className="universalLog">
        <h2 className="h2">User Login</h2>
        <div className="username ">
          <label htmlFor="username">USER NAME</label>
          <input
            className="loginName"
            type="text"
            readOnly
            placeholder=" Enter Username"
            value={params.email}
          />
        </div>
        <div className="password  ">
          <label htmlFor="username">PASSWORD</label>

          <input
            className="password"
            type="text"
            placeholder="Enter Password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={hangleUniLogin} className="logUni">
          Login
        </button>
      </form>
    </>
  );
};

export default Universal;
