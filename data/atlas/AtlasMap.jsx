import React, { useState } from "react";

export default function AtlasMap({ data }) {
  const [hover, setHover] = useState(null);

  // Kültürel zincire göre frekans rengi
  const frequencyColor = (chain) => {
    switch (chain) {
      case "TUT": return "#FFB800"; // altın
      case "KUR": return "#FF8A00"; // turuncu
      case "BA":  return "#FF3B3B"; // kırmızı
      case "YOL": return "#3B8BFF"; // mavi
      case "BİR": return "#A03BFF"; // mor
      case "KAL": return "#3BFF6E"; // yeşil
      default:    return "#FFB800"; // fallback altın
    }
  };

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(1px, -1px); }
            50% { transform: translate(-1px, 1px); }
            75% { transform: translate(1px, 1px); }
            100% { transform: translate(0px, 0px); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {data.map((item) =>
        item.coords ? (
          <div
            key={item.id}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              position: "absolute",
              left: item.coords.x,
              top: item.coords.y,

              // Frekans rengi (kültürel zincir)
              background: hover === item.id
                ? frequencyColor(item.chain)
                : "rgba(255,184,0,0.15)",

              border: `1px solid ${frequencyColor(item.chain)}`,
              padding: "6px 10px",
              borderRadius: "12px",
              color: "gold",
              fontSize: "12px",

              transition: "box-shadow 0.3s ease, background 0.3s ease",

              // Glow
              boxShadow:
                hover === item.id
                  ? `0 0 12px ${frequencyColor(item.chain)}`
                  : "none",

              // Titreşim + Pulse
              animation:
                hover === item.id
                  ? "vibrate 0.15s infinite, pulse 1.2s infinite"
                  : "none"
            }}
          >
            {item.label}
          </div>
        ) : null
      )}
    </div>
  );
}
