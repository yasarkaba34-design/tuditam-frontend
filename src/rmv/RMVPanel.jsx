// FILE: src/rmv/RMVPanel.jsx

import React from "react";
import metaLayer from "../matrices/meta/MetaLayer.json";

export default function RMVPanel() {
  const entries = metaLayer.entries;

  return (
    <div style={{ background: "#111", color: "gold", padding: "20px", border: "1px solid gold", padding: "20px" }}>
      <h3>RMV — Sonuç Mesaj Vektörü Paneli</h3>

      {entries.map((entry) => {
        // RMV hesaplama (basit ilk sürüm)
        const rmvVector = [
          (entry.rmv_weight * entry.flux_vector[0]).toFixed(3),
          (entry.rmv_weight * entry.flux_vector[1]).toFixed(3),
          (entry.rmv_weight * entry.flux_vector[2]).toFixed(3)
        ];

        return (
          <div
            key={entry.root}
            style={{
              marginBottom: "25px",
              padding: "15px",
              border: "1px solid gold",
              background: "#222",
            }}
          >
            <h4>{entry.root}</h4>

            <p><strong>RMV Weight:</strong> {entry.rmv_weight}</p>
            <p><strong>RMV Priority:</strong> {entry.rmv_priority}</p>
            <p><strong>RMV Context:</strong> {entry.rmv_context}</p>

            <p><strong>Flux Vector:</strong> [{entry.flux_vector.join(", ")}]</p>

            <p><strong>RMV Vector:</strong> [{rmvVector.join(", ")}]</p>

            <div style={{ marginTop: "10px" }}>
              <strong>Sonuç Mesajı:</strong>
              <p>
                {entry.root === "TUT"
                  ? "TUT hecesi bağlama ve sabitleme yönlü bir sonuç vektörü üretir."
                  : "KUR hecesi yapı kurma ve düzenleme yönlü bir sonuç vektörü üretir."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
