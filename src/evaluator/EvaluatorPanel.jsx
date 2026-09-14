// FILE: src/evaluator/EvaluatorPanel.jsx

import React from "react";
import metaLayer from "../matrices/meta/MetaLayer.json";
import { semiyotikMotor } from "./semiyotikMotor";

const semiyotik = semiyotikMotor(damgaListesi);

document.dispatchEvent(
  new CustomEvent("flux-start", {
    detail: {
      title: data.title,
      root: semiyotik.chain[0],
      chain: semiyotik.chain,
      concept: semiyotik.concept,
      cosmic: semiyotik.cosmic
    }
  })
);

export function semiyotikMotor(damgalar) {
  const sözlük = {
    AT: { hece: "AT", kavram: "liderlik", cosmic: "3 unsurdan 4 unsura geçiş" },
    OQ: { hece: "OQ", kavram: "oluş / kuantum", cosmic: "geçiş alanı" },
    ON: { hece: "ON", kavram: "kozmos", cosmic: "bütünlük alanı" },
    UÇ: { hece: "UÇ", kavram: "ölüm / yükseliş", cosmic: "ruh geçişi" },
    ÖG: { hece: "ÖG", kavram: "ruh / bilinç", cosmic: "şahsiyet alanı" },
    TÖRT: { hece: "TÖRT", kavram: "dört unsur", cosmic: "vakuum unsurları" }
  };

  const chain = damgalar.map(d => sözlük[d]?.hece || d);
  const concept = damgalar.map(d => sözlük[d]?.kavram).join(" → ");
  const cosmic = damgalar.map(d => sözlük[d]?.cosmic).join(" | ");

  return { chain, concept, cosmic };
}

export default function EvaluatorPanel() {
  const entries = metaLayer.entries;

  return (
    <div style={{ background: "#111", color: "gold", padding: "20px", border: "1px solid gold" }}>
      <h3>Evaluator — Derin Semantik Okuma Paneli</h3>

      {entries.map((entry) => {
        // Derin okuma puanı (ilk sürüm)
        const depthScore = (entry.reading_depth * entry.rmv_weight * entry.flux_energy).toFixed(3);

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

            <p><strong>Reading Depth:</strong> {entry.reading_depth}</p>
            <p><strong>Evaluator Hint:</strong> {entry.evaluator_hint}</p>

            <p><strong>Flux Energy:</strong> {entry.flux_energy}</p>
            <p><strong>RMV Weight:</strong> {entry.rmv_weight}</p>

            <p><strong>Derin Okuma Skoru:</strong> {depthScore}</p>

            <div style={{ marginTop: "10px" }}>
              <strong>Derin Semantik Yorum:</strong>
              <p>
                {entry.root === "TUT"
                  ? "TUT hecesi bağlama, sabitleme ve kavrama semantiğini derin düzeyde taşır."
                  : "KUR hecesi yapı kurma, düzenleme ve form oluşturma semantiğini derin düzeyde taşır."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
