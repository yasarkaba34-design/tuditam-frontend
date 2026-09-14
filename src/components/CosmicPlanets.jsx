import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicPlanets() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe) return null;

  const glow = Math.abs(universe.cosmicWave ?? 0) * 40;
  const orbit1 = 150 + (universe.expansion ?? 0) * 60;
  const orbit2 = 220 + (universe.expansion ?? 0) * 80;
  const orbit3 = 100 + (universe.expansion ?? 0) * 40;

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
      <h2>YKOS Gezegenli Evren</h2>

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

      {/* Gezegen 1 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "40px",
          height: "40px",
          background: "#3498db",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit1 12s linear infinite"
        }}
      ></div>

      {/* Gezegen 2 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "55px",
          height: "55px",
          background: "#e74c3c",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit2 20s linear infinite"
        }}
      ></div>

      {/* Gezegen 3 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "30px",
          height: "30px",
          background: "#f1c40f",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          animation: "orbit3 8s linear infinite"
        }}
      ></div>

      <style>
        {`
          @keyframes orbit1 {
            from { transform: rotate(0deg) translateX(${orbit1}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbit1}px) rotate(-360deg); }
          }

          @keyframes orbit2 {
            from { transform: rotate(0deg) translateX(${orbit2}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbit2}px) rotate(-360deg); }
          }

          @keyframes orbit3 {
            from { transform: rotate(0deg) translateX(${orbit3}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${orbit3}px) rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
}
