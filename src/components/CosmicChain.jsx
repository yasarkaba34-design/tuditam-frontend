import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import chainData from "../data/cosmic_chain.json";

export default function CosmicChain() {
  const [index, setIndex] = useState(0);
  const chain = chainData.chain;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % chain.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const current = chain[index];

  return (
    <div style={{
      padding: "20px",
      background: "#0a0f24",
      color: "white",
      borderRadius: "12px",
      marginTop: "20px",
      textAlign: "center"
    }}>
      <h2 style={{ color: current.color, fontSize: "32px" }}>
        {current.name}
      </h2>

      <p style={{ fontSize: "18px", opacity: 0.9 }}>
        {current.meaning}
      </p>

      <p style={{ fontSize: "16px", marginTop: "10px", color: "#ccc" }}>
        {current.cosmic}
      </p>

      <div style={{
        marginTop: "20px",
        height: "8px",
        background: "#333",
        borderRadius: "4px",
        overflow: "hidden"
      }}>
        <div
          style={{
            width: `${((index + 1) / chain.length) * 100}%`,
            height: "8px",
            background: current.color,
            transition: "width 0.5s"
          }}
        />
      </div>

      <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
        {current.next ? `→ Sonraki: ${current.next}` : "Zincir tamamlandı"}
      </p>
    </div>
  );
}


  useEffect(() => {
    if (!selectedRoot) return;

    const chain = {
      root: selectedRoot,
      cosmicFlow: [
        "TUT",
        "KUR",
        "BA",
        "YOL",
        "BİR",
        "KAL"
      ].sort(() => Math.random() - 0.5),
      cosmicProbabilityFlow: Math.random().toFixed(7),
      level: "COSMIC_CHAIN",
      timestamp: Date.now()
    };

    setCosmicChain(chain);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🔗 CosmicChain</h2>
      {cosmicChain && (
        <>
          <div><strong>Kozmik Zincir Akışı:</strong> {cosmicChain.cosmicFlow.join(" • ")}</div>
          <div><strong>Kozmik Olasılık Akışı:</strong> {cosmicChain.cosmicProbabilityFlow}</div>
          <div><strong>Seviye:</strong> {cosmicChain.level}</div>
        </>
      )}
    </div>
  );
}
