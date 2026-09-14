import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v8.json";

export default function CosmicChainV8() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 650);

    return () => clearInterval(timer);
  }, []);

  const ultraWave = (root) =>
    Math.abs(
      Math.sin(
        tick * (root.freq ?? 1) + (root.phase ?? 0)
      )
    ) * (root.ultra ?? 1);

  const fateMatrix =
    chain.length > 0
      ? chain.map((a, i) =>
          chain.map((b, j) =>
            (
              ultraWave(a) *
              ultraWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const ultraBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    fate: (
      (root.ultra ?? 1) *
      ultraWave(root)
    ).toFixed(2),
  }));

  const topFate =
    ultraBranches.length > 0
      ? ultraBranches.reduce((a, b) =>
          parseFloat(a.fate) > parseFloat(b.fate)
            ? a
            : b
        )
      : { id: "N/A", fate: "0.00" };

  const topColor =
    chain.find((c) => c.id === topFate.id)?.color ?? "#cce6ff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#131a45",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v8 — Ultra‑Consciousness & Fate‑Flow
      </h2>

      {/* Ultra Probability Field */}
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
              opacity: 0.05 + ultraWave(root) * 0.18,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Fate Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {fateMatrix.flat().map((value, i) => (
          <div
            key={`cell-${i}`}
            style={{
              height: "28px",
              borderRadius: "4px",
              background: "#cce6ff",
              opacity: parseFloat(value),
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Ultra-Fractal Infinity Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#e6f3ff", marginBottom: "10px" }}>
          Ultra‑Fractal Infinity Tree
        </h3>

        {ultraBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → Ultra‑Dal: {branch.fate}
          </p>
        ))}
      </div>

      {/* Ultra‑Consciousness Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          Ultra‑Consciousness Output: {topFate.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Fate‑Flow içinde en güçlü ultra‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
