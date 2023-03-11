import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const universalUser = JSON.parse(localStorage.getItem("userLogedIn"));
  //   <Route
  //     render={() => {
  //       localStorage.getItem("userLogedIn") ? (
  //         <Albums />
  //       ) : (
  //         <Redirect to="/Login" />
  //       );
  //     }}
  //   />;
  const cardUser = JSON.parse(localStorage.getItem("uniId"));
  console.log(cardUser)

  return universalUser || cardUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" /> 
  
  );
};

export default Protected;
