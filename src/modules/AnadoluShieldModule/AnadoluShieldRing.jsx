import React from "react";

export default function AnadoluShieldRing() {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "8px solid #0099ff",
        animation: "rotateShield 4s linear infinite",
        margin: "20px auto"
      }}
    ></div>
  );
}