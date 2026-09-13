// src/layouts/MatrixLayout.jsx
import React from "react";
import { useTranslation } from "react-i18next";

import SolutionsPanel from "../components/SolutionsPanel";
import RightPanel from "../components/RightPanel";
import ConfirmedContentsPanel from "../components/ConfirmedContentsPanel";

export default function MatrixLayout({
  solutions = [],
  adminRecords = [],
  onNavigateMatrix = () => {},
  onNavigateRead = () => {},
  onNavigateAcikVeri = () => {}
}) {
  // DİL DEĞİŞİMİNİ TETİKLEYEN ANA NOKTA
  const { i18n } = useTranslation();
  const activeLang = i18n.language; // layout yeniden render olur

  return (
    <div
      key={activeLang} // DİL DEĞİŞİNCE LAYOUT TAMAMEN YENİDEN RENDER OLUR
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "14px",
        padding: "16px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      <SolutionsPanel
        solutions={solutions}
        onNavigateMatrix={onNavigateMatrix}
      />

      <ConfirmedContentsPanel
        records={adminRecords}
        onNavigateRead={onNavigateRead}
      />

      <RightPanel
        adminRecords={adminRecords}
        onNavigateRead={onNavigateRead}
        onNavigateAcikVeri={onNavigateAcikVeri}
      />
    </div>
  );
}
