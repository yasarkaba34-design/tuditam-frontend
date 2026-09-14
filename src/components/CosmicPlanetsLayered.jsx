import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicPlanetsLayered() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe || !universe.cosmicLayer) return null;

  const layer = universe.cosmicLayer.name ?? "Origin";

  // Katman → Gezegen Renk
  const layerColors = {
    Origin: "#3498db",
    Creation: "#9b59b6",
    Expansion: "#1abc9c",
    Formation: "#95a5a6",
    Structure: "#e67e22",
    Cosmic: "#ecf0f1"
  };

  const planetColor = layerColors[layer] ?? "#888";

  // Katman → Yüzey Dokusu
  const textures = {
    Origin: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)",
    Creation: "conic-gradient(from 0deg, #fff0, #fff3, #fff0)",
    Expansion: "radial-gradient(circle, #fff2, #fff0)",
    Formation: "repeating-linear-gradient(45deg, #fff2 0px, #fff2 4px, transparent 4px, transparent 8px)",
    Structure: "linear-gradient(135deg, #fff3, #fff0)",
    Cosmic: "radial-gradient(circle, #ffffffaa, #ffffff00)"
  };

  const planetTexture = textures[layer] ?? "none";

  // Katman → Atmosfer
  const atmosphere = {
    Origin: 0.2,
    Creation: 0.25,
    Expansion: 0.3,
    Formation: 0.15,
    Structure: 0.2,
    Cosmic: 0.35
  };

  const atmosphereOpacity = atmosphere[layer] ?? 0.2;

  // Katman → Halka Sistemi
  const ringEnabled = ["Structure", "Cosmic"].includes(layer);

  // Katman → Uydu
  const moonEnabled = layer !== "Origin";

  // Katman → Yörünge Hızı
  const speedMap = {
    Origin: 18,
    Creation: 14,
    Expansion: 10,
    Formation: 16,
    Structure: 12,
    Cosmic: 8
  };

  const orbitSpeed = speedMap[layer] ?? 14;

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
      <h2>YKOS Katmanlı Gezegen Evreni</h2>
      <p>Aktif Katman: {layer}</p>

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

        {/* Halka Sistemi */}
        {ringEnabled && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "160px",
              height: "30px",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: `3px solid ${planetColor}`,
              opacity: 0.6,
              animation: "ringSpin 6s linear infinite"
            }}
          ></div>
        )}

        {/* Uydu */}
        {moonEnabled && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "25px",
              height: "25px",
              background: "#fff",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              animation: "moonOrbit 4s linear infinite"
            }}
          ></div>
        )}
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
            from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }
        `}
      </style>

      {/* Bilgi Paneli */}
      <div style={{ marginTop: "480px" }}>
        <p>🪐 Gezegen Katmanı: {layer}</p>
        <p>🎨 Renk: {planetColor}</p>
        <p>🌌 Parlama: {glow.toFixed(2)}</p>
        <p>🔄 Yörünge: {orbitSize.toFixed(2)} px</p>
        <p>⚡ Hız: {orbitSpeed}s</p>
      </div>
    </div>
  );
}
