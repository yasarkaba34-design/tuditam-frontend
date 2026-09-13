// FILE: src/kernel/Kernel.jsx

import React from "react";

import MetaLayer from "../matrices/meta/MetaLayer.json";

import HecePanel from "../matrices/components/HecePanel";
import BubbleMatrixViewer from "../bubblematrix/BubbleMatrixViewer";
import FluxPanel from "../flux/FluxPanel";
import RMVPanel from "../rmv/RMVPanel";
import EvaluatorPanel from "../evaluator/EvaluatorPanel";
import AtlasMap from "../atlas/AtlasMap";
import DFlow from "../dflow/DFlow";
import {
  LinguisticSpiralLayer,
  SpiralAnchors,
  ProtoMatrix
} from '@/ykos-linguistic-spiral';

export default Kernel;

// 🔽 Export’un hemen altına ekle
useEffect(() => {
  FluxEngine.attachLayer(LinguisticSpiralLayer);
  FluxEngine.bindAnchors(SpiralAnchors);
  Evaluator.addMatrix(ProtoMatrix);
  Evaluator.computeResonance(LinguisticSpiralLayer);
}, []);

return (
    <div style={{ background: "#000", color: "gold", padding: "50px" }}>
      <h1>YKOS Kernel</h1>
      <p>Semiyotik Motor • Görsel Motor • Flux • RMV • Evaluator • Atlas • DFlow</p>

      <div style={{ marginTop: "40px" }}>
        <h2>MetaLayer</h2>
        <pre style={{ background: "#111", padding: "20px", border: "1px solid gold" }}>
{JSON.stringify(MetaLayer, null, 2)}
        </pre>
      </div>

      <div style={{ marginTop: "40px" }}>
        <HecePanel />
      </div>

      <div style={{ marginTop: "40px" }}>
        <BubbleMatrixViewer />
      </div>

      <div style={{ marginTop: "40px" }}>
        <FluxPanel />
      </div>

      <div style={{ marginTop: "40px" }}>
        <RMVPanel />
      </div>

      <div style={{ marginTop: "40px" }}>
        <EvaluatorPanel />
      </div>

      <div style={{ marginTop: "40px" }}>
        <AtlasMap />
      </div>

      <div style={{ marginTop: "40px" }}>
        <DFlow />
      </div>
    </div>
  );
}
// FILE: src/runtime/RTE.jsx

import React, { useState } from "react";

import Kernel from "../kernel/Kernel";
import DFlow from "../dflow/DFlow";

export default function RTE() {
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("Idle");

  const startEngine = () => {
    setRunning(true);
    setStatus("Running");
  };

  const stopEngine = () => {
    setRunning(false);
    setStatus("Stopped");
  };

  const reloadEngine = () => {
    setStatus("Reloading...");
    setTimeout(() => {
      setStatus("Running");
    }, 800);
  };

  return (
    <div style={{ background: "#000", color: "gold", padding: "40px", border: "1px solid gold" }}>
      <h1>YKOS Runtime Engine (RTE)</h1>
      <p>Çekirdek çalışma zamanını yöneten motor</p>

      <div style={{ marginTop: "20px" }}>
        <p><strong>Durum:</strong> {status}</p>

        <button
          onClick={startEngine}
          style={{ marginRight: "10px", padding: "10px", background: "gold", border: "none" }}
        >
          Başlat
        </button>

        <button
          onClick={stopEngine}
          style={{ marginRight: "10px", padding: "10px", background: "#444", color: "gold", border: "none" }}
        >
          Durdur
        </button>

        <button
          onClick={reloadEngine}
          style={{ padding: "10px", background: "#222", color: "gold", border: "1px solid gold" }}
        >
          Yeniden Yükle
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        {running && (
          <>
            <Kernel />
            <DFlow />
          </>
        )}
      </div>
    </div>
  );
}
FluxEngine.attachLayer(LinguisticSpiralLayer);
FluxEngine.bindAnchors(SpiralAnchors);
Evaluator.addMatrix(ProtoMatrix);
Evaluator.computeResonance(LinguisticSpiralLayer);
