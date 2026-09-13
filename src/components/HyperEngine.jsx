import React, { useEffect, useState } from "react";

export default function HyperEngine({ selectedRoot }) {
  const [hyperState, setHyperState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const hyper = {
      root: selectedRoot,
      hyperField: [
        "SEMANTIC",
        "ATLAS",
        "LAYER",
        "CHAIN",
        "OMNI",
        "QUANTUM"
      ].sort(() => Math.random() - 0.5),
      hyperLevel: "HYPER_CORE",
      timestamp: Date.now()
    };

    setHyperState(hyper);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🌀 HyperEngine</h2>
      {hyperState && (
        <>
          <div><strong>Hiper Alan:</strong> {hyperState.hyperField.join(" • ")}</div>
          <div><strong>Seviye:</strong> {hyperState.hyperLevel}</div>
        </>
      )}
    </div>
  );
}
