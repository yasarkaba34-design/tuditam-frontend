// FILE: src/matrices/Matrix.jsx
import React, { useEffect, useState } from "react";

// MetaKatman JSON
import metaLayer from "./meta/MetaLayer.json";

// Alt modüller
import M8 from "./m8.jsx";
import M11 from "./m11.jsx";
import M12 from "./m12.jsx";
import HecePanel from "../components/HecePanel";
import FluxPanel from "../flux/FluxPanel";
import EvaluatorPanel from "../evaluator/EvaluatorPanel";
import UnifiedPanel from "../yunified/UnifiedPanel";
import AtlasMap from "../../data/atlas/AtlasMap";
import CoreDashboard from "../dashboard/CoreDashboard";
import DFlow from "../dflow/DFlow";
import Kernel from "../kernel/Kernel";
import RTE from "../runtime/RTE";

export default function Matrix() {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    setMeta(metaLayer);
  }, []);

  const matrices = [
    { id: "m8", component: <M8 meta={metaLayer} /> },
    { id: "m11", component: <M11 meta={metaLayer} /> },
    { id: "m12", component: <M12 meta={metaLayer} /> },
  ];

  return (
    <div style={{ background: "#111", color: "gold", padding: "20px" }}>
      <h2>⚡ YKOS Matrix Engine</h2>

      <section>
        <h3>MetaLayer</h3>
        <pre style={{ fontFamily: "Courier New", fontSize: "14px" }}>
          {JSON.stringify(meta, null, 2)}
        </pre>
      </section>

<section>
  <h3>AtlasMap</h3>
  <AtlasMap data={atlasData} />
</section>

      <section>
        <h3>Matris Modülleri</h3>
        {matrices.map((m) => (
          <div key={m.id} style={{ marginBottom: "20px" }}>
            <h4>{m.id.toUpperCase()}</h4>
            {m.component}
          </div>
        ))}
      </section>

      <section>
        <h3>YKOS Panelleri</h3>
        <HecePanel />
        <FluxPanel />
        <EvaluatorPanel />
        <UnifiedPanel />
        <AtlasMap />
        <CoreDashboard />
        <DFlow />
        <Kernel />
        <RTE />
      </section>
    </div>
  );
}
// Matris verilerini AtlasMap'e gönderen köprü
const atlasData = matrices.map((m) => ({
  id: m.id,
  label: m.id.toUpperCase(),
  coords: metaLayer?.coordinates?.[m.id] || null,
  payload: metaLayer?.payloads?.[m.id] || null
}));
