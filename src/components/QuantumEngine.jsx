import React, { useEffect, useState } from "react";

const ROOTS = ["TUT", "KUR", "BA", "YOL", "BİR", "KAL"];

export default function QuantumEngine() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const qState = {
        superposition: [...ROOTS].sort(() => Math.random() - 0.5),
        probabilityField: Math.random().toFixed(4),
        timestamp: Date.now(),
        level: "QUANTUM_CORE",
      };

      setState(qState);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-card">
      <h2>⚛️ QuantumEngine</h2>

      {state && (
        <>
          <div>
            <strong>Süperpozisyon:</strong>{" "}
            {state.superposition.join(" • ")}
          </div>

          <div>
            <strong>Olasılık Alanı:</strong> {state.probabilityField}
          </div>

          <div>
            <strong>Seviye:</strong> {state.level}
          </div>

          <div>
            <strong>Zaman:</strong>{" "}
            {new Date(state.timestamp).toLocaleTimeString()}
          </div>
        </>
      )}
    </div>
  );
}
