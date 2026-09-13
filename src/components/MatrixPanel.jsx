import { useState } from "react";
import "./MatrixPanel.css";

/**
 * MatrixPanel
 * YKOS Matris düğümlerinin detaylarını gösteren modüler panel.
 * Props:
 *  - node: aktif düğüm (id, label, data)
 *  - onClose: paneli kapatma işlevi
 */
export default function MatrixPanel({ node, onClose }) {
  const [activeTab, setActiveTab] = useState("ozet");

  const tabs = [
    { id: "ozet", label: "Özet" },
    { id: "baglam", label: "Bağlam" },
    { id: "semantik", label: "Semantik" },
    { id: "damga", label: "Damga" },
    { id: "dil", label: "Dil" },
    { id: "referans", label: "Referans" },
  ];

  return (
    <div className="ykos-panel">
      <div className="panel-header">
        <h2>{node.label}</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="panel-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="panel-content">
        {activeTab === "ozet" && <p>{node.data.summary}</p>}
        {activeTab === "baglam" && <p>{node.data.context}</p>}
        {activeTab === "semantik" && <p>{node.data.semantic}</p>}
        {activeTab === "damga" && <p>{node.data.symbol}</p>}
        {activeTab === "dil" && <p>{node.data.language}</p>}
        {activeTab === "referans" && <p>{node.data.references}</p>}
      </div>
    </div>
  );
}
