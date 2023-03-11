import React, { useEffect, useState } from "react";
import "../Search Bar/Search.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Search = () => {
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState("");
  // const navigate = useNavigate();

  const imgArr = [
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/140.png",
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/20575.png",
    "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
  ];

  function random_item(imgArr) {
    return imgArr[Math.floor(Math.random() * imgArr.length)];
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUserData(response.data);
    });
  }, []);

  localStorage.setItem("userArray", JSON.stringify(userData));
  // console.log(userData);

  // const handleCardLogin=(e)=>{
  //   e.preventDefault();
  //   // console.log("cardloginapplied");
  //   navigate("/universal")

  // }

  return (
    <>
      <div className="search-container">
        <div className="searchBox">
          <span className="searchIcon"></span>
          <input
            className="inputBox"
            type="text"
            placeholder="Search your gallery here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        {/* {console.log("userdata", userData.length)} */}
        {userData?.length === 0 ? (
          <h1 className="noresult">No Result</h1>
        ) : (
          userData
            ?.filter((elm) => elm.name.toLowerCase().includes(query))
            .map((elem) => {
              const { username, email, id } = elem;

              //  console.log(ids)

              // Random image : "https://random.imagecdn.app/500/150"
              return (
                <div className="items" key={id}>
                  <div className="child-container">
                    <div className="image" key={id}>
                      {/* <img src="https://random.imagecdn.app/500/370" alt="" /> */}
                      <img
                        style={{ width: "250px" }}
                        src={random_item(imgArr)}
                      />
                      {/* <img src={Math.floor(Math.random() * imgArr.length)} /> */}
                    </div>
                    <div className="text">
                      <h2>
                        Gallery Of <span>{username}</span>
                      </h2>

                      <p>
                        <span>Email : &nbsp; </span>
                        {email}
                      </p>
                    </div>

                    {localStorage.getItem("userLogedIn") ||
                    localStorage.getItem("uniId") ? null : (
                      <Link
                        to={`/universal/${id}/${email}/${username}`}
                        className="searchH2"
                      >
                        Log In
                      </Link>
                    )}
                  </div>
                </div>
              );
            })
        )}
      </div>
    </>
  );
};

export default Search;
