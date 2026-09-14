import React, { useEffect } from "react";

export default function LiveSyncEngine({ selectedRoot, onSync }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const payload = {
      root: selectedRoot,
      timestamp: Date.now()
    };

    onSync(payload);

  }, [selectedRoot]);

  return null;
}
