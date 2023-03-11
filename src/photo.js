import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../Albums/Albums.css";


const Albums = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  var albumArr = JSON.parse(localStorage.getItem("albumData"));

  const [photodata, setPhotodata] = useState([]);
  const [loadingphoto, setLoadingPhoto] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filterData = albumArr.filter((item) => item.id === parseInt(id));
    console.log(filterData);
    console.log(parseInt(id));
    if (filterData.length !== 0) {
      if (filterData[0].id == parseInt(id)) {
        console.log("matched");
        getPhotodata();
      }
    } else {
      alert("User Authenticated");
      navigate(-1);
    }
  }, []);

  const getPhotodata = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
      );
      setPhotodata(res.data);
      setLoadingPhoto(true);
    } catch (err) {
      alert(err.message);
    }
  };
  localStorage.setItem("photoArr", JSON.stringify(photodata));

  function deleteUser(id) {
    console.log(id);
    var photoArr = JSON.parse(localStorage.getItem("photoArr"));
    const filtered = photoArr.filter((user) => user.id !== id);
    localStorage.setItem("photoArr", JSON.stringify(filtered));
    setPhotodata(filtered);
    console.log(photodata);
  }

  return (
    <>
      <Navbar />

      <div className="search-container">
        <div className="searchBox">
          <span className="searchIcon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
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
        {loadingphoto &&
          photodata
            .filter((item) => item.title.toLowerCase().includes(query))
            .map((item) => (
              
              <div className=" photo" key={id}>
              <div className="child">
                <div className="image" key={id}>
                  <img src={item.url} alt="" />
                </div>
                <div className="text">
                  <p>id : {item.id}</p>
                  <p>
                    <span>Desc : &nbsp; </span>
                    {item.title}
                  </p>
                  <button
                    className="deletePhoto"
                    onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            ))}
      </div>
    </>
  );
};

export default Albums;
