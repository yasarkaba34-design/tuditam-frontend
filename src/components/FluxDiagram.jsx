// FILE: src/components/FluxDiagram.jsx
import { useEffect, useState } from "react";
import "./flux.css";

export default function FluxDiagram() {
  const [tick, setTick] = useState(0);
  const [flux, setFlux] = useState(0.0);

  // Motoru simüle eden döngü
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);

      // Flux değerini hafif dalgalandır
      setFlux((f) => {
        const next = f + (Math.sin(tick / 10) * 0.02);
        return Math.max(0, Math.min(1, next));
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tick]);

  return (
    <div className="flux-container">
      <div className="quantum-core">
        <div className="core-pulse" style={{ opacity: flux }}></div>
        <h2>QuantumEngine Core</h2>
        <p>Flux: {flux.toFixed(4)}</p>
        <p>Tick: {tick}</p>
      </div>

      <div className="omni-field"></div>
      <div className="cosmic-field"></div>

      <div className="atlas-grid">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="atlas-node"></div>
        ))}
      </div>
    </div>
  );
}
useEffect(() => {
  const interval = setInterval(() => {
    setTick((t) => t + 1);
    setFlux((f) => {
      const next = f + (Math.sin(tick / 10) * 0.02);
      return Math.max(0, Math.min(1, next));
    });
  }, 1000);

  return () => clearInterval(interval);
}, [tick]);
useEffect(() => {
  const interval = setInterval(() => {
    fetch("/api/ykos-flux")
      .then((res) => res.json())
      .then((data) => {
        setFlux(data.flux);
        setTick(data.tick);
      })
      .catch((err) => console.error("YKOS Flux API hatası:", err));
  }, 1000);

  return () => clearInterval(interval);
}, []);
