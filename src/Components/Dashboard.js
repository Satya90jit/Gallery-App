
    import React, { useEffect, useState } from "react";
    import { json, Link, useParams } from "react-router-dom";
    import axios from "axios";
    // import { useParams } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import Navbar from "./Navbar/Navbar";
    
    const Dashboard = () => {
      const navigate = useNavigate()
      const params = useParams();
      const paramId = params.id
      console.log(params)
      console.log(paramId)
      
      const navUser =  JSON.parse( localStorage.getItem("userLogedIn"))
      const navId = navUser.id
      console.log(navUser)
    
      
      const [userData, setUserData] = useState([]);
      useEffect(() => {
        if (paramId === navId) {
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
            .then((response) => {
              setUserData(response.data);
            });
        } else {
          navigate(`/dashboard/${navId}`);
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${navId}/albums`)
            .then((response) => {
              setUserData(response.data);
            });
        }
      }, []);
    
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
    <Navbar/>
    
    <div className="card">
            <div className="userImage">
              <img
                src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png"
                alt=""
              />
            </div>
            <div className="userDetails">
              <h3>id : {navId}</h3>
            
                <div>
                  <h2>Full Name : </h2>
    
                  <p>{navUser.userName}</p>
                  <h2>E-mail address : </h2>
                  <p> {navUser.password}</p>
                </div>
    
            </div>
          </div>
    
          {/* data output */}
    
    
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
                          {/* <Link to={`/albums/${id}`}>Photo</Link> */}
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
      )
    }
    
    export default Dashboard