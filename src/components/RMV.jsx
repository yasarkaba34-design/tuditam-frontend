// src/components/RMV.jsx
import React, { useState, useEffect } from "react";

export default function RMV({ input }) {
  const [vectorData, setVectorData] = useState(null);

  useEffect(() => {
    if (!input) return;

    // Basit örnek veri üretimi (ileride motor bağlanacak)
    const mockResult = {
      root: input,
      resonance: Math.random().toFixed(3),
      morphology: ["fonetik", "semantik", "kültürel"],
      vector: { x: Math.random(), y: Math.random(), z: Math.random() },
      timestamp: new Date().toLocaleString("tr-TR")
    };

    setVectorData(mockResult);
  }, [input]);

  if (!vectorData) {
    return (
      <div style={{ color: "#94a3b8", fontFamily: "Segoe UI, sans-serif" }}>
        RMV motoru başlatılıyor...
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        border: "1px solid #38bdf8",
        borderRadius: "12px",
        padding: "20px",
        color: "#e2e8f0",
        fontFamily: "Segoe UI, sans-serif",
        boxShadow: "0 10px 25px rgba(0,0,0,0.6)"
      }}
    >
      <h2 style={{ color: "#38bdf8", marginBottom: "15px" }}>
        REZONANS–MORFOLOJİ–VEKTÖR (RMV)
      </h2>

      <div><strong>Kök:</strong> {vectorData.root}</div>
      <div><strong>Rezonans:</strong> {vectorData.resonance}</div>
      <div style={{ marginTop: "10px" }}>
        <strong>Morfoloji Zinciri:</strong>
        <ul>
          {vectorData.morphology.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "10px" }}>
        <strong>Vektör:</strong>{" "}
        ({vectorData.vector.x.toFixed(2)}, {vectorData.vector.y.toFixed(2)},{" "}
        {vectorData.vector.z.toFixed(2)})
      </div>
      <div style={{ marginTop: "10px" }}>
        <strong>Zaman Damgası:</strong> {vectorData.timestamp}
      </div>
    </div>
  );
}
