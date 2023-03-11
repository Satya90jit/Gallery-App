import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../UserDashboard/UserDashboard.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {



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


  const params = useParams();
  const navigate = useNavigate();
  const paramID = params.id;
  console.log(paramID);

  // const sigleUser = JSON.parse(localStorage.getItem("userLogedIn"));
  const uneee = JSON.parse(localStorage.getItem("uniId"));
  console.log(uneee);
  console.log(uneee.id);
  const cardId = uneee.id;
  console.log(cardId);
  //  localStorage.setItem("username" , sigleUser.userName);

  //console.log(sigleUser)
  //console.log(sigleUser.userName)

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (paramID === cardId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
        .then((response) => {
          setUserData(response.data);
        });
    } else {
      alert("user anauthenticated");
      navigate(`/userdashboard/${cardId}`);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${cardId}/albums`)
        .then((response) => {
          setUserData(response.data);
        });
    }
  }, []);
  console.log(userData);
  const albumData = localStorage.setItem('albumData', JSON.stringify(userData));
  console.log(albumData)

  const handleDelete = (id) => {
    // console.log("deleted")
    const newAlbums = userData.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    setUserData(newAlbums);
  };

  return (
    <>
      <Navbar />
      <div className="card">
        <div className="userImage">
         <img
                        style={{ width: "280px" }}
                        src={random_item(imgArr)}
                      />
        </div>
        <div className="userDetails">
          {/* <h3>id : {params.id}</h3> */}
          {/* {sigleUser ? (
            <div>
              <h2>Full Name : </h2>

              <p>{sigleUser.userName}</p>
              <h2>E-mail address : </h2>
              <p> {sigleUser.password}</p>
            </div>
          ) : ( */}
            <div>
              <h2>Full Name : </h2>

              <p>{uneee.email}</p>
              <h2>E-mail address : </h2>
              <p> {uneee.username}</p>
            </div>
          {/* )} */}
          {/* <h2>Address :</h2>
          <p>{sigleUser.street}</p>
          <p>{sigleUser.city}</p> */}
        </div>
      </div>

      <div className="data">
        <div className="container">
          {userData?.length === 0 ? (
            <h1 className="noresult">No Result</h1>
          ) : (
            userData?.map((elem) => {
              const { id, title } = elem;
              // Random image : "https://random.imagecdn.app/500/150"
              return (
                <div className="items" key={id}>
                  <div className="child-container">
                    <div className="image" key={id}>
                      <img src="https://random.imagecdn.app/500/340" alt="" />
                    </div>
                    <div className="text">
                      <p>id: {id}</p>
                      <p>
                        <span>Title : &nbsp; </span>
                        {title}
                      </p>
                    </div>
                    <div className="action">
                      <Link to={`/albums/photos/${elem.id}`}>Photo</Link>
                      <button
                        onClick={() => handleDelete(elem.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
