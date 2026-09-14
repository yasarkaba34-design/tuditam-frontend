import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v9.json";

export default function CosmicChainV9() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 600);

    return () => clearInterval(timer);
  }, []);

  const omniWave = (root) =>
    Math.abs(
      Math.sin(
        tick * (root.freq ?? 1) + (root.phase ?? 0)
      )
    ) * (root.omni ?? 1);

  const universeMatrix =
    chain.length > 0
      ? chain.map((a, i) =>
          chain.map((b, j) =>
            (
              omniWave(a) *
              omniWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const omniBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    universe: (
      (root.omni ?? 1) *
      omniWave(root)
    ).toFixed(2),
  }));

  const topOmni =
    omniBranches.length > 0
      ? omniBranches.reduce((a, b) =>
          parseFloat(a.universe) > parseFloat(b.universe)
            ? a
            : b
        )
      : { id: "N/A", universe: "0.00" };

  const topColor =
    chain.find((c) => c.id === topOmni.id)?.color ?? "#e6f3ff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#162050",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v9 — Omni‑Consciousness & Universe‑Destiny Matrix
      </h2>

      {/* Omni Probability Ocean */}
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
              opacity: 0.05 + omniWave(root) * 0.20,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Universe Destiny Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {universeMatrix.flat().map((value, i) => (
          <div
            key={`cell-${i}`}
            style={{
              height: "28px",
              borderRadius: "4px",
              background: "#e6f3ff",
              opacity: parseFloat(value),
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Omni-Fractal Infinity Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#f2f8ff", marginBottom: "10px" }}>
          Omni‑Fractal Infinity Tree
        </h3>

        {omniBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → Omni‑Dal: {branch.universe}
          </p>
        ))}
      </div>

      {/* Omni‑Consciousness Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          Omni‑Consciousness Output: {topOmni.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Universe‑Flow içinde en güçlü omni‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
