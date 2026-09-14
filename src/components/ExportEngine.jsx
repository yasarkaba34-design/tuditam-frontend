import React from "react";
import { YKOS_ROOTS } from "../data/ykos_roots";
import { YKOS_GEO } from "../data/ycos_geo";
import { YKOS_LAYERS } from "./LayerSystem";

export default function ExportEngine() {

  const exportJSON = (name, data) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.json`;
    a.click();
  };

  const exportAll = () => {
    const logs = JSON.parse(localStorage.getItem("ykos_logs") || "[]");

    const fullPackage = {
      roots: YKOS_ROOTS,
      geo: YKOS_GEO,
      layers: YKOS_LAYERS,
      logs
    };

    exportJSON("YKOS_FULL_PACKAGE", fullPackage);
  };

  return (
    <div className="dashboard-card">
      <h2>📦 Export Motoru</h2>

      <button onClick={() => exportJSON("YKOS_ROOTS", YKOS_ROOTS)}>Kök Veri Seti</button>
      <button onClick={() => exportJSON("YKOS_GEO", YKOS_GEO)}>Atlas Koordinatları</button>
      <button onClick={() => exportJSON("YKOS_LAYERS", YKOS_LAYERS)}>Katman Sınıfları</button>
      <button onClick={() => exportJSON("YKOS_LOGS", JSON.parse(localStorage.getItem("ykos_logs") || "[]"))}>
        Kullanım Kayıtları
      </button>

      <button onClick={exportAll} style={{ marginTop: "20px", background: "#2E7D32", color: "#fff" }}>
        ⭐ Tam YKOS Paketi
      </button>
    </div>
  );
}
