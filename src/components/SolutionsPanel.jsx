// src/components/SolutionsPanel.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function SolutionsPanel({ solutions = [], onNavigateMatrix = () => {} }) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "14px",
        background: "rgba(255, 215, 0, 0.03)",
        borderRadius: "8px",
        border: "1.5px solid rgba(255, 215, 0, 0.3)"
      }}
    >
      {/* PANEL BAŞLIK */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1.5px solid #ffd700",
          paddingBottom: "6px"
        }}
      >
        <span
          style={{
            color: "#ffd700",
            fontSize: "0.9rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          ⚡ {t("solutionsTitle")}
        </span>

        <span
          style={{
            background: "#ffd700",
            color: "#000",
            fontSize: "8.5px",
            fontWeight: "900",
            padding: "2px 6px",
            borderRadius: "3px"
          }}
        >
          {t("liveArchive")}
        </span>
      </div>

      {/* ÇÖZÜM KARTLARI */}
      {solutions.map((sol, idx) => (
        <div
          key={`solution-${idx}`}
          onClick={() => onNavigateMatrix(sol.id)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            background: "#0c101d",
            border: "1px solid rgba(255, 215, 0, 0.25)",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ffd700";
            e.currentTarget.style.background = "rgba(255, 215, 0, 0.15)";
            e.currentTarget.style.transform = "translateX(2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.25)";
            e.currentTarget.style.background = "#0c101d";
            e.currentTarget.style.transform = "none";
          }}
        >
          <h4
            style={{
              margin: 0,
              fontSize: "0.78rem",
              color: "#ffd700",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {sol.title || sol.baslik}
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: "0.66rem",
              color: "#ccc",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {sol.summary || sol.ozet}
          </p>
        </div>
      ))}
    </div>
  );
}
