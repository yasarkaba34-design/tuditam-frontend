import React, { useEffect } from "react";

export default function OmniEngine({ selectedRoot }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const omniPacket = {
      root: selectedRoot,
      timestamp: Date.now(),
      omni: true,
      level: "OMNI_CORE"
    };

    console.log("OmniEngine:", omniPacket);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🌐 OmniEngine</h2>
      <div>YKOS şu anda tüm motorları OMNI seviyede birleştiriyor.</div>
    </div>
  );
}
