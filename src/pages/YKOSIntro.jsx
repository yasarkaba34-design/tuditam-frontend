import React from "react";
import { useNavigate } from "react-router-dom";

export default function YKOSIntro() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle at center, #111 0%, #000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          letterSpacing: "4px",
          marginBottom: "20px",
          textShadow: "0 0 20px #ffcc00"
        }}
      >
        YKOS
      </div>

      {/* Sıfır Noktası Animasyonu */}
      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "2px solid #ffcc00",
          boxShadow: "0 0 40px #ffcc00",
          animation: "pulse 2s infinite"
        }}
      />

      {/* Flux Bar */}
      <div
        style={{
          width: "240px",
          height: "6px",
          background: "#333",
          borderRadius: "4px",
          marginTop: "30px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: "60%",
            height: "100%",
            background: "linear-gradient(90deg, #ffcc00, #ffaa00)",
            animation: "fluxMove 3s infinite"
          }}
        />
      </div>

      {/* Devam Et Butonu */}
      <button
        onClick={() => navigate("/dashboard")}
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
        Devam Et
      </button>

      {/* Animasyonlar */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes fluxMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
}
