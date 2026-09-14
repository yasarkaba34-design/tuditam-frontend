// FILE: src/flux/FluxPanel.jsx

import React from "react";
import metaLayer from "../matrices/meta/MetaLayer.json";

// 🔹 Timeline bileşeni
function FluxTimeline({ chain }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      {chain.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#FFD700",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              boxShadow: "0 0 10px #FFD700",
            }}
          >
            {item}
          </div>

          {i < chain.length - 1 && (
            <div
              style={{
                width: "80px",
                height: "2px",
                background: "gold",
                margin: "0 10px",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

// 🔹 Ana FluxPanel bileşeni
export default function FluxPanel() {
  const entries = metaLayer.entries;

  // Timeline için zincir oluştur
  const fluxChain = entries.map((entry) => entry.root);

  return (
    <div
      style={{
        background: "#111",
        color: "gold",
        padding: "20px",
        border: "1px solid gold",
      }}
    >
      <h3>Flux Motoru — Yönsel Vektör Paneli</h3>

      {entries.map((entry) => (
        <div
          key={entry.root}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid gold",
            background: "#222",
          }}
        >
          <h4>{entry.root}</h4>

          <p>
            <strong>Flux Vector:</strong> [{entry.flux_vector.join(", ")}]
          </p>
          <p>
            <strong>Flux Energy:</strong> {entry.flux_energy}
          </p>
          <p>
            <strong>Flux Phase:</strong> {entry.flux_phase}
          </p>

          <div style={{ marginTop: "10px" }}>
            <strong>Yönsel Açıklama:</strong>
            <p>
              {entry.root === "TUT"
                ? "TUT hecesi sabitleme ve bağlama yönlü düşük açılı bir vektör üretir."
                : "KUR hecesi yapı kurma ve düzenleme yönlü yüksek açılı bir vektör üretir."}
            </p>
          </div>
        </div>
      ))}

      {/* 🔹 Timeline burada render ediliyor */}
      <FluxTimeline chain={fluxChain} />
    </div>
  );
}
