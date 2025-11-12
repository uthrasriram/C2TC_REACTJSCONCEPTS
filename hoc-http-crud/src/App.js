import React from "react";
import UserManager from "./components/UserManager";

function App() {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#1e3a8a",
        fontSize: "2rem",
      }}>
        🌐 HOC Example – CRUD with Beautiful Design
      </h1>
      <UserManager />
    </div>
  );
}

export default App;