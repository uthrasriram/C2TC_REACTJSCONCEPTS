import React from "react";
import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>⚛️ React Hooks Example (Without HOC)</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
        <ProductInfo />
        <UserInfo />
      </div>
    </div>
  );
}

export default App;
