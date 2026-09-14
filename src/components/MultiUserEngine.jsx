import React, { useEffect } from "react";

export default function MultiUserEngine({ selectedRoot, userId }) {

  useEffect(() => {
    if (!selectedRoot || !userId) return;

    const payload = {
      user: userId,
      root: selectedRoot,
      timestamp: Date.now()
    };

    fetch("https://ykos-cloud.example.com/multi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

  }, [selectedRoot, userId]);

  return null;
}
