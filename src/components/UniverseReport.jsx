import React, { useEffect, useState } from "react";

export default function UniverseReport({ selectedRoot }) {
  const [reportState, setReportState] = useState(null);

  useEffect(() => {
    if (!selectedRoot) return;

    const report = {
      root: selectedRoot,
      universeReportFields: [
        "SEMANTIC",
        "ATLAS",
        "CHAIN",
        "LAYER",
        "OMNI",
        "QUANTUM",
        "HYPER",
        "UNIVERSE"
      ].sort(() => Math.random() - 0.5),
      confidence: Math.random().toFixed(6),
      level: "UNIVERSE_REPORT",
      timestamp: Date.now()
    };

    setReportState(report);

  }, [selectedRoot]);

  return (
    <div className="dashboard-card">
      <h2>📡 UniverseReport</h2>
      {reportState && (
        <>
          <div><strong>Evren Rapor Alanı:</strong> {reportState.universeReportFields.join(" • ")}</div>
          <div><strong>Güven Skoru:</strong> {reportState.confidence}</div>
          <div><strong>Seviye:</strong> {reportState.level}</div>
        </>
      )}
    </div>
  );
}
