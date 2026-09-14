import React from "react";

export default function MapComponent({ coordinates, region, label }) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "gold",
        padding: "20px",
        border: "1px solid gold",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>YKOS Atlas Harita Modülü</h3>
      <p><strong>Bölge:</strong> {region || "Tanımsız"}</p>
      <p><strong>Etiket:</strong> {label || "Yok"}</p>
      <p><strong>Koordinatlar:</strong> {coordinates ? coordinates.join(", ") : "Veri yok"}</p>
    </div>
  );
}
