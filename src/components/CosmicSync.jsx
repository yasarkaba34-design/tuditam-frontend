import React, { useEffect } from "react";

export default function CosmicSync({ selectedRoot }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const cosmicPacket = {
      root: selectedRoot.id ?? selectedRoot,
      color: selectedRoot.color ?? "#ffffff",
      energy: selectedRoot.energy ?? 0,
      cosmicSync: true,
      timestamp: Date.now(),
      level: "COSMIC_SYNC"
    };

    console.log("CosmicSync Packet:", cosmicPacket);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>✨ CosmicSync</h2>
      <div>Kozmik senkronizasyon aktif.</div>
    </div>
  );
}
