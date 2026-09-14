// src/components/AnalyzerPanel.jsx
import React from "react";

export default function AnalyzerPanel({ content }) {
  const analysis = content?.analysis || {
    root: "Veri Yok",
    phonetic: ["ER", "AN", "KÖK"],
    semantic: "Ön-Türkçe kök hece dizgesi ile uyumlu temel anlam katmanı.",
    cultureLinks: ["Göbeklitepe", "Lemnos", "Etrüsk"],
  };

  return (
    <div style={{ padding: "20px", color: "#fff", fontFamily: "Segoe UI, sans-serif" }}>
      <div
        style={{
          backgroundColor: "#0a0f1c",
          border: "1px solid #38bdf8",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >
        <h2 style={{ color: "#38bdf8", marginBottom: "15px" }}>ANALİZ MOTORU</h2>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Kök:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>{analysis.root}</span>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Fonetik Zincir:</strong>
          <div style={{ color: "#e2e8f0", marginTop: "8px" }}>
            {analysis.phonetic.join(" - ")}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Semantik Katman:</strong>
          <div style={{ color: "#cbd5e1", marginTop: "8px" }}>
            {analysis.semantic}
          </div>
        </div>

        <div>
          <strong style={{ color: "#93c5fd" }}>Kültürel Bağlantılar:</strong>
          <ul style={{ marginTop: "10px", color: "#e2e8f0" }}>
            {analysis.cultureLinks.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
