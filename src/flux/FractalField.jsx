import React, { useEffect, useState } from "react";

export default function FractalField({ fluxData }) {
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    if (!fluxData) return;

    // FluxPanel’den gelen verilerden dalga dizisi oluştur
    const waveSet = fluxData.map((item, i) => ({
      id: item.root,
      energy: item.flux_energy,
      phase: item.flux_phase,
      color:
        item.root === "KÖK"
          ? "#FFD700"
          : item.root === "YOL"
          ? "#00E5FF"
          : "#9C27B0",
      offset: i * 0.5
    }));

    setWaves(waveSet);
  }, [fluxData]);

  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid gold",
        padding: "20px",
        borderRadius: "10px",
        color: "gold"
      }}
    >
      <h3>FractalField — Kök Rezonans Dalga Alanı</h3>
      <svg width="800" height="300">
        {waves.map((wave, i) => (
          <path
            key={wave.id}
            d={generateWavePath(wave.energy, wave.offset)}
            stroke={wave.color}
            strokeWidth="2"
            fill="none"
          />
        ))}
      </svg>

      <div style={{ marginTop: "15px" }}>
        {waves.map((wave) => (
          <p key={wave.id}>
            <strong>{wave.id}</strong> — Enerji: {wave.energy}, Faz:{" "}
            {wave.phase}
          </p>
        ))}
      </div>
    </div>
  );
}

// 🔹 Dalga formu üretici fonksiyon
function generateWavePath(energy, offset) {
  const amplitude = 20 + energy * 0.5;
  const frequency = 0.05 + offset * 0.02;
  let path = "M0,150 ";

  for (let x = 0; x <= 800; x += 10) {
    const y = 150 + amplitude * Math.sin(frequency * x + offset);
    path += `L${x},${y} `;
  }

  return path;
}
