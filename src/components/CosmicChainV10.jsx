import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v10.json";

export default function CosmicChainV10() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 550);

    return () => clearInterval(timer);
  }, []);

  const allWave = (root) =>
    Math.abs(
      Math.sin(
        tick * (root.freq ?? 1) + (root.phase ?? 0)
      )
    ) * (root.all ?? 1);

  const cosmosMatrix =
    chain.length > 0
      ? chain.map((a, i) =>
          chain.map((b, j) =>
            (
              allWave(a) *
              allWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const allBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    cosmos: (
      (root.all ?? 1) *
      allWave(root)
    ).toFixed(2),
  }));

  const topAll =
    allBranches.length > 0
      ? allBranches.reduce((a, b) =>
          parseFloat(a.cosmos) > parseFloat(b.cosmos)
            ? a
            : b
        )
      : { id: "N/A", cosmos: "0.00" };

  const topColor =
    chain.find((c) => c.id === topAll.id)?.color ?? "#f2f8ff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#1a2660",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v10 — ALL‑Consciousness & Cosmos‑Fate Matrix
      </h2>

      {/* ALL Probability Universe */}
      <div
        style={{
          position: "relative",
          height: "160px",
          background: "#0d0d0d",
          borderRadius: "12px",
          marginBottom: "30px",
          overflow: "hidden",
        }}
      >
        {chain.map((root, i) => (
          <div
            key={root.id ?? `layer-${i}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: root.color ?? "#444",
              opacity: 0.05 + allWave(root) * 0.22,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Cosmos Fate Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {cosmosMatrix.flat().map((value, i) => (
          <div
            key={`cell-${i}`}
            style={{
              height: "28px",
              borderRadius: "4px",
              background: "#f2f8ff",
              opacity: parseFloat(value),
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* ALL-Fractal Infinity Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
          ALL‑Fractal Infinity Tree
        </h3>

        {allBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → ALL‑Dal: {branch.cosmos}
          </p>
        ))}
      </div>

      {/* ALL‑Consciousness Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          ALL‑Consciousness Output: {topAll.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Cosmos‑Fate‑Time içinde en güçlü ALL‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
