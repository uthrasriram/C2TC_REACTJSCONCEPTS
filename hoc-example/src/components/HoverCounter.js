import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  );
};

export default withCounter(HoverCounter, 2);