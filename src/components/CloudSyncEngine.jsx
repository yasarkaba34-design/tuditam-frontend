import React, { useEffect } from "react";
import { YKOS_API } from "../api/ycos";

export default function CloudSyncEngine({ selectedRoot }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const payload = {
      root: selectedRoot,
      timestamp: Date.now()
    };

    fetch("https://ykos-cloud.example.com/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

  }, [selectedRoot]);

  return null;
}
