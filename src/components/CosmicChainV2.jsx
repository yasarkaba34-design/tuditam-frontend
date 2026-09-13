import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v2.json";

export default function CosmicChainV2() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  const prediction = chain.length > 0
    ? chain[(tick + 1) % chain.length]
    : null;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#0b0f26",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v2 — Paralel Akış
      </h2>

      {/* Parallel Flow */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {chain.map((root, i) => (
          <div
            key={root.id}
            style={{
              flex: 1,
              height: "40px",
              background: root.color,
              opacity: 0.45 + Math.sin((tick + i) * 0.7) * 0.35,
              transition: "opacity 0.4s",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>

      {/* Superposition Layer */}
      <div
        style={{
          position: "relative",
          height: "120px",
          marginBottom: "25px",
          background: "#111",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {chain.map((root, i) => (
          <div
            key={root.id}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: root.color,
              opacity: 0.12 + Math.cos((tick + i) * 0.5) * 0.08,
              transition: "opacity 0.4s",
            }}
          />
        ))}
      </div>

      {/* Timeline */}
      <div
        style={{
          height: "10px",
          background: "#333",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width:
              chain.length > 0
                ? `${((tick % chain.length) / chain.length) * 100}%`
                : "0%",
            height: "10px",
            background:
              chain.length > 0
                ? chain[tick % chain.length].color
                : "#555",
            transition: "width 0.5s",
          }}
        />
      </div>

      {/* AI Prediction */}
      {prediction && (
        <div
          style={{
            padding: "15px",
            background: "#141a33",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: prediction.color }}>
            AI Tahmini: {prediction.id}
          </h3>
          <p style={{ opacity: 0.8 }}>
            Enerji yoğunluğu: {(prediction.energy * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}
