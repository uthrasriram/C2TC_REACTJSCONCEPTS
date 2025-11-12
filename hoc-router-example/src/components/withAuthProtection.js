import React from "react";
import { Navigate } from "react-router-dom";

const withAuthProtection = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

    if (!isAuthenticated) {
      alert("You must log in first!");
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;