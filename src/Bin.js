// import React, { useEffect, useState } from "react";
// import "../Search Bar/Search.css";
// import axios from "axios";

// const Search = () => {
//   const [userData, setUserData] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//       setUserData(response.data);
//     });
//   }, []);
//   return (
//     <>
//       <div className="search-container">
//         <div className="searchBox">
//           <span className="searchIcon">
//             <ion-icon name="search-outline"></ion-icon>
//           </span>
//           <input
//             className="inputBox"
//             type="text"
//             placeholder="Search here"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="container">
//         {userData?.length === 0 ? (
//           <h1 className="noresult">No Result</h1>
//         ) : (
//           userData
//             ?.filter((elm) => elm.name.toLowerCase().includes(query))
//             .map((elem) => {
//               const { name, email, id } = elem;

//               return (
//                 <div className="items" key={id}>
//                   <div className="child-container">
//                     <div className="image" key={id}>
//                       <img
//                         src="https://statisticsbyjim.com/wp-content/uploads/2019/05/random_dice.png"
//                         alt=""
//                       />
//                     </div>
//                     <div className="text">
//                       <h2>
//                         Gallery Of <span>{name}</span>
//                       </h2>

//                       <p>
//                         <span>Email : &nbsp; </span>
//                         {email}
//                       </p>
//                     </div>
//                     <a href="">Log in</a>
//                   </div>
//                 </div>
//               );
//             })
//         )}
//       </div>
//     </>
//   );
// };

// export default Search;


// // Master Login 


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Log In/Login.css";
// import Navbar from "../Navbar/Navbar";

// const Login = () => {
//   localStorage.getItem("token");
//   const [userData, setUserData] = useState({ username: "", password: "" });

//   const handleInputChange = (e) => {
//     setUserData((prevState) => {
//       return {
//         ...prevState,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userData.username === "" || userData.password === "") {
//       alert("Enter the username and password");
//     } else if (
//       userData.username.toLowerCase() === "admin" &&
//       userData.password === "123456"
//     ) {
//       alert(" log in success ");

//       localStorage.setItem("isAuthenticated", "true");
//       window.location.pathname = "/";
//     } else {
//       alert("invalid userDetails");
//       return;
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <form className="logg">
//         <h2 className="h2">Admin Login</h2>
//         <div className="username ">
//           <label htmlFor="username">USER NAME</label>
//           <input
//             className="loginName"
//             type="text"
//             placeholder=" Enter Username"
//             name="username"
//             onChange={(e) => handleInputChange(e)}
//           />
//         </div>
//         <div className="password  ">
//           <label htmlFor="username">PASSWORD</label>

//           <input
//             className="password"
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             onChange={(e) => handleInputChange(e)}
//           />
//         </div>
//         <Link onClick={handleSubmit} className="logUn">
//           Login
//         </Link>
//       </form>
//     </>
//   );
// };

// export default Login;


// Log in details 

// const [userData, setUserData] = useState({ username: "", password: "" });

// const handleInputChange = (e) => {
//   setUserData((prevState) => {
//     return {
//       ...prevState,
//       [e.target.name]: e.target.value,
//     };
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (userData.username === "" || userData.password === "") {
//     alert("Enter the username and password");
//   } else if (
//     userData.username.toLowerCase() === "admin" &&
//     userData.password === "123456"
//   ) {
//     alert(" log in success ");

//     window.location.pathname = "/";
//   } else {
//     alert("invalid userDetails");
//     return;
//   }
// };
// for (let i = 0; i < userArray.length; i++) {
//     if (userName === userArray[i].username && password === userArray[i].email) {
//       alert("correct details");
//       navigate("/userdashboard");
//     }
//   }

  // import React from "react";
// import { Redirect , Route } from 'react-router-dom';


// const Protected = ({ Components}) => (
  // <Route
   
  //   render={() => {
  
  //     localStorage.getItem("userLogedIn") ? (
       
  //       <div>hello</div>
  //     ) : (
  //       <div>buy</div>
  //       // <Redirect to="/Login" />
  //     );
  //   }}
//   // />
// );

// export default Protected;


// Protected  Routing 

  // || (
    //   <Navigate to="/universal/:id/:username/:email" />
    // )



//     import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// // import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";

// const Dashboard = () => {
//   const navigate = useNavigate()
//   const params = useParams();
//   const navUser =  JSON.parse( localStorage.getItem("userLogedIn"))
//   const navId = navUser.userId
//   console.log(navUser)


//   const [userData, setUserData] = useState([]);

//   useEffect(() => {

//       axios
//         .get(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
//         .then((response) => {
//           setUserData(response.data);
//         });

    
//   }, []);

//   const handleDelete = (id) => {
//     // console.log("deleted")
//     const newAlbums = userData.filter((elm) => {
//       if (elm.id !== id) {
//         return elm;
//       }
//     });
//     setUserData(newAlbums);
//   };

//   return (
// <>
// <Navbar/>

// <div className="card">
//         <div className="userImage">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png"
//             alt=""
//           />
//         </div>
//         <div className="userDetails">
//           <h3>id : {navId}</h3>
        
//             <div>
//               <h2>Full Name : </h2>

//               <p>{navUser.userName}</p>
//               <h2>E-mail address : </h2>
//               <p> {navUser.password}</p>
//             </div>

//         </div>
//       </div>

//       {/* data output */}


//       <div className="data">
//         <div className="container">
//           {userData?.length === 0 ? (
//             <h1 className="noresult">No Result</h1>
//           ) : (
//             userData?.map((elem) => {
//               const { id, title } = elem;
//               // Random image : "https://random.imagecdn.app/500/150"
//               return (
//                 <div className="items" key={id}>
//                   <div className="child-container">
//                     <div className="image" key={id}>
//                       <img src="https://random.imagecdn.app/500/340" alt="" />
//                     </div>
//                     <div className="text">
//                       <p>id: {id}</p>
//                       <p>
//                         <span>Title : &nbsp; </span>
//                         {title}
//                       </p>
//                     </div>
//                     <div className="action">
//                       <Link to={`/albums/${id}`}>Photo</Link>
//                       <button
//                         onClick={() => handleDelete(elem.id)}
//                         className="delete-btn"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
// </>
//   )
// }

// export default Dashboard



// userdashboard after card login



// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import "../UserDashboard/UserDashboard.css";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// // import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const paramID = params.id;
//   console.log(paramID);

//   // const sigleUser = JSON.parse(localStorage.getItem("userLogedIn"));
//   const uneee = JSON.parse(localStorage.getItem("uniId"));
//   console.log(uneee);
//   console.log(uneee.id);
//   const cardId = uneee.id;
//   console.log(cardId);
//   //  localStorage.setItem("username" , sigleUser.userName);

//   //console.log(sigleUser)
//   //console.log(sigleUser.userName)

//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     if (paramID === cardId) {
//       axios
//         .get(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
//         .then((response) => {
//           setUserData(response.data);
//         });
//     } else {
//       alert("user anauthenticated");
//       navigate(`/userdashboard/${cardId}`);
//       axios
//         .get(`https://jsonplaceholder.typicode.com/users/${cardId}/albums`)
//         .then((response) => {
//           setUserData(response.data);
//         });
//     }
//   }, []);
//   console.log(userData);
//   const albumData = localStorage.setItem('albumData', JSON.stringify(userData));
//   console.log(albumData)

//   const handleDelete = (id) => {
//     // console.log("deleted")
//     const newAlbums = userData.filter((elm) => {
//       if (elm.id !== id) {
//         return elm;
//       }
//     });
//     setUserData(newAlbums);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="card">
//         <div className="userImage">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113__340.png"
//             alt=""
//           />
//         </div>
//         <div className="userDetails">
//           {/* <h3>id : {params.id}</h3> */}
//           {/* {sigleUser ? (
//             <div>
//               <h2>Full Name : </h2>

//               <p>{sigleUser.userName}</p>
//               <h2>E-mail address : </h2>
//               <p> {sigleUser.password}</p>
//             </div>
//           ) : ( */}
//             <div>
//               <h2>Full Name : </h2>

//               <p>{uneee.email}</p>
//               <h2>E-mail address : </h2>
//               <p> {uneee.username}</p>
//             </div>
//           {/* )} */}
//           {/* <h2>Address :</h2>
//           <p>{sigleUser.street}</p>
//           <p>{sigleUser.city}</p> */}
//         </div>
//       </div>

//       <div className="data">
//         <div className="container">
//           {userData?.length === 0 ? (
//             <h1 className="noresult">No Result</h1>
//           ) : (
//             userData?.map((elem) => {
//               const { id, title } = elem;
//               // Random image : "https://random.imagecdn.app/500/150"
//               return (
//                 <div className="items" key={id}>
//                   <div className="child-container">
//                     <div className="image" key={id}>
//                       <img src="https://random.imagecdn.app/500/340" alt="" />
//                     </div>
//                     <div className="text">
//                       <p>id: {id}</p>
//                       <p>
//                         <span>Title : &nbsp; </span>
//                         {title}
//                       </p>
//                     </div>
//                     <div className="action">
//                       <Link to={`/albums/${id}`}>Photo</Link>
//                       <button
//                         onClick={() => handleDelete(elem.id)}
//                         className="delete-btn"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserDashboard;


// album with 10


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
  const params = useParams();
  const photoId = params.id;

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
    if (loggedInUser && photoId) {
      if (!(Number(photoId) - Number(loggedInUser) <= 10)) {
        alert("user unauthenticated")
        navigate(-1);
      }
    }
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
      .then((response) => {
        setUserData(response.data);
      });
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




// bootstrap removed 


// import React, { Fragment, useEffect, useState } from "react";
// import { BrowserRouter, useParams } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";

// const Albums = () => {
//   const navigate = useNavigate();

//   let { id } = useParams();

//   var albumArr = JSON.parse(localStorage.getItem("albumData"));


//   const [photodata, setPhotodata] = useState([]);
//   const [loadingphoto, setLoadingPhoto] = useState(false);
//   const [q, setQ] = useState("");

//   useEffect(() => {
//     const filterData = albumArr.filter((item) => item.id === parseInt(id));
//     console.log(filterData);
//     console.log(parseInt(id));
//     if (filterData.length !== 0) {
//       if (filterData[0].id == parseInt(id)) {
//         console.log("matched");
//         getPhotodata();
//       }
//     } else {
//       alert("User Authenticated");
//       navigate(-1);
//     }
//   }, []);

//   const getPhotodata = async () => {
//     try {
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/albums/" + id + "/photos"
//       );
//       setPhotodata(res.data);
//       setLoadingPhoto(true);
//     } catch (err) {
//       alert(err.message);
//     }
//   };
//   localStorage.setItem("photoArr", JSON.stringify(photodata));

//   function deleteUser(id) {
//     console.log(id);
//     var photoArr = JSON.parse(localStorage.getItem("photoArr"));
//     const filtered = photoArr.filter((user) => user.id !== id);
//     localStorage.setItem("photoArr", JSON.stringify(filtered));
//     setPhotodata(filtered);
//     console.log(photodata);
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="d-flex">
//         <input
//           type="search"
//           placeholder="Search"
        
//           onChange={(e) => setQ(e.target.value)}
//         />
//       </div>

//       <div>
//         {loadingphoto &&
//           photodata
//             .filter((item) => item.title.toLowerCase().includes(q))
//             .map((item) => (
//               <div  key={item.id}>
//                 <div >
//                   <div
                   
//                   />
//                   <div>
//                     <h3>{item.title}</h3>
//                     <h5>{item.id}</h5>
//                     <button onClick={() => deleteUser(item.id)}>Delete</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </>
//   );
// };

// export default Albums;
