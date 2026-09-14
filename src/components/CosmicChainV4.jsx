import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain_v4.json";

export default function CosmicChainV4() {
  const chain = Array.isArray(chainData.chain) ? chainData.chain : [];
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 850);

    return () => clearInterval(timer);
  }, []);

  const patternIndex =
    chain.length > 0 ? Math.floor((tick / 4) % chain.length) : 0;

  const decision = chain[patternIndex] ?? {
    id: "N/A",
    color: "#888",
  };

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "25px",
        background: "#0d112c",
        borderRadius: "14px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "15px" }}>
        COSMICCHAIN v4 — NeuroCosmos
      </h2>

      {/* NeuroCosmic Map */}
      <div
        style={{
          position: "relative",
          height: "180px",
          marginBottom: "30px",
          background: "#111",
          borderRadius: "12px",
        }}
      >
        {chain.map((root, i) => (
          <div
            key={root.id ?? `node-${i}`}
            style={{
              position: "absolute",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: root.color ?? "#666",
              left: `${root.nodeX ?? 50}px`,
              top: `${root.nodeY ?? 50}px`,
              boxShadow: `0 0 ${
                10 + Math.sin(tick * (root.freq ?? 1)) * 8
              }px ${root.color ?? "#666"}`,
              transition: "box-shadow 0.3s",
            }}
          />
        ))}

        {/* Neural Links */}
        {chain.map((root, i) => {
          if (i === chain.length - 1) return null;
          const next = chain[i + 1];

          return (
            <svg
              key={`${root.id ?? `node-${i}`}-link`}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <line
                x1={(root.nodeX ?? 50) + 13}
                y1={(root.nodeY ?? 50) + 13}
                x2={(next.nodeX ?? 50) + 13}
                y2={(next.nodeY ?? 50) + 13}
                stroke={root.color ?? "#666"}
                strokeWidth="2"
                opacity={0.4 + Math.sin(tick * 0.3) * 0.2}
              />
            </svg>
          );
        })}
      </div>

      {/* AI Pattern Recognition */}
      <div
        style={{
          padding: "15px",
          background: "#151a38",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: decision.color }}>
          AI Pattern: {decision.id}
        </h3>
        <p style={{ opacity: 0.85 }}>Enerji örüntüsü tespit edildi.</p>
      </div>

      {/* Cosmic Decision Flow */}
      <div
        style={{
          padding: "15px",
          background: "#0f1533",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: decision.color }}>Kozmik Karar Akışı</h3>
        <p style={{ opacity: 0.85 }}>
          Sistem bir sonraki akışta {decision.id} kökünü öncelikli işliyor.
        </p>
      </div>
    </div>
  );
}
