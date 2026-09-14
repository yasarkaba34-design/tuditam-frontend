import React, { useEffect } from "react";

export default function UniverseSync({ selectedRoot }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const syncPacket = {
      root: selectedRoot,
      universeSync: true,
      timestamp: Date.now(),
      level: "UNIVERSE_SYNC"
    };

    console.log("UniverseSync:", syncPacket);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🌠 UniverseSync</h2>
      <div>Evren senkronizasyonu aktif.</div>
    </div>
  );
}
