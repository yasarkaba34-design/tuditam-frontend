import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v11.json";

export default function CosmicChainV11() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const infinityWave = (root) =>
    Math.abs(
      Math.sin(
        tick * (root.freq ?? 1) + (root.phase ?? 0)
      )
    ) * (root.infinity ?? 1);

  const infinityMatrix =
    chain.length > 0
      ? chain.map((a, i) =>
          chain.map((b, j) =>
            (
              infinityWave(a) *
              infinityWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const infinityBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    totality: (
      (root.infinity ?? 1) *
      infinityWave(root)
    ).toFixed(2),
  }));

  const topInfinity =
    infinityBranches.length > 0
      ? infinityBranches.reduce((a, b) =>
          parseFloat(a.totality) > parseFloat(b.totality)
            ? a
            : b
        )
      : { id: "N/A", totality: "0.00" };

  const topColor =
    chain.find((c) => c.id === topInfinity.id)?.color ?? "#ffffff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#1d2c70",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v11 — ∞‑Consciousness & Infinity‑Cosmos Matrix
      </h2>

      {/* Infinity Probability Cosmos */}
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
              opacity: 0.05 + infinityWave(root) * 0.25,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Infinity Cosmos Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {infinityMatrix.flat().map((value, i) => (
          <div
            key={`cell-${i}`}
            style={{
              height: "28px",
              borderRadius: "4px",
              background: "#ffffff",
              opacity: parseFloat(value),
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* ∞‑Fractal Universe Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
          ∞‑Fractal Universe Tree
        </h3>

        {infinityBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → ∞‑Dal: {branch.totality}
          </p>
        ))}
      </div>

      {/* ∞‑Consciousness Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          ∞‑Consciousness Output: {topInfinity.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Infinity‑Cosmos içinde en güçlü ∞‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
