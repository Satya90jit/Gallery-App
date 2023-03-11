import React, { useEffect, useState } from "react";
import "../Albums/Albums.css";
import axios from "axios";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [query, setQuery] = useState("");
  // const params = useParams();
  const { id } = useParams();

  const albumbData = JSON.parse(localStorage.getItem("uniId"));

  console.log(albumbData);

  // console.log(albumbData.id);
  // const albumId=(albumbData.id);
  // console.log(albumId);
  // console.log(params.id)
  // const paramide=(params.id)
  // console.log(paramide);

  // const photoData = localStorage.setItem(userData)
  // console.log(photoData)
  // console.log(params);

  useEffect(() => {
    
    const loggedInUser = JSON.parse(localStorage.getItem("cardID"));

    // if (loggedInUser && photoId) {
    //   if (!(Number(photoId) - Number(loggedInUser) <= 10)) {
    //     alert("user unauthenticated")
    //     navigate(-1);
    //   }
    // }

    const photoGallery = JSON.parse(localStorage.getItem("albumData"));
    const newData = photoGallery.filter(
      (element) => element.id === parseInt(id)
    );
    if (newData.length !== 0) {
      if (newData[0].id === parseInt(id)) {
        axios
          .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
          .then((response) => {
            setUserData(response.data);
          });
      }
    } else {
      alert("user unauthenticated");
      console.log("log in to access");
      navigate(-1);
    }
  }, []);
  // const data = localStorage.getItem("userArray")
  // console.log(data)
  console.log(userData);
  console.log(userData[0]);

  const handleDelete = (id) => {
    // console.log("deleted");
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
        {userData?.length === 0 ? (
          <h1 className="noresult">No Albums available right now...</h1>
        ) : (
          userData
            ?.filter((elm) => elm.title.toLowerCase().includes(query))
            .map((elem) => {
              const { title, url, id } = elem;
              // Random image : "https://random.imagecdn.app/500/150"
              return (
                <div className=" photo" key={id}>
                  <div className="child">
                    <div className="image" key={id}>
                      <img src={url} alt="" />
                    </div>
                    <div className="text">
                      <p>id : {id}</p>
                      <p>
                        <span>Desc : &nbsp; </span>
                        {title}
                      </p>
                      <button
                        className="deletePhoto"
                        onClick={() => handleDelete(elem.id)}
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
    </>
  );
};

export default Search;
