import React, { useEffect, useState } from "react";

export default function CosmicEngine({ selectedRoot }) {
  const [cosmicState, setCosmicState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const cosmic = {
      root: selectedRoot,
      cosmicField: [
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE",
        "COSMIC"
      ].sort(() => Math.random() - 0.5),
      cosmicProbability: Math.random().toFixed(7),
      level: "COSMIC_CORE",
      timestamp: Date.now()
    };

    setCosmicState(cosmic);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🌌 CosmicEngine</h2>
      {cosmicState && (
        <>
          <div><strong>Kozmik Alan:</strong> {cosmicState.cosmicField.join(" • ")}</div>
          <div><strong>Kozmik Olasılık:</strong> {cosmicState.cosmicProbability}</div>
          <div><strong>Seviye:</strong> {cosmicState.level}</div>
        </>
      )}
    </div>
  );
}
