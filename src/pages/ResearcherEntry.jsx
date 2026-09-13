import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResearcherEntry() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [dataset, setDataset] = useState("");

  const startSession = () => {
    if (!name || !field || !dataset) return;
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(180deg, #000 0%, #111 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ marginBottom: "10px", textShadow: "0 0 20px #ffcc00" }}>
        YKOS Araştırmacı Girişi
      </h1>

      {/* Araştırmacı Adı */}
      <input
        type="text"
        placeholder="Araştırmacı Adı"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          marginTop: "20px",
          borderRadius: "6px",
          border: "none"
        }}
      />

      {/* Çalışma Alanı */}
      <select
        value={field}
        onChange={(e) => setField(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          marginTop: "20px",
          borderRadius: "6px",
          border: "none"
        }}
      >
        <option value="">Çalışma Alanı Seç</option>
        <option value="damga">Damga Analizi</option>
        <option value="kok">Kök Hece Analizi</option>
        <option value="kultur">Kültürel Eksen</option>
        <option value="dil">Dil Tipolojisi</option>
        <option value="youtube">YouTube Semantik</option>
      </select>

      {/* Veri Seti */}
      <select
        value={dataset}
        onChange={(e) => setDataset(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          marginTop: "20px",
          borderRadius: "6px",
          border: "none"
        }}
      >
        <option value="">Veri Seti Seç</option>
        <option value="matrix">MatrixData</option>
        <option value="atlas">DamgaAtlas</option>
        <option value="cosmic">CosmicChain</option>
        <option value="youtube">YouTubeIndex</option>
      </select>

      {/* Flux Bar */}
      <div
        style={{
          width: "260px",
          height: "6px",
          background: "#333",
          borderRadius: "4px",
          marginTop: "30px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: "70%",
            height: "100%",
            background: "linear-gradient(90deg, #ffcc00, #ffaa00)",
            animation: "fluxMove 3s infinite"
          }}
        />
      </div>

      {/* Oturum Başlat */}
      <button
        onClick={startSession}
        style={{
          marginTop: "40px",
          padding: "12px 28px",
          fontSize: "18px",
          background: "#ffcc00",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          color: "#000",
          fontWeight: "bold",
          boxShadow: "0 0 20px #ffcc00"
        }}
      >
        Araştırma Oturumunu Başlat
      </button>

      <style>
        {`
          @keyframes fluxMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}
