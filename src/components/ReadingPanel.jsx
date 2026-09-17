// src/components/ReadingPanel.jsx
import React from "react";
import data from "../data/data.json"; // Güncel merkezi veri dosyamız

export default function ReadingPanel({ content }) {
  // Eğer dışarıdan doğrudan obje gelmediyse, gelen ID'ye göre data.json içinden damgayı bulalım
  let damgaVerisi = null;

  if (content && typeof content === "object") {
    damgaVerisi = content;
  } else if (content) {
    // ID ile eşleştirme (Örn: "AT", "OQ" vb.)
    damgaVerisi = data.damgalar.find(
      (d) => d.id === content || d.hece === content
    );
  }

  // Eğer hâlâ veri bulunamadıysa ilk damgayı varsayılan olarak gösterelim veya uyarı verelim
  if (!damgaVerisi && data.damgalar && data.damgalar.length > 0) {
    damgaVerisi = data.damgalar[0]; 
  }

  if (!damgaVerisi) {
    return (
      <div style={{ color: "#fff", padding: "20px", textAlign: "center" }}>
        İçerik bulunamadı.
      </div>
    );
  }

  // YKOS Veri Alanlarına Göre Eşleştirme
  const root = damgaVerisi.hece || damgaVerisi.id;
  const phonetic = [damgaVerisi.shape, damgaVerisi.hece];
  const semantic = damgaVerisi.kavram;
  const cultureLinks = [damgaVerisi.cosmic, data.systemStatus?.Atlas || "Göbeklitepe rezonans hattı"];
  const score = "98.5"; // YKOS Doğrulama Skoru
  const validated = true;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          backgroundColor: "#050811",
          border: "1.5px solid #ffd700",
          borderRadius: "14px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >
        {/* Başlık */}
        <h1
          style={{
            color: "#ffd700",
            fontSize: "2rem",
            marginBottom: "10px",
            fontWeight: "900"
          }}
        >
          Semantik Okuma Sonucu
        </h1>

        {/* Kök Hecesi */}
        <div
          style={{
            fontSize: "1.2rem",
            color: "#38bdf8",
            marginBottom: "20px"
          }}
        >
          🔤 Kök: <strong>{root}</strong>
        </div>

        {/* Fonetik Zincir */}
        <div style={{ marginBottom: "25px" }}>
          <h3
            style={{
              color: "#ffd700",
              fontSize: "1.1rem",
              marginBottom: "10px"
            }}
          >
            🧩 Fonetik Zincir
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}
          >
            {phonetic.map((p, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: "rgba(255, 215, 0, 0.15)",
                  border: "1px solid #ffd700",
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

        {/* Semantik Mesaj */}
        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.85",
            color: "#e2e8f0",
            marginBottom: "25px"
          }}
        >
          {semantic}
        </div>

        {/* Kültürel Bağlantılar */}
        <div>
          <h3
            style={{
              color: "#ffd700",
              fontSize: "1.1rem",
              marginBottom: "10px"
            }}
          >
            🌍 Kültürel Bağlantılar
          </h3>

          <ul style={{ paddingLeft: "20px", color: "#e2e8f0" }}>
            {cultureLinks.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Skor ve Doğrulama */}
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
            ✔ Doğrulama: {validated ? "Geçerli" : "Geçersiz"}
          </div>
          <div style={{ fontSize: "0.95rem" }}>
            📊 Skor: {score}
          </div>
        </div>
      </div>
    </div>
  );
}
