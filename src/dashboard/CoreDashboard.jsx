// FILE: src/dashboard/CoreDashboard.jsx

import React from "react";

import HecePanel from "../matrices/components/HecePanel";
import BubbleMatrixViewer from "../bubblematrix/BubbleMatrixViewer";
import FluxPanel from "../flux/FluxPanel";
import RMVPanel from "../rmv/RMVPanel";
import EvaluatorPanel from "../evaluator/EvaluatorPanel";
import AtlasMap from "../atlas/AtlasMap";

export default function CoreDashboard() {
  return (
    <div style={{ background: "#000", color: "gold", padding: "40px" }}>
      <h1>YKOS Core Dashboard</h1>
      <p>Semiyotik Motor • Görsel Motor • Flux • RMV • Evaluator • Atlas</p>

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
    </div>
  );
}
