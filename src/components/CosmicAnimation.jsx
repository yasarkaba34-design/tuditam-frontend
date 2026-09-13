import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicAnimation() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #000020, #000000)",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden"
      }}
    >
      <h2>YKOS Kozmik Animasyon</h2>

      {/* Kozmik Dalga */}
      <div
        style={{
          position: "relative",
          height: "200px",
          marginTop: "40px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            height: "2px",
            background: "linear-gradient(90deg, #00f, #a0f, #fff)",
            transform: `translateY(-50%) scaleY(${Math.abs(
              Math.sin(universe?.tick / 10 || 0)
            )})`,
            transition: "transform 0.5s ease-in-out"
          }}
        ></div>
      </div>

      {/* Orbitler */}
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "40px auto",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          animation: "spin 20s linear infinite"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 20px #fff"
          }}
        ></div>
      </div>

      {/* Kozmik Bilgiler */}
      {universe && (
        <div style={{ marginTop: "20px" }}>
          <p>🌌 Kozmik Dalga: {universe.cosmicWave}</p>
          <p>🪐 Genişleme: {universe.expansion}</p>
          <p>🔮 Davranış Akışı: {universe.behaviorFlow}</p>
          <p>💫 Katman: {universe.cosmicLayer.name}</p>
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
