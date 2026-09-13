// src/components/ReadingPanel.jsx
import React, { useState, useEffect } from "react";
import { translations } from "../data/i18n";

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

  // Kayıt bulma mekanizması (Admin kayıtları + Statik/Onaylı akış verileri)
  let currentItem = null;

  if (content) {
    if (typeof content === "object") {
      // 1. Önce admin kayıtlarında ara
      currentItem = adminRecords.find(
        (r) => String(r.id) === String(content.id || content.title || content.baslik) ||
               (r.title && content.title && r.title.toLowerCase() === content.title.toLowerCase()) ||
               (r.baslik && content.baslik && r.baslik.toLowerCase() === content.baslik.toLowerCase())
      );
    } else {
      currentItem = adminRecords.find(
        (r) => String(r.id) === String(content) ||
               (r.title && r.title.toLowerCase().includes(String(content).toLowerCase())) ||
               (r.baslik && r.baslik.toLowerCase().includes(String(content).toLowerCase()))
      );
    }
  }

  // 2. Eğer admin kayıtlarında bulunamadıysa statik/onaylı akıştan (i18n) bulmaya çalış
  if (!currentItem) {
    const t = translations[currentLang] || translations["TR"];
    const allStaticItems = [...(t.verifiedItems || []), ...(t.cards || [])];
    
    if (content) {
      const searchKey = typeof content === "object" ? (content.id || content.title) : content;
      currentItem = allStaticItems.find(
        (item) => String(item.id) === String(searchKey) ||
                  (item.title && String(searchKey).toLowerCase().includes(item.title.toLowerCase())) ||
                  (item.title && item.title.toLowerCase().includes(String(searchKey).toLowerCase()))
      );
    }

    // Eğer hâlâ bulunamadıysa statik listesinden ilkini al
    if (!currentItem && allStaticItems.length > 0) {
      currentItem = allStaticItems[0];
    }
  }

  // 3. Son çare varsayılan veri
  if (!currentItem) {
    currentItem = readsData[0];
  }

  const itemTitle = currentItem.title || currentItem.baslik || "Başlıksız Kayıt";
  const itemCategory = currentItem.category || currentItem.icerikTuru || currentItem.kategori || currentItem.tag || "YKOS Arşiv";
  
  // İçerik metni (admin contenti veya statik desc / summary)
  const itemContent = currentItem.content || currentItem.icerik || currentItem.kapsamliAnaliz || currentItem.summary || currentItem.ozet || currentItem.aciklama || currentItem.desc || "Bu içerik için detaylı metin henüz eklenmemiştir.";
  
  const itemImage = currentItem.image || currentItem.kapakGorseli || currentItem.gorsel || currentItem.imageUrl || currentItem.resim || "";
  const itemVideo = currentItem.videoUrl || currentItem.video || currentItem.videoBaglantisi || "";

  const videoEmbedUrl = getEmbedUrl(itemVideo);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Bağlantı panoya kopyalandı! Dilediğiniz yerde paylaşabilirsiniz.");
  };

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

            <button
              onClick={handleShare}
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1px solid #38bdf8",
                color: "#38bdf8",
                padding: "5px 14px",
                borderRadius: "6px",
                fontSize: "0.78rem",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              📤 Bu İçeriği Paylaş
            </button>
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
