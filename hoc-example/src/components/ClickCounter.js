import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter, 1);