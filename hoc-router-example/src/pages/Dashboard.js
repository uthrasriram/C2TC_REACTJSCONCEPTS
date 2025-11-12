import React from "react";
import withAuthProtection from "../components/withAuthProtection";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>📊 Dashboard</h1>
      <p>This is a protected page. You can view it only if logged in.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default withAuthProtection(Dashboard);