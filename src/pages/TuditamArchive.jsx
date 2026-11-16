import React, { useEffect, useState } from "react";
import ArchivePanel from "../components/ArchivePanel";
import { defaultArchiveArticles } from "../data/ykosDataService";

function toArchiveItem(item, index, isLocal = false) {
  return {
    id: item.id || `local-${index}`,
    title: item.title || item.baslik || "Başlıksız kayıt",
    type: item.category || item.kategori || item.type || "Araştırma kaydı",
    date: item.date || item.tarih || item.createdAt || "",
    description: item.summary || item.ozet || item.description || item.desc || "",
    file: item.fileUrl || item.dosyaUrl || "",
  };
}

export default function TuditamArchive({ onClose = () => { window.location.assign("/"); } }) {
  const [localRecords, setLocalRecords] = useState([]);

  useEffect(() => {
    try {
      const records = JSON.parse(window.localStorage.getItem("ykos_admin_records") || "[]");
      setLocalRecords(records.filter((record) =>
        record.status === "published" ||
        record.status === "approved" ||
        record.durum === "onaylandi"
      ));
    } catch (error) {
      console.error("Arşiv kayıtları okunamadı:", error);
    }
  }, []);

  const archive = [
    ...defaultArchiveArticles.map((item, index) => toArchiveItem(item, index)),
    ...localRecords.map((item, index) => toArchiveItem(item, index, true)),
  ];

  return (
    <main style={{ minHeight: "100vh", padding: "16px", color: "#fff", background: "#030712" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <button
          type="button"
          onClick={onClose}
          style={{ background: "#111827", color: "#ffd700", border: "1px solid #ffd700", padding: "9px 14px", borderRadius: "7px", fontWeight: "800", cursor: "pointer", marginBottom: "12px" }}
        >
          ← Ana sayfaya dön
        </button>
        <ArchivePanel archive={archive} onClose={onClose} />
      </div>
    </main>
  );
}
