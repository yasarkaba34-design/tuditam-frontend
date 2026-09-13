// FILE: src/dflow/DFlow.jsx

import React from "react";

export default function DFlow() {
  return (
    <div style={{ background: "#000", color: "gold", padding: "40px", border: "1px solid gold" }}>
      <h2>YKOS DataFlow Engine (DFlow)</h2>
      <p>Motorlar arası veri akışının birleşik şeması</p>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#111",
          border: "1px solid gold",
        }}
      >
        {/* Veri akışı diyagramı */}
        <pre style={{ color: "gold", fontSize: "16px" }}>
{`
MetaLayer
   ↓
HecePanel
   ↓
BubbleMatrixViewer
   ↓
FluxPanel
   ↓
RMVPanel
   ↓
EvaluatorPanel
   ↓
AtlasMap
`}
        </pre>
      </div>

      <p style={{ marginTop: "20px" }}>
        Bu diyagram YKOS’un semiyotik çekirdeğinde verinin nasıl aktığını gösterir.
      </p>
    </div>
  );
}
