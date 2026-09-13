import React, { useEffect, useState } from "react";

export default function UniverseLayer({ selectedRoot }) {
  const [layerState, setLayerState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const layer = {
      root: selectedRoot,
      universeLayers: [
        "CLASSIC",
        "ATLAS",
        "CHAIN",
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE"
      ].sort(() => Math.random() - 0.5),
      transitionField: Math.random().toFixed(6),
      level: "UNIVERSE_LAYER",
      timestamp: Date.now()
    };

    setLayerState(layer);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🪐 UniverseLayer</h2>
      {layerState && (
        <>
          <div><strong>Evren Katman Kümesi:</strong> {layerState.universeLayers.join(" • ")}</div>
          <div><strong>Geçiş Alanı:</strong> {layerState.transitionField}</div>
          <div><strong>Seviye:</strong> {layerState.level}</div>
        </>
      )}
    </div>
  );
}
