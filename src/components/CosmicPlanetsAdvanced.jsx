import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicPlanetsAdvanced() {
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
        height: "600px",
        position: "relative"
      }}
    >
      <h2>YKOS Gelişmiş Gezegenli Evren</h2>

      {/* Merkez Kozmik Dalga */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "140px",
          height: "140px",
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
          width: "70px",
          height: "70px",
          background: planetColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: `orbit ${orbitSpeed}s linear infinite`,
          boxShadow: `0 0 ${glow}px ${planetColor}`,
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)"
        }}
      >
        {/* Kök sembolü */}
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "22px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#000"
          }}
        >
          {rootName}
        </div>

        {/* Atmosfer */}
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: planetColor,
            opacity: 0.2,
            filter: "blur(12px)"
          }}
        ></div>

        {/* Halka sistemi */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "120px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: `2px solid ${planetColor}`,
            opacity: 0.6,
            animation: "ringSpin 6s linear infinite"
          }}
        ></div>

        {/* Uydu */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "20px",
            height: "20px",
            background: "#fff",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: "moonOrbit 4s linear infinite"
          }}
        ></div>
      </div>

      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(${orbitSize}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbitSize}px) rotate(-360deg); }
          }

          @keyframes ringSpin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes moonOrbit {
            from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          }
        `}
      </style>

      {/* Bilgi Paneli */}
      <div style={{ marginTop: "450px" }}>
        <p>🪐 Gezegen: {rootName}</p>
        <p>🎨 Renk: {planetColor}</p>
        <p>🌌 Parlama: {glow.toFixed(2)}</p>
        <p>🔄 Yörünge: {orbitSize.toFixed(2)} px</p>
        <p>⚡ Hız: {orbitSpeed}s</p>
      </div>
    </div>
  );
}
