import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicPlanetsFeatures() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe || !universe.chainNode) return null;

  // ChainNode → renk eşleme
  const chainColors = {
    TUT: "#3498db",
    KUR: "#e67e22",
    BA: "#9b59b6",
    YOL: "#2ecc71",
    BİR: "#ecf0f1",
    KAL: "#f1c40f"
  };

  const rootName = universe.chainNode.name ?? "TUT";
  const planetColor = chainColors[rootName] ?? "#888";

  // Yörünge genişliği (expansion)
  const orbitSize = 150 + (universe.expansion ?? 0) * 80;

  // Parlama (cosmicWave)
  const glow = Math.abs(universe.cosmicWave ?? 0) * 40;

  // Hız (semanticFlow)
  const speedMap = {
    Davranış: 12,
    Eylem: 10,
    Durum: 14,
    Süreç: 8,
    İlişki: 16,
    Konum: 18,
    Zaman: 20,
    Kültür: 22,
    Kozmik: 25
  };

  const orbitSpeed = speedMap[universe.behaviorFlow] ?? 15;

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #000020, #000000)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
        height: "500px",
        position: "relative"
      }}
    >
      <h2>YKOS Gezegenli Evren (Özellikli)</h2>

      {/* Merkez Kozmik Dalga */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "120px",
          height: "120px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00f, #a0f, #fff)",
          boxShadow: `0 0 ${20 + glow}px #a0f`,
          transition: "box-shadow 0.3s ease"
        }}
      ></div>

      {/* Gezegen */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50px",
          height: "50px",
          background: planetColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: `orbit ${orbitSpeed}s linear infinite`,
          boxShadow: `0 0 ${glow}px ${planetColor}`
        }}
      ></div>

      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(${orbitSize}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbitSize}px) rotate(-360deg); }
          }
        `}
      </style>

      {/* Bilgi Paneli */}
      <div style={{ marginTop: "350px" }}>
        <p>🪐 Gezegen Rengi (KÖK): {rootName}</p>
        <p>🌌 Parlama: {glow.toFixed(2)}</p>
        <p>🔄 Yörünge: {orbitSize.toFixed(2)} px</p>
        <p>⚡ Hız: {orbitSpeed}s</p>
      </div>
    </div>
  );
}
