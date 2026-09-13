import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";

export default function YKOSAutonomousPanel({ bubbles, analysisData }) {
  const [fluxHistory, setFluxHistory] = useState([]);
  const [resonanceMap, setResonanceMap] = useState([]);
  const [semanticChanges, setSemanticChanges] = useState([]);
  const [vectorAngles, setVectorAngles] = useState([]);
  const [collisionHeat, setCollisionHeat] = useState(0);

  useEffect(() => {
    if (!bubbles || bubbles.length === 0) return;

    // 1) FLUX HISTORY
    const avgFlux =
      bubbles.reduce((sum, b) => sum + b.flux, 0) / bubbles.length;
    setFluxHistory((prev) => [...prev.slice(-20), avgFlux]);

    // 2) RESONANCE MAP
    const resonanceSnapshot = bubbles.map((b) => b.resonance);
    setResonanceMap(resonanceSnapshot);

    // 3) SEMANTIC CHAIN CHANGES
    const semanticSnapshot = bubbles.map((b) => b.semanticChain.at(-1));
    setSemanticChanges((prev) => [...prev.slice(-20), semanticSnapshot]);

    // 4) VECTOR ANGLES (from analysis engine)
    if (analysisData) {
      const angles = analysisData.map((a) => a.vectorAngle);
      setVectorAngles(angles);
    }

    // 5) COLLISION HEAT
    let collisions = 0;
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const dx = bubbles[i].x - bubbles[j].x;
        const dy = bubbles[i].y - bubbles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const field1 = bubbles[i].radius * (1 + bubbles[i].resonance * 0.8);
        const field2 = bubbles[j].radius * (1 + bubbles[j].resonance * 0.8);

        if (dist < field1 + field2) collisions++;
      }
    }
    setCollisionHeat(collisions);
  }, [bubbles, analysisData]);

  return (
    <div style={{
      position: "absolute",
      top: 20,
      right: 20,
      width: "420px",
      padding: "20px",
      background: "rgba(0,0,0,0.65)",
      borderRadius: "12px",
      color: "white",
      fontFamily: "monospace"
    }}>
      <h2>YKOS Autonomous Motor Panel</h2>

      {/* FLUX GRAPH */}
      <div style={{ marginTop: "20px" }}>
        <h4>Flux Akışı</h4>
        <Line
          data={{
            labels: fluxHistory.map((_, i) => i),
            datasets: [
              {
                label: "Flux",
                data: fluxHistory,
                borderColor: "gold",
                backgroundColor: "rgba(255,215,0,0.3)",
              },
            ],
          }}
        />
      </div>

      {/* RESONANCE MAP */}
      <div style={{ marginTop: "20px" }}>
        <h4>Rezonans Yoğunluğu</h4>
        <Radar
          data={{
            labels: resonanceMap.map((_, i) => `B${i}`),
            datasets: [
              {
                label: "Resonance",
                data: resonanceMap,
                backgroundColor: "rgba(0,150,255,0.3)",
                borderColor: "cyan",
              },
            ],
          }}
        />
      </div>

      {/* COLLISION HEAT */}
      <div style={{ marginTop: "20px" }}>
        <h4>Etkileşim Yoğunluğu</h4>
        <div style={{
          fontSize: "28px",
          color: collisionHeat > 10 ? "red" : "orange"
        }}>
          {collisionHeat}
        </div>
      </div>

      {/* SEMANTIC CHAIN MONITOR */}
      <div style={{ marginTop: "20px" }}>
        <h4>SemanticChain Değişimleri</h4>
        <pre style={{ fontSize: "12px" }}>
          {JSON.stringify(semanticChanges.slice(-5), null, 2)}
        </pre>
      </div>

      {/* VECTOR ANGLES */}
      <div style={{ marginTop: "20px" }}>
        <h4>Vektör Açıları</h4>
        <pre style={{ fontSize: "12px" }}>
          {JSON.stringify(vectorAngles.slice(0, 10), null, 2)}
        </pre>
      </div>
    </div>
  );
}
