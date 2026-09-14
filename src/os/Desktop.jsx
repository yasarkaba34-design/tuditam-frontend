// FILE: src/os/Desktop.jsx

import React from "react";
import WindowManager from "./WindowManager";
import Bootloader from "../boot/Bootloader";

export default function Desktop() {
  return (
    <div
      style={{
        background: "#000",
        color: "gold",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Masaüstü arka planı */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #000 0%, #111 50%, #000 100%)"
        }}
      />

      {/* Görev çubuğu */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50px",
          background: "#111",
          borderTop: "1px solid gold",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          gap: "20px"
        }}
      >
        <div style={{ color: "gold" }}>YKOS Desktop</div>
      </div>

      {/* Pencere yöneticisi */}
      <WindowManager>
        <div title="Bootloader">
          <Bootloader />
        </div>
      </WindowManager>
    </div>
  );
}
// FILE: src/os/Desktop.jsx

import React, { useState } from "react";
import WindowManager from "./WindowManager";
import AppLauncher from "./AppLauncher";

import Bootloader from "../boot/Bootloader";
import RTE from "../runtime/RTE";
import Kernel from "../kernel/Kernel";
import DFlow from "../dflow/DFlow";
import AtlasMap from "../atlas/AtlasMap";
import HecePanel from "../matrices/components/HecePanel";
import BubbleMatrixViewer from "../bubblematrix/BubbleMatrixViewer";
import FluxPanel from "../flux/FluxPanel";
import RMVPanel from "../rmv/RMVPanel";
import EvaluatorPanel from "../evaluator/EvaluatorPanel";

export default function Desktop() {
  const [launchedApps, setLaunchedApps] = useState([]);

  const launchApp = (id) => {
    setLaunchedApps((prev) => [...prev, id]);
  };

  const appComponents = {
    boot: <div title="Bootloader"><Bootloader /></div>,
    rte: <div title="Runtime Engine"><RTE /></div>,
    kernel: <div title="Kernel"><Kernel /></div>,
    dflow: <div title="DataFlow"><DFlow /></div>,
    atlas: <div title="AtlasMap"><AtlasMap /></div>,
    hece: <div title="HecePanel"><HecePanel /></div>,
    bubble: <div title="BubbleMatrix"><BubbleMatrixViewer /></div>,
    flux: <div title="FluxPanel"><FluxPanel /></div>,
    rmv: <div title="RMVPanel"><RMVPanel /></div>,
    eval: <div title="Evaluator"><EvaluatorPanel /></div>
  };

  return (
    <div style={{ background: "#000", color: "gold", width: "100vw", height: "100vh" }}>
      <AppLauncher onLaunch={launchApp} />

      <WindowManager>
        {launchedApps.map((id) => appComponents[id])}
      </WindowManager>
    </div>
  );
}
