import React from "react";

function Weather({ data }) {
  if (data.cod !== 200) {
    return <p style={{ color: "red" }}>City not found!</p>;
  }

  return (
    <div
      style={{
        border: "2px solid #3498db",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "12px",
        width: "300px",
        backgroundColor: "#ecf0f1",
      }}
    >
      <h2>{data.name}, {data.sys.country}</h2>
      <p><strong>🌡 Temperature:</strong> {data.main.temp} °C</p>
      <p><strong>🌥 Condition:</strong> {data.weather[0].description}</p>
      <p><strong>💨 Wind Speed:</strong> {data.wind.speed} m/s</p>
      <p><strong>💧 Humidity:</strong> {data.main.humidity}%</p>
    </div>
  );
}

export default Weather;