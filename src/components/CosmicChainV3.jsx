import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v3.json";

export default function CosmicChainV3() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 900);

    return () => clearInterval(timer);
  }, []);

  const variance = Math.abs(Math.sin(tick * 0.3)) * 0.4;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#0c1028",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v3 — Spiral & Grid Rezonans
      </h2>

      {/* Spiral Layer */}
      <div
        style={{
          position: "relative",
          height: "200px",
          marginBottom: "30px",
        }}
      >
        {chain.map((root, i) => {
          const angle =
            (tick * (root.freq ?? 1) * 8 + i * 60) * (Math.PI / 180);
          const radius = 60 + Math.sin(tick * 0.2 + i) * 20;

          return (
            <div
              key={root.id ?? `root-${i}`}
              style={{
                position: "absolute",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: root.color ?? "#888",
                left: `${100 + Math.cos(angle) * radius}px`,
                top: `${80 + Math.sin(angle) * radius}px`,
                transition: "left 0.3s, top 0.3s",
              }}
            />
          );
        })}
      </div>

      {/* Grid Layer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {chain.map((root, i) =>
          Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={`${root.id ?? `root-${i}`}-${idx}`}
              style={{
                height: "28px",
                borderRadius: "4px",
                background: root.color ?? "#555",
                opacity:
                  0.15 +
                  (root.energy ?? 0.5) * 0.4 +
                  Math.sin((tick + idx) * 0.2) * 0.1,
                transition: "opacity 0.3s",
              }}
            />
          ))
        )}
      </div>

      {/* AI Variance Prediction */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#66aaff" }}>AI Varyans Tahmini</h3>
        <p style={{ opacity: 0.85 }}>
          Kozmik enerji dalgalanması: {(variance * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
