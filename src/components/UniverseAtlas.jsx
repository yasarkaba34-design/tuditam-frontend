import React, { useEffect, useState } from "react";

export default function UniverseAtlas({ selectedRoot }) {
  const [atlasState, setAtlasState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const atlas = {
      root: selectedRoot,
      universeCoordinates: [
        "CLASSIC",
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE"
      ].sort(() => Math.random() - 0.5),
      probabilityCloud: Math.random().toFixed(6),
      level: "UNIVERSE_ATLAS",
      timestamp: Date.now()
    };

    setAtlasState(atlas);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🗺️ UniverseAtlas</h2>
      {atlasState && (
        <>
          <div><strong>Evren Atlas Alanı:</strong> {atlasState.universeCoordinates.join(" • ")}</div>
          <div><strong>Olasılık Bulutu:</strong> {atlasState.probabilityCloud}</div>
          <div><strong>Seviye:</strong> {atlasState.level}</div>
        </>
      )}
    </div>
  );
}
