// FILE: src/matrices/components/HecePanel.jsx

import React from "react";
import metaLayer from "../meta/MetaLayer.json";

export default function HecePanel() {
  const entries = metaLayer.entries;

  return (
    <div style={{ background: "#111", color: "gold", padding: "20px", border: "1px solid gold" }}>
      <h3>YKOS Hece Paneli</h3>
      {entries.map((entry) => (
        <div key={entry.root} style={{ marginBottom: "15px" }}>
          <h4>{entry.root}</h4>
          <p><strong>Anlam Alanı:</strong> {entry.semantic_field}</p>
          <p><strong>Atlas Bölgesi:</strong> {entry.atlas_region}</p>
          <p><strong>Bubble Profil:</strong> {entry.bubble_profile}</p>
          <p><strong>Flux Enerjisi:</strong> {entry.flux_energy}</p>
          <p><strong>RMV Ağırlığı:</strong> {entry.rmv_weight}</p>
          <p><strong>Evaluator İpucu:</strong> {entry.evaluator_hint}</p>
        </div>
      ))}
    </div>
  );
}
