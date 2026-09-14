import React, { useEffect, useState } from "react";

export default function CosmicAtlas({ selectedRoot }) {
  const [cosmicAtlas, setCosmicAtlas] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const atlas = {
      root: selectedRoot,
      cosmicCoordinates: [
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE",
        "COSMIC"
      ].sort(() => Math.random() - 0.5),
      cosmicCloud: Math.random().toFixed(7),
      level: "COSMIC_ATLAS",
      timestamp: Date.now()
    };

    setCosmicAtlas(atlas);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🗺️ CosmicAtlas</h2>
      {cosmicAtlas && (
        <>
          <div><strong>Kozmik Atlas Alanı:</strong> {cosmicAtlas.cosmicCoordinates.join(" • ")}</div>
          <div><strong>Kozmik Olasılık Bulutu:</strong> {cosmicAtlas.cosmicCloud}</div>
          <div><strong>Seviye:</strong> {cosmicAtlas.level}</div>
        </>
      )}
    </div>
  );
}
