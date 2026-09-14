import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v12.json";

export default function CosmicChainV12() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 480);
    return () => clearInterval(timer);
  }, []);

  const totalWave = (root) =>
    Math.abs(
      Math.sin(tick * (root.freq ?? 1) + (root.phase ?? 0))
    ) *
    (root.totality ?? 1);

  const totalMatrix =
    chain.length > 0
      ? chain.map((a) =>
          chain.map((b) =>
            (
              totalWave(a) *
              totalWave(b) *
              ((a.energy ?? 0.5) + (b.energy ?? 0.5)) / 2
            ).toFixed(2)
          )
        )
      : [];

  const totalBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    score: (
      (root.totality ?? 1) *
      totalWave(root)
    ).toFixed(2),
  }));

  const topTotal =
    totalBranches.length > 0
      ? totalBranches.reduce((a, b) =>
          parseFloat(a.score) > parseFloat(b.score) ? a : b
        )
      : { id: "N/A", score: "0.00" };

  const topColor =
    chain.find((c) => c.id === topTotal.id)?.color ?? "#ffffff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#202b80",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v12 — Totality Engine
      </h2>

      {/* Totality Probability Field */}
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
              opacity: 0.05 + totalWave(root) * 0.28,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Totality Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          marginBottom: "25px",
        }}
      >
        {totalMatrix.flat().map((value, i) => (
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

      {/* Totality Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
          Totality Fractal Tree
        </h3>

        {totalBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → Totality: {branch.score}
          </p>
        ))}
      </div>

      {/* Totality Output */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          Totality Output: {topTotal.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          Kozmik bütünlük içinde en güçlü totality‑dal tespit edildi.
        </p>
      </div>
    </div>
  );
}
