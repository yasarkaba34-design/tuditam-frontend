import React, { useEffect, useState } from "react";
import { YKOS_ROOTS } from "../data/ykos_roots";

export default function AiEngine({ selectedRoot }) {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const data = YKOS_ROOTS[selectedRoot];

    const ai = {
      root: selectedRoot,
      guess: selectedRoot.slice(0, 2),
      semanticHint: data?.anlam || "Semantik öneri yok",
      chainFocus: Object.keys(data?.zincir || {})[0],
      summary: `“${selectedRoot}” kökü YKOS içinde ${data?.kategori} kategorisinde yer alır ve ${data?.anlam} davranışı gösterir.`
    };

    setAnalysis(ai);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>🤖 AI Motoru</h2>
      {analysis && (
        <>
          <div><strong>Tahmin:</strong> {analysis.guess}</div>
          <div><strong>Semantik Öneri:</strong> {analysis.semanticHint}</div>
          <div><strong>Zincir Odak:</strong> {analysis.chainFocus}</div>
          <div><strong>Akademik Özet:</strong> {analysis.summary}</div>
        </>
      )}
    </div>
  );
}
