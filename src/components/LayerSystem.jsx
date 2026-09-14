// FILE: src/components/LayerSystem.jsx
import React from "react";
import YKOS_LAYERS from "../data/ykos_layers";

export { YKOS_LAYERS };

export default function LayerSystem() {
  return (
    <div style={{ background: "#000", color: "gold", padding: "20px" }}>
      <h2>YKOS Katman Sistemi</h2>
      <pre>{JSON.stringify(YKOS_LAYERS, null, 2)}</pre>
    </div>
  );
}