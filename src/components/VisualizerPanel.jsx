// src/components/VisualizerPanel.jsx
import React from "react";

export default function VisualizerPanel({ content }) {
  const flow = content?.flow || {
    origin: "Anadolu",
    routes: ["Göbeklitepe → Ege", "Ege → Lemnos", "Lemnos → Etrüsk"],
    intensity: 0.85,
    notes: "Kültürel ve fonetik akış, M.Ö. 9600–600 arası kesintisiz bir hat oluşturur."
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

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Başlangıç Noktası:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>{flow.origin}</span>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Göç Hatları:</strong>
          <ul style={{ marginTop: "10px", color: "#e2e8f0" }}>
            {flow.routes.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#bae6fd" }}>Akış Yoğunluğu:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>{Math.round(flow.intensity * 100)}%</span>
        </div>

        <div>
          <strong style={{ color: "#bae6fd" }}>Notlar:</strong>
          <div style={{ marginTop: "10px", color: "#cbd5e1" }}>{flow.notes}</div>
        </div>
      </div>
    </div>
  );
}
