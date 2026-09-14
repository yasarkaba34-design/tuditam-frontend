// FILE: src/boot/Bootloader.jsx

import React, { useState, useEffect } from "react";

import RTE from "../runtime/RTE";

export default function Bootloader() {
  const [bootStatus, setBootStatus] = useState("Initializing...");
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const sequence = [
      "Loading MetaLayer...",
      "Initializing Kernel...",
      "Starting Runtime Engine...",
      "Checking Atlas Coordinates...",
      "Activating Semiyotik Motor...",
      "Activating Görsel Motor...",
      "Activating Flux Motor...",
      "Activating RMV Motor...",
      "Activating Evaluator...",
      "Finalizing Boot Sequence..."
    ];

    let index = 0;

    const interval = setInterval(() => {
      setBootStatus(sequence[index]);
      index++;

      if (index === sequence.length) {
        clearInterval(interval);
        setBootStatus("Boot Complete");
        setBootComplete(true);
      }
    }, 600);
  }, []);

  return (
    <div style={{ background: "#000", color: "gold", padding: "40px", border: "1px solid gold" }}>
      <h1>YKOS Bootloader</h1>
      <p>Sistem açılış motoru</p>

      <div style={{ marginTop: "20px", padding: "20px", background: "#111", border: "1px solid gold" }}>
        <p><strong>Durum:</strong> {bootStatus}</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        {bootComplete && <RTE />}
      </div>
    </div>
  );
}
