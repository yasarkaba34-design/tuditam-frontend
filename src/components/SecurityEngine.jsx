import React, { useEffect } from "react";

export default function SecurityEngine({ selectedRoot }) {

  useEffect(() => {
    if (!selectedRoot) return;

    const token = localStorage.getItem("ykos_token");

    const payload = {
      root: selectedRoot,
      timestamp: Date.now(),
      signature: btoa(selectedRoot + token)
    };

    console.log("Security Check:", payload);

  }, [selectedRoot]);

  return null;
}
