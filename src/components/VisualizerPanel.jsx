// src/components/VisualizerPanel.jsx
import React from "react";

export default function VisualizerPanel({ flow, atlas }) {
  const safeFlow = flow || {
    origin: "Anadolu",
    routes: ["Göbeklitepe → Ege", "Ege → Lemnos", "Lemnos → Etrüsk"],
    intensity: 0.85,
    notes: "Kültürel ve fonetik akış, M.Ö. 9600–600 arası kesintisiz bir hat oluşturur."
  };

  const safeAtlas = atlas || {
    coordinates: [],
    message: "Atlas verisi bulunamadı."
  };

  return (
    <div style={{ padding: "20px", color: "#fff", fontFamily: "Segoe UI, sans-serif" }}>
      <div
        style={{
          backgroundColor: "#0b0f17",
          border: "1px solid #7dd3fc",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >
        <h2 style={{ color: "#7dd3fc", marginBottom: "15px" }}>GÖÇ & AKIŞ HARİTASI</h2>

        {/* Başlangıç Noktası */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Başlangıç Noktası:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>{safeFlow.origin}</span>
        </div>

        {/* Göç Hatları */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Göç Hatları:</strong>
          <ul style={{ marginTop: "10px", color: "#e2e8f0" }}>
            {safeFlow.routes.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Akış Yoğunluğu */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Akış Yoğunluğu:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>
            {Math.round((safeFlow.intensity || 0.5) * 100)}%
          </span>
        </div>

        {/* Notlar */}
        <div style={{ marginBottom: "25px" }}>
          <strong style={{ color: "#bae6fd" }}>Notlar:</strong>
          <div style={{ marginTop: "10px", color: "#cbd5e1" }}>
            {safeFlow.notes}
          </div>
        </div>

        {/* Atlas Koordinatları */}
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#7dd3fc", marginBottom: "10px" }}>ATLAS KOORDİNATLARI</h3>
          <div style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
            {safeAtlas.coordinates.length === 0 ? (
              <div>{safeAtlas.message}</div>
            ) : (
              <ul style={{ paddingLeft: "20px" }}>
                {safeAtlas.coordinates.map((coord, i) => (
                  <li key={i}>
                    {coord.id}: ({coord.lat.toFixed(2)}, {coord.lon.toFixed(2)})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
