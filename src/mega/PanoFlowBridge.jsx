// FILE: src/mega/PanoFlowBridge.jsx

import React, { useEffect, useState } from "react";
import InterModuleFlow from "./InterModuleFlow.jsx";

export default function PanoFlowBridge({ onFlow }) {
  const [flowData, setFlowData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // InterModuleFlow içindeki veriyi çekiyoruz
      const data = window.__YKOS_FLOW__;
      if (data) {
        setFlowData(data);
        onFlow(data); // Pano’ya gönderiyoruz
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ color: "#0f0", marginTop: "10px" }}>
      Akış Pano’ya bağlandı.
    </div>
  );
}
