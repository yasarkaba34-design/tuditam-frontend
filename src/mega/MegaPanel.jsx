import React from "react";

import Matris from "./Matris.jsx";
import Atlas from "./Atlas.jsx";
import Chain from "./Chain.jsx";
import QuantumEngine from "./QuantumEngine.jsx";
import LayerSystem from "./LayerSystem.jsx";

export default function MegaPanel() {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0a0a0a",
        color: "#fff",
        borderRadius: "12px",
        marginTop: "40px"
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "20px" }}>
        🧩 YKOS MegaPanel — Kozmik Modül Birleşimi
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px"
        }}
      >
        <div style={{ background: "#111", padding: "15px", borderRadius: "8px" }}>
          <h3 style={{ color: "#d4af37" }}>📐 Matris</h3>
          <Matris />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "8px" }}>
          <h3 style={{ color: "#d4af37" }}>🗺️ Atlas</h3>
          <Atlas />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "8px" }}>
          <h3 style={{ color: "#d4af37" }}>🔗 Chain</h3>
          <Chain />
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "8px" }}>
          <h3 style={{ color: "#d4af37" }}>⚛️ Quantum Engine</h3>
          <QuantumEngine />
        </div>

        <div
          style={{
            background: "#111",
            padding: "15px",
            borderRadius: "8px",
            gridColumn: "span 2"
          }}
        >
          <h3 style={{ color: "#d4af37" }}>🧬 Layer System</h3>
          <LayerSystem />
        </div>
      </div>
    </div>
  );
}
