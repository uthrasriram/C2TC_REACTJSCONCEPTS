import React, { useState, useEffect, useRef, useMemo } from "react";

function UserInfo() {
  const [userName, setUserName] = useState("Thamizh");
  const [age, setAge] = useState(22);
  const inputRef = useRef();

  // Auto-focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Derived value
  const nextYearAge = useMemo(() => {
    console.log("Calculating next year's age...");
    return age + 1;
  }, [age]);

  // Side effect
  useEffect(() => {
    document.title = `User: ${userName}`;
  }, [userName]);

  return (
    <div style={cardStyle}>
      <h3>👤 User Info</h3>
      <input
        ref={inputRef}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />
      <p>Age: {age}</p>
      <p>Next Year Age (useMemo): {nextYearAge}</p>

      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

const cardStyle = {
  border: "2px solid gray",
  borderRadius: "12px",
  padding: "20px",
  width: "250px",
};

export default UserInfo;