// src/components/YKOSLogo.jsx
import React from "react";

export default function YKOSLogo({ size = 120, className = "" }) {
  return (
    <div 
      className={`ykos-logo-wrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(0 0 18px rgba(245, 158, 11, 0.45))",
        transition: "transform 0.3s ease, filter 0.3s ease",
        cursor: "pointer"
      }}
    >
      <img
        src="/assets/ykos-eagle-logo.png"
        alt="YKOS Siber Kartal Amblemi"
        style={{
          width: `${size}px`,
          height: "auto",
          objectFit: "contain",
          display: "block"
        }}
      />
    </div>
  );
}
