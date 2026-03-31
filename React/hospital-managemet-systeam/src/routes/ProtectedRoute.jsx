import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  // const { token } = useContext(AuthContext);

  const isLoggedIn = window.localStorage.getItem(`loggedIn`)

  return isLoggedIn === `true` ? <Outlet /> : <Navigate to="/login" replace />;


  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // return <Outlet />;
};

export default ProtectedRoute;
