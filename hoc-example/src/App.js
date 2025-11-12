import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>HOC Example in React</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;

