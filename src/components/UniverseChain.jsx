import React, { useEffect, useState } from "react";

export default function UniverseChain({ selectedRoot }) {
  const [chainState, setChainState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const chain = {
      root: selectedRoot,
      universeChainFlow: [
        "TUT",
        "KUR",
        "BA",
        "YOL",
        "BİR",
        "KAL"
      ].sort(() => Math.random() - 0.5),
      probabilityFlow: Math.random().toFixed(6),
      level: "UNIVERSE_CHAIN",
      timestamp: Date.now()
    };

    setChainState(chain);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🔗 UniverseChain</h2>
      {chainState && (
        <>
          <div><strong>Evren Zinciri:</strong> {chainState.universeChainFlow.join(" • ")}</div>
          <div><strong>Olasılık Akışı:</strong> {chainState.probabilityFlow}</div>
          <div><strong>Seviye:</strong> {chainState.level}</div>
        </>
      )}
    </div>
  );
}
