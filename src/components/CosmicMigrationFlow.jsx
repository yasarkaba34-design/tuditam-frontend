import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicMigrationFlow() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!universe) return null;

  const glow = Math.abs(universe.cosmicWave ?? 0) * 30;

  const atlasPositions = {
    "Buzul Çağı": { top: "10%", left: "50%" },
    Anadolu: { top: "40%", left: "25%" },
    Güneydoğu: { top: "55%", left: "35%" },
    "Uzak Asya": { top: "45%", left: "85%" },
    Afrika: { top: "75%", left: "40%" },
    Türkiye: { top: "50%", left: "50%" },
    "Güney Avrupa": { top: "30%", left: "45%" },
    Kafkaslar: { top: "35%", left: "60%" }
  };

  const migrationRoute = [
    "Buzul Çağı",
    "Anadolu",
    "Güneydoğu",
    "Uzak Asya",
    "Afrika",
    "Türkiye",
    "Güney Avrupa",
    "Kafkaslar"
  ];

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {/* Noktalar */}
      {migrationRoute.map((region) => {
        const pos = atlasPositions[region] ?? { top: "50%", left: "50%" };

        return (
          <div
            key={region}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
              textAlign: "center"
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: `0 0 ${glow}px #fff`
              }}
            ></div>
            <p style={{ marginTop: "6px", fontSize: "14px" }}>{region}</p>
          </div>
        );
      })}

      {/* Çizgiler */}
      {migrationRoute.map((region, i) => {
        if (i === migrationRoute.length - 1) return null;

        const start = atlasPositions[migrationRoute[i]];
        const end = atlasPositions[migrationRoute[i + 1]];

        if (!start || !end) return null;

        return (
          <svg
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <line
              x1={start.left}
              y1={start.top}
              x2={end.left}
              y2={end.top}
              stroke="#00aaff"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 ${glow}px #00aaff)`,
                animation: "flowPulse 2s infinite"
              }}
            />
          </svg>
        );
      })}

      <style>
        {`
          @keyframes flowPulse {
            0% { stroke-opacity: 0.4; }
            50% { stroke-opacity: 1; }
            100% { stroke-opacity: 0.4; }
          }
        `}
      </style>
    </div>
  );
}
