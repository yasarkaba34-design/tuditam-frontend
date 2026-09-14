import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicPlanetsAtlas({ atlasRegion }) {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe || !atlasRegion) return null;

  // Atlas → Kök eşleme
  const atlasToRoot = {
    Anadolu: "TUT",
    "Orta Asya": "YOL",
    Mezopotamya: "KUR",
    Balkanlar: "KAL",
    Orhun: "BA",
    Hitit: "BİR"
  };

  const rootName = atlasToRoot[atlasRegion] ?? "TUT";

  // Kök → Renk
  const rootColors = {
    TUT: "#3498db",
    KUR: "#e67e22",
    BA: "#9b59b6",
    YOL: "#2ecc71",
    BİR: "#ecf0f1",
    KAL: "#f1c40f"
  };

  const planetColor = rootColors[rootName] ?? "#888";

  // Kök → Yüzey dokusu
  const rootTextures = {
    TUT: "radial-gradient(circle, #ffffff33, transparent)",
    KUR: "repeating-linear-gradient(45deg, #fff3 0px, #fff3 4px, transparent 4px, transparent 8px)",
    BA: "conic-gradient(from 0deg, #fff0, #fff4, #fff0)",
    YOL: "linear-gradient(90deg, #ffffff22, transparent)",
    BİR: "radial-gradient(circle, #ffffffaa, #ffffff00)",
    KAL: "radial-gradient(circle at 50% 50%, #fff3, transparent)"
  };

  const planetTexture = rootTextures[rootName] ?? "none";

  // Kök → Atmosfer yoğunluğu
  const rootAtmosphere = {
    TUT: 0.2,
    KUR: 0.25,
    BA: 0.35,
    YOL: 0.15,
    BİR: 0.4,
    KAL: 0.22
  };

  const atmosphereOpacity = rootAtmosphere[rootName] ?? 0.2;

  // Kök → Yörünge hızı
  const rootSpeed = {
    TUT: 18,
    KUR: 14,
    BA: 10,
    YOL: 8,
    BİR: 12,
    KAL: 20
  };

  const orbitSpeed = rootSpeed[rootName] ?? 16;

  // Evren genişlemesi → yörünge büyüklüğü
  const orbitSize = 150 + (universe.expansion ?? 0) * 90;

  // Kozmik dalga → parlama
  const glow = Math.abs(universe.cosmicWave ?? 0) * 40;

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #000020, #000000)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
        height: "650px",
        position: "relative"
      }}
    >
      <h2>YKOS Atlas Gezegen Evreni</h2>
      <p>Atlas Bölgesi: {atlasRegion}</p>
      <p>Kök: {rootName}</p>

      {/* Merkez Kozmik Dalga */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "150px",
          height: "150px",
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
          width: "90px",
          height: "90px",
          background: planetColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: `orbit ${orbitSpeed}s linear infinite`,
          boxShadow: `0 0 ${glow}px ${planetColor}`,
          backgroundImage: planetTexture
        }}
      >
        {/* Atmosfer */}
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "-15px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: planetColor,
            opacity: atmosphereOpacity,
            filter: "blur(18px)"
          }}
        ></div>

        {/* Kök sembolü */}
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: "28px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000"
          }}
        >
          {rootName}
        </div>
      </div>

      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg) translateX(${orbitSize}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbitSize}px) rotate(-360deg); }
          }
        `}
      </style>

      {/* Bilgi Paneli */}
      <div style={{ marginTop: "480px" }}>
        <p>🗺 Atlas Bölgesi: {atlasRegion}</p>
        <p>🪐 Gezegen Kökü: {rootName}</p>
        <p>🎨 Renk: {planetColor}</p>
        <p>🌌 Parlama: {glow.toFixed(2)}</p>
        <p>🔄 Yörünge: {orbitSize.toFixed(2)} px</p>
        <p>⚡ Hız: {orbitSpeed}s</p>
      </div>
    </div>
  );
}
