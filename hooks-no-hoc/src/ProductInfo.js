import React, { useState, useEffect, useRef, useMemo } from "react";

function ProductInfo() {
  const [productName, setProductName] = useState("Laptop");
  const [price, setPrice] = useState(50000);
  const inputRef = useRef();

  // Auto-focus using useRef
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Derived value using useMemo
  const discountedPrice = useMemo(() => {
    console.log("Calculating discounted price...");
    return price - price * 0.1;
  }, [price]);

  // Side effect
  useEffect(() => {
    document.title = `Product: ${productName}`;
  }, [productName]);

  return (
    <div style={cardStyle}>
      <h3>🛒 Product Info</h3>
      <input
        ref={inputRef}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />
      <p>Price: ₹{price}</p>
      <p>Discounted Price (useMemo): ₹{discountedPrice}</p>

      <button onClick={() => setPrice(price + 1000)}>Increase Price</button>
    </div>
  );
}

const cardStyle = {
  border: "2px solid gray",
  borderRadius: "12px",
  padding: "20px",
  width: "250px",
};

export default ProductInfo;