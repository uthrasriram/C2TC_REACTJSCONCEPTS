import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>🏠 Home Page</h1>
      <p>Welcome! This page is public.</p>
      <div>
        <Link to="/login">Go to Login</Link> |{" "}
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;