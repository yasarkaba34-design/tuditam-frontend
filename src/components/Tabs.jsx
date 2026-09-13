import React from "react";
import "../styles/tabs.css";

const TABS = [
  { id: "m8", label: "m8 Matrisi", icon: "◆" },
  { id: "m11", label: "m11 Matrisi", icon: "◇" },
  { id: "m12", label: "m12 Matrisi", icon: "○" },
  { id: "dunya", label: "Dünya Atlası", icon: "🌐" },
  { id: "turkiye", label: "Türkiye Atlası", icon: "TR" },
];

export default function Tabs({
  activeTab,
  onTabSelect,
}) {
  return (
    <nav className="ykos-tabs" aria-label="Çalışma sekmeleri">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabSelect(tab.id)}
          className={
            activeTab === tab.id
              ? "ykos-tab-button active"
              : "ykos-tab-button"
          }
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}