// FILE: src/os/AppLauncher.jsx

import React from "react";

export default function AppLauncher({ onLaunch }) {
  const apps = [
    { id: "boot", name: "Bootloader", icon: "⚡" },
    { id: "rte", name: "Runtime Engine", icon: "🌀" },
    { id: "kernel", name: "Kernel", icon: "💠" },
    { id: "dflow", name: "DataFlow", icon: "🔀" },
    { id: "atlas", name: "AtlasMap", icon: "🌍" },
    { id: "hece", name: "HecePanel", icon: "🔤" },
    { id: "bubble", name: "BubbleMatrix", icon: "🟡" },
    { id: "flux", name: "FluxPanel", icon: "🧭" },
    { id: "rmv", name: "RMVPanel", icon: "📡" },
    { id: "eval", name: "Evaluator", icon: "🧠" }
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      {apps.map((app) => (
        <div
          key={app.id}
          onClick={() => onLaunch(app.id)}
          style={{
            width: "70px",
            height: "70px",
            background: "#111",
            border: "1px solid gold",
            color: "gold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 10px gold"
          }}
        >
          <div style={{ fontSize: "28px" }}>{app.icon}</div>
          <div style={{ fontSize: "12px", marginTop: "5px" }}>{app.name}</div>
        </div>
      ))}
    </div>
  );
}
