// src/components/ReadingPanel.jsx
import React, { useState, useEffect } from "react";
import { translations } from "../data/i18n";
import { defaultArchiveArticles } from "../data/ykosDataService";
import ShareButtons from "./ShareButtons";

// Sizin hazırladığınız temiz ve kararlı embed dönüştürücü fonksiyon
export const getEmbedUrl = (url) => {
  if (!url) return null;
  let id = "";
  if (url.includes("youtu.be/")) {
    id = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("v=")) {
    id = url.split("v=")[1].split("&")[0];
  } else if (url.includes("embed/")) {
    id = url.split("embed/")[1].split("?")[0];
  }
  return id ? `https://www.youtube.com/embed/${id}` : url;
};

const readsData = [
  {
    id: 1,
    title: "Göbeklitepe T-Sütunu YKOS Okuması",
    category: "Arkeolojik Okuma Katmanı",
    period: "M.Ö. 9600",
    location: "Şanlıurfa, Anadolu",
    summary: "Göbeklitepe T-sütunları üzerindeki ikil sembollerin YKOS kök hece ve damga yöntemiyle okunması.",
    content: `Göbeklitepe T-sütunları üzerinde yer alan 'H' ve 'C' piktogramları ile hayvan rölyefleri, geleneksel arkeolojik yaklaşımların aksine birer süsleme değil, Ön-Türkçe kök hece dizgesine dayalı kavramsal metinlerdir.`
  }
];

export default function ReadingPanel({ content, currentLang = "TR" }) {
  const [adminRecords, setAdminRecords] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      setAdminRecords(saved);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const t = translations[currentLang] || translations["TR"];
  const staticItems = [...(t.verifiedItems || []), ...(t.cards || [])];
  const requestedId = typeof content === "object"
    ? content?.id
    : content;
  const requestedTitle = typeof content === "object"
    ? (content?.title || content?.baslik)
    : null;

  const currentItem = content
    ? adminRecords.find((record) => String(record.id) === String(requestedId)) ||
      defaultArchiveArticles.find((item) => String(item.id) === String(requestedId)) ||
      staticItems.find((item) => String(item.id) === String(requestedId)) ||
      adminRecords.find((record) => (record.title || record.baslik) === String(requestedId)) ||
      defaultArchiveArticles.find((item) => item.title === String(requestedId)) ||
      staticItems.find((item) => item.title === String(requestedId)) ||
      (requestedTitle
        ? adminRecords.find((record) => (record.title || record.baslik) === requestedTitle) ||
          defaultArchiveArticles.find((item) => item.title === requestedTitle) ||
          staticItems.find((item) => item.title === requestedTitle)
        : null)
    : null;

  if (!currentItem) {
    return (
      <div style={{ padding: "28px 20px", color: "#e2e8f0", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ background: "#050811", border: "1.5px solid #ffd700", borderRadius: "12px", padding: "25px" }}>
          <h1 style={{ color: "#ffd700", marginTop: 0 }}>İçerik bulunamadı</h1>
          <p>Bu bağlantıdaki kayıt bu sitede yayımlanmıyor ya da adresi değişmiş olabilir.</p>
          <a href="/" style={{ color: "#38bdf8" }}>TÜDİTAM’a dön</a>
        </div>
      </div>
    );
  }

  const itemTitle = currentItem.title || currentItem.baslik || "Başlıksız Kayıt";
  const itemCategory = currentItem.category || currentItem.icerikTuru || currentItem.kategori || currentItem.tag || "YKOS Arşiv";
  
  // İçerik metni (admin contenti veya statik desc / summary)
  const itemContent = currentItem.content || currentItem.icerik || currentItem.kapsamliAnaliz || currentItem.summary || currentItem.ozet || currentItem.aciklama || currentItem.desc || "Bu içerik için detaylı metin henüz eklenmemiştir.";
  
  const itemImage = currentItem.image || currentItem.kapakGorseli || currentItem.gorsel || currentItem.imageUrl || currentItem.resim || "";
  const itemVideo = currentItem.videoUrl || currentItem.video || currentItem.videoBaglantisi || "";

  const videoEmbedUrl = getEmbedUrl(itemVideo);


  return (
    <div style={{ padding: "20px", color: "#fff", fontFamily: "Segoe UI, sans-serif", maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          backgroundColor: "#050811",
          border: "1.5px solid #ffd700",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgba(255, 215, 0, 0.3)",
            paddingBottom: "15px",
            marginBottom: "20px"
          }}
        >
          {/* ÜST KISIM: KATEGORİ VE PAYLAŞ BUTONU */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <span
              style={{
                backgroundColor: "rgba(255, 215, 0, 0.15)",
                color: "#ffd700",
                border: "1px solid #ffd700",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "bold"
              }}
            >
              {itemCategory}
            </span>


          </div>

          <h1 style={{ color: "#ffd700", fontSize: "1.8rem", margin: "15px 0 6px 0" }}>
            {itemTitle}
          </h1>

          <div style={{ fontSize: "0.85rem", color: "#38bdf8", display: "flex", gap: "15px" }}>
            {currentItem.period && <span>⏳ {currentItem.period}</span>}
            {currentItem.location && <span>📍 {currentItem.location}</span>}
            {currentItem.date && <span>📅 {currentItem.date}</span>}
          </div>
        </div>

        {/* Manşet Görseli */}
        {itemImage && (
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src={itemImage}
              alt={itemTitle}
              style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px", border: "1px solid #ffd700", objectFit: "cover" }}
            />
          </div>
        )}

        <ShareButtons title={itemTitle} />

        {/* Detay Metni */}
        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.7",
            color: "#e2e8f0",
            whiteSpace: "pre-line"
          }}
        >
          {itemContent.includes("<") ? (
            <div dangerouslySetInnerHTML={{ __html: itemContent }} />
          ) : (
            itemContent
          )}
        </div>

        {/* 🎥 VİDEO OYNATICI (Sayfanın En Altında) */}
        {videoEmbedUrl && (
          <div style={{ marginTop: "32px", borderTop: "1px solid rgba(255, 215, 0, 0.3)", paddingTop: "20px" }}>
            <h3 style={{ color: "#ffd700", fontSize: "1.1rem", marginBottom: "12px", textTransform: "uppercase" }}>
              🎥 İlgili Sunum / Video Arşivi
            </h3>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px", border: "1.5px solid #ffd700" }}>
              <iframe
                src={videoEmbedUrl}
                title="YKOS Video Oynatıcı"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
