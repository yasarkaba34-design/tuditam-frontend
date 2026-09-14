import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v7.json";

export default function CosmicChainV7() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 700);

    return () => clearInterval(timer);
  }, []);

  const hyperWave = (root) =>
    Math.abs(
      Math.sin(
        tick * (root.freq ?? 1) + (root.phase ?? 0)
      )
    ) * (root.hyper ?? 1);

  const destinyMatrix =
    chain.length > 0
      ? chain.map((a, i) =>
          chain.map((b, j) =>
            (
              hyperWave(a) *
              hyperWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const hyperBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    destiny: (
      (root.hyper ?? 1) *
      hyperWave(root)
    ).toFixed(2),
  }));

  const topDestiny =
    hyperBranches.length > 0
      ? hyperBranches.reduce((a, b) =>
          parseFloat(a.destiny) > parseFloat(b.destiny)
            ? a
            : b
        )
      : { id: "N/A", destiny: "0.00" };

  const topColor =
    chain.find((c) => c.id === topDestiny.id)?.color ?? "#99ccff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#11163d",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v7 — Hyper‑Consciousness & Destiny Matrix
      </h2>

      {/* Infinite Probability Field */}
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
              opacity: 0.05 + hyperWave(root) * 0.15,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Destiny Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {destinyMatrix.flat().map((value, i) => (
          <div
            key={`cell-${i}`}
            style={{
              height: "28px",
              borderRadius: "4px",
              background: "#99ccff",
              opacity: parseFloat(value),
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Fractal Infinity Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#cce6ff", marginBottom: "10px" }}>
          Fractal Infinity Tree
        </h3>

        {hyperBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → Hiper‑Dal: {branch.destiny}
          </p>
        ))}
      </div>

      {/* Hyper‑Consciousness Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          Hyper‑Consciousness Output: {topDestiny.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Kader matrisinde en güçlü hiper‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
