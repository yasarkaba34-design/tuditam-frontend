import React, { useEffect, useState } from "react";

export default function UniverseCloud({ selectedRoot }) {
  const [cloudState, setCloudState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const cloud = {
      root: selectedRoot,
      universeCloudNodes: [
        "CLASSIC",
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE"
      ].sort(() => Math.random() - 0.5),
      syncQuality: Math.random().toFixed(6),
      level: "UNIVERSE_CLOUD",
      timestamp: Date.now()
    };

    setCloudState(cloud);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>☁️ UniverseCloud</h2>
      {cloudState && (
        <>
          <div><strong>Evren Bulut Düğümleri:</strong> {cloudState.universeCloudNodes.join(" • ")}</div>
          <div><strong>Senkron Kalitesi:</strong> {cloudState.syncQuality}</div>
          <div><strong>Seviye:</strong> {cloudState.level}</div>
        </>
      )}
    </div>
  );
}
