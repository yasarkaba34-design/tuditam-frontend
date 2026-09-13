// FILE: src/yunified/UnifiedPanel.jsx

import React from "react";

import HecePanel from "../matrices/components/HecePanel";
import BubbleMatrixViewer from "../bubblematrix/BubbleMatrixViewer";
import FluxPanel from "../flux/FluxPanel";
import RMVPanel from "../rmv/RMVPanel";
import EvaluatorPanel from "../evaluator/EvaluatorPanel";

export default function UnifiedPanel() {
  return (
    <div style={{ background: "#000", color: "gold", padding: "30px" }}>
      <h2>YKOS Unified Semiyotik Motor Paneli</h2>

      <div style={{ marginTop: "30px" }}>
        <HecePanel />
      </div>

      <div style={{ marginTop: "30px" }}>
        <BubbleMatrixViewer />
      </div>

      <div style={{ marginTop: "30px" }}>
        <FluxPanel />
      </div>

      <div style={{ marginTop: "30px" }}>
        <RMVPanel />
      </div>

      <div style={{ marginTop: "30px" }}>
        <EvaluatorPanel />
      </div>
    </div>
  );
}
