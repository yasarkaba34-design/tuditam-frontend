import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v5.json";

export default function CosmicChainV5() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const wave = (root) =>
    Math.abs(
      Math.sin(tick * (root.freq ?? 1) + (root.phase ?? 0))
    );

  const decisionBranches = chain.map((root, i) => ({
    id: root.id ?? `root-${i}`,
    probability: (
      wave(root) * (root.energy ?? 0.5)
    ).toFixed(2),
  }));

  const topDecision =
    decisionBranches.length > 0
      ? decisionBranches.reduce((a, b) =>
          parseFloat(a.probability) > parseFloat(b.probability)
            ? a
            : b
        )
      : { id: "N/A", probability: "0.00" };

  const topColor =
    chain.find((c) => c.id === topDecision.id)?.color ?? "#66aaff";

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#0e1330",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v5 — Quantum Consciousness Engine
      </h2>

      {/* Quantum Superposition */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        {chain.map((root, i) => (
          <div
            key={root.id ?? `root-${i}`}
            style={{
              flex: 1,
              height: "40px",
              background: root.color ?? "#555",
              opacity: 0.25 + wave(root) * 0.5,
              transition: "opacity 0.3s",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>

      {/* Wave Function Field */}
      <div
        style={{
          position: "relative",
          height: "160px",
          background: "#111",
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
              opacity: 0.08 + wave(root) * 0.12,
              mixBlendMode: "screen",
              transition: "opacity 0.3s",
            }}
          />
        ))}
      </div>

      {/* Multi-Branch Decision Tree */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#66aaff", marginBottom: "10px" }}>
          Kozmik Karar Ağacı (Multi‑Branch)
        </h3>

        {decisionBranches.map((branch) => (
          <p key={branch.id} style={{ opacity: 0.85 }}>
            {branch.id} → Olasılık: {branch.probability}
          </p>
        ))}
      </div>

      {/* AI Consciousness Mapping */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: topColor }}>
          AI Consciousness Output: {topDecision.id}
        </h3>
        <p style={{ opacity: 0.85 }}>
          En yüksek kuantum olasılığı tespit edildi.
        </p>
      </div>
    </div>
  );
}
