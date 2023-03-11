import React, { useState } from "react";
import "../Log In/Login.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
  // const [loginCrediential, setLoginCrediential] = useState([]);
  // const [isLogedIn, setIsLogedIn] = useState(false);
  const [ids,setIds]=useState('')

  const navigate = useNavigate();

  const LoginDetails = JSON.parse(localStorage.getItem("userArray"));
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("first")
    for (let i = 0; i < LoginDetails.length; i++){
      if( userName === LoginDetails[i].username && password === LoginDetails[i].email){
        const navId = LoginDetails[i].id
        alert("login successfull")
        navigate(`/dashboard/${navId}`)
        console.log(navId)
        const id = LoginDetails[i].id;
        const logInid = { userName, password, id };
        localStorage.setItem("userLogedIn", JSON.stringify(logInid))
      }
    }

    // for (let i = 0; i < LoginDetails.length; i++) {
    //   if (
    //     userName === LoginDetails[i].username &&
    //     password === LoginDetails[i].email
    //   ) {
    //     const idd = LoginDetails[i].id
    //     alert("Log In Successfull");
    //     navigate(`/userdashboard/${idd}`);
    //     localStorage.setItem("idE" , idd)
    //     setIds(idd )
    //     console.log(ids);

    //     const userId = LoginDetails[i].id;

    //     const logInid = { userName, password, userId };
        
    //     localStorage.setItem("userLogedIn", JSON.stringify(logInid));
    //   }
    // }
  };

  return (
    <>
      <Navbar id={ids}  />
      <form className="logg">
        <h2 className="h2">User Login</h2>
        <div className="username ">
          <label htmlFor="username">USER NAME</label>
          <input
            className="loginName"
            type="text"
            placeholder=" Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="password  ">
          <label htmlFor="username">PASSWORD</label>

          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogIn} className="logUn">
          Log in
        </button>
      </form>
    </>
  );
};

export default Login;
