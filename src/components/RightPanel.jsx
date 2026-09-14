import React from "react";
import { useTranslation } from "react-i18next";

export default function RightPanel({ adminRecords = [], onNavigateRead = () => {}, onNavigateAcikVeri = () => {} }) {
  const { t, i18n } = useTranslation();

  const defaultItems = (t("verifiedItems", { returnObjects: true }) || []).map((item) => ({
    ...item,
    onClick: () => (item.id === "ACIK-VERI" ? onNavigateAcikVeri() : onNavigateRead(item.id))
  }));

  const dynamicItems = adminRecords.map((rec) => ({
    id: rec.id,
    title: rec.title || rec.baslik,
    desc: rec.summary || rec.ozet,
    tag: rec.category || rec.kategori || t("publishBadge"),
    icon: "📑",
    onClick: () => onNavigateRead(rec.id)
  }));

  const displayItems = [...dynamicItems, ...defaultItems].slice(0, 4);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#ffd700", fontWeight: "bold" }}>📑 {t("approvedTitle")}</span>
        <span style={{ background: "#ffd700", color: "#000", fontSize: "8.5px", fontWeight: "900", padding: "2px 6px", borderRadius: "3px" }}>
          {t("publishBadge")}
        </span>
      </div>

      {displayItems.map((item, idx) => (
        <div key={idx} onClick={item.onClick} style={{ cursor: "pointer", border: "1px solid #ffd700", borderRadius: "6px", padding: "10px" }}>
          <h4 style={{ margin: 0, color: "#ffd700" }}>{item.title}</h4>
          <p style={{ margin: 0, color: "#ccc" }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
