// FILE: src/mega/AnadoluShieldInteractive.jsx

import React from "react";
import { readYKOSFlow } from "./YKOSFlowReader.js";
import { sendCrossSignal } from "./CrossModuleRouter.js";

export default function AnadoluShieldInteractive({ universe }) {
  const flow = readYKOSFlow();

  // hyperState obje mi metin/sayı mı kontrol edip metne çevirelim
  const hyperStateDisplay = typeof universe?.hyperState === "object"
    ? (universe?.hyperState?.state || universe?.hyperState?.value || JSON.stringify(universe.hyperState))
    : (universe?.hyperState ?? "Aktif");

  // flow.layers.layerB obje mi metin mi kontrol edelim
  const layerBDisplay = typeof flow?.layers?.layerB === "object"
    ? (flow?.layers?.layerB?.name || flow?.layers?.layerB?.value || JSON.stringify(flow.layers.layerB))
    : flow?.layers?.layerB;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffaaaa",
        fontSize: "18px"
      }}
    >
      <div>🛡 Anadolu Kalkanı — HyperState: {hyperStateDisplay}</div>

      {flow && (
        <p style={{ color: "#0f0", marginTop: "10px", fontSize: "14px" }}>
          Layer B: {layerBDisplay}
        </p>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          sendCrossSignal("goc", 2);
        }}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          backgroundColor: "#222",
          color: "#ffaaaa",
          border: "1px solid #444",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Göç Flux +2
      </button>
    </div>
  );
}
