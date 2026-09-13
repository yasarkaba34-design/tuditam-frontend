import { useState } from "react";
import MatrixPanel from "./MatrixPanel";
import ArchivePanel from "./ArchivePanel";
import "./PanelController.css";

/**
 * PanelController
 * YKOS sistemindeki iki paneli (MatrixPanel + ArchivePanel)
 * merkezi olarak yöneten üst bileşen.
 *
 * Props:
 *  - selectedNode: Matris'te tıklanan düğüm (null değilse MatrixPanel açılır)
 *  - archiveData: Canlı Arşiv listesi
 */
export default function PanelController({ selectedNode, archiveData }) {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="panel-controller">

      {/* MatrixPanel: sadece bir düğüm seçildiğinde açılır */}
      {selectedNode && (
        <MatrixPanel
          node={selectedNode}
          onClose={() => window.dispatchEvent(new Event("closeMatrixPanel"))}
        />
      )}

      {/* ArchivePanel: sol tarafta açılır */}
      {showArchive && (
        <ArchivePanel
          archive={archiveData}
          onClose={() => setShowArchive(false)}
        />
      )}

      {/* Alt kontrol butonları */}
      <div className="panel-controller-buttons">
        <button
          className="ykos-btn"
          onClick={() => setShowArchive(!showArchive)}
        >
          {showArchive ? "Arşivi Kapat" : "Arşivi Aç"}
        </button>
      </div>
    </div>
  );
}
