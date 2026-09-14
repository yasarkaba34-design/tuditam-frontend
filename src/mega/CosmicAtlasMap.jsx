// FILE: src/mega/CosmicAtlasMap.jsx
import React from "react";

export default function CosmicAtlasMap({ universe }) {
  const formatVal = (val, fallback = "0.0000") => {
    if (val === null || val === undefined) return fallback;
    if (typeof val === "object") {
      return val.fieldState || val.value || val.flux || JSON.stringify(val);
    }
    return String(val);
  };

  return (
    <div style={{ background: "#080808", padding: "15px", borderRadius: "8px", color: "#00f2fe" }}>
      <p style={{ margin: "6px 0", fontSize: "14px" }}>
        <strong>QuantumFlux:</strong> {formatVal(universe?.quantumFlux, "0.8542")}
      </p>
      <p style={{ margin: "6px 0", fontSize: "14px" }}>
        <strong>OmniField:</strong> {formatVal(universe?.omniField, "durağan")}
      </p>
      <p style={{ margin: "6px 0", fontSize: "14px" }}>
        <strong>CosmicEntropy:</strong> {formatVal(universe?.cosmicEntropy, "0.5602")}
      </p>
    </div>
  );
}
