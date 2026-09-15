// src/components/AnalyzerPanel.jsx
import React from "react";

export default function AnalyzerPanel({ content }) {
  // normalizeResult.analysis doğrudan geliyor
  const analysis = content || {
    root: "Veri Yok",
    phonetic: [],
    semantic: "Semantik veri bulunamadı.",
    cultureLinks: [],
    score: null,
    validated: false
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

        {/* Kök */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Kök:</strong>{" "}
          <span style={{ color: "#e2e8f0" }}>{analysis.root}</span>
        </div>

        {/* Fonetik Zincir */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Fonetik Zincir:</strong>
          <div style={{ color: "#e2e8f0", marginTop: "8px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {analysis.phonetic.map((p, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid #38bdf8",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "0.9rem"
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Semantik Katman */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Semantik Katman:</strong>
          <div style={{ color: "#cbd5e1", marginTop: "8px" }}>
            {analysis.semantic}
          </div>
        </div>

        {/* Kültürel Bağlantılar */}
        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#93c5fd" }}>Kültürel Bağlantılar:</strong>
          <ul style={{ marginTop: "10px", color: "#e2e8f0" }}>
            {analysis.cultureLinks.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Skor & Doğrulama */}
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            backgroundColor: "rgba(56, 189, 248, 0.1)",
            borderRadius: "10px",
            border: "1px solid #38bdf8"
          }}
        >
          <div style={{ fontSize: "0.95rem", marginBottom: "6px" }}>
            ✔ Doğrulama: {analysis.validated ? "Geçerli" : "Geçersiz"}
          </div>
          <div style={{ fontSize: "0.95rem" }}>
            📊 Skor: {analysis.score ?? "—"}
          </div>
        </div>

      </div>
    </div>
  );
}
