// src/components/ReadingPanel.jsx
import React, { useState, useEffect } from "react";
import { translations } from "../data/i18n";

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
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      setAdminRecords(saved);
    } catch (e) {
      console.error(e);
    }
  }, []);

  let currentItem = null;

  if (content) {
    if (typeof content === "object") {
      currentItem = content;
    } else {
      currentItem = adminRecords.find(
        (r) => String(r.id) === String(content) ||
               (r.title && r.title.toLowerCase().includes(String(content).toLowerCase())) ||
               (r.baslik && r.baslik.toLowerCase().includes(String(content).toLowerCase()))
      );
    }
  }

  if (!currentItem) {
    const t = translations[currentLang] || translations["TR"];
    const allStaticItems = [...(t.verifiedItems || []), ...(t.cards || []), ...(t.analizler || [])];
    
    if (content) {
      const searchKey = typeof content === "object" ? (content.id || content.title || content.baslik) : content;
      currentItem = allStaticItems.find(
        (item) => String(item.id) === String(searchKey) ||
                  (item.title && String(searchKey).toLowerCase().includes(item.title.toLowerCase())) ||
                  (item.title && item.title.toLowerCase().includes(String(searchKey).toLowerCase())) ||
                  (item.baslik && String(searchKey).toLowerCase().includes(item.baslik.toLowerCase()))
      );
    }

    if (!currentItem && allStaticItems.length > 0) {
      currentItem = allStaticItems[0];
    }
  }

  if (!currentItem) {
    currentItem = readsData[0];
  }

  const itemTitle = currentItem.title || currentItem.baslik || currentItem.name || "Başlıksız Kayıt";
  const itemCategory = currentItem.category || currentItem.icerikTuru || currentItem.kategori || currentItem.tag || "YKOS Çözümleme Arşivi";
  const itemContent = currentItem.content || currentItem.icerik || currentItem.kapsamliAnaliz || currentItem.summary || currentItem.ozet || currentItem.aciklama || currentItem.desc || currentItem.detay || "Bu içerik için henüz kapsamlı analiz metni girilmemiştir.";
  const itemImage = currentItem.image || currentItem.kapakGorseli || currentItem.gorsel || currentItem.imageUrl || currentItem.resim || "";
  const itemVideo = currentItem.videoUrl || currentItem.video || currentItem.videoBaglantisi || "";

  const videoEmbedUrl = getEmbedUrl(itemVideo);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Bağlantı panoya kopyalandı! Dilediğiniz yerde paylaşabilirsiniz.");
  };

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "20px", color: "#fff", fontFamily: "Segoe UI, sans-serif", boxSizing: "border-box" }}>
      <div
        style={{
          backgroundColor: "#050811",
          border: "1.5px solid #ffd700",
          borderRadius: "14px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgba(255, 215, 0, 0.3)",
            paddingBottom: "20px",
            marginBottom: "25px"
          }}
        >
          {/* ÜST KISIM: KATEGORİ VE PAYLAŞ BUTONU */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <span
              style={{
                backgroundColor: "rgba(255, 215, 0, 0.15)",
                color: "#ffd700",
                border: "1.5px solid #ffd700",
                padding: "5px 14px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "bold"
              }}
            >
              {itemCategory}
            </span>

            <button
              onClick={handleShare}
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                border: "1.5px solid #38bdf8",
                color: "#38bdf8",
                padding: "6px 16px",
                borderRadius: "6px",
                fontSize: "0.8rem",
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

          <h1 style={{ color: "#ffd700", fontSize: "2.1rem", margin: "18px 0 8px 0", fontWeight: "900" }}>
            {itemTitle}
          </h1>

          <div style={{ fontSize: "0.9rem", color: "#38bdf8", display: "flex", gap: "20px" }}>
            {currentItem.period && <span>⏳ {currentItem.period}</span>}
            {currentItem.location && <span>📍 {currentItem.location}</span>}
            {currentItem.date && <span>📅 {currentItem.date}</span>}
          </div>
        </div>

        {/* 🖼️ MANŞET GÖRSELİ VE BÜYÜTME (ZOOM) ÖZELLİĞİ */}
        {itemImage && (
          <div style={{ marginBottom: "25px", textAlign: "center" }}>
            <img
              src={itemImage}
              alt={itemTitle}
              onClick={() => setIsZoomed(true)}
              style={{ 
                maxWidth: "100%", 
                maxHeight: "480px", 
                borderRadius: "10px", 
                border: "1.5px solid #ffd700", 
                objectFit: "cover",
                cursor: "zoom-in",
                transition: "transform 0.2s ease"
              }}
              title="Görseli büyütmek için tıklayın"
            />
            <span style={{ display: "block", color: "#94a3b8", fontSize: "0.75rem", marginTop: "8px" }}>
              🔍 Görseli tam ekran büyütmek için üzerine tıklayın
            </span>
          </div>
        )}

        {/* 🔍 TIKLANINCA AÇILAN TAM EKRAN BÜYÜK GÖRSEL MODALI */}
        {isZoomed && (
          <div 
            onClick={() => setIsZoomed(false)}
            style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
              backdropFilter: "blur(10px)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              cursor: "zoom-out"
            }}
          >
            <div style={{ position: "relative", maxWidth: "92vw", maxHeight: "92vh" }} onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setIsZoomed(false)}
                style={{
                  position: "absolute", top: "-45px", right: "0",
                  background: "#ef4444", color: "#fff", border: "none",
                  padding: "6px 14px", borderRadius: "6px", fontWeight: "bold",
                  cursor: "pointer", fontSize: "0.9rem", zIndex: 100000
                }}
              >
                Kapat ✕
              </button>
              <img 
                src={itemImage} 
                alt="Büyük Görsel" 
                style={{
                  maxWidth: "100%",
                  maxHeight: "88vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                  border: "2px solid #ffd700",
                  boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
                  display: "block",
                  margin: "0 auto"
                }}
              />
            </div>
          </div>
        )}

        {/* Detay ve Çözümleme Metni */}
        <div
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.85",
            color: "#e2e8f0",
            whiteSpace: "pre-line"
          }}
        >
          {String(itemContent).includes("<") ? (
            <div dangerouslySetInnerHTML={{ __html: itemContent }} />
          ) : (
            itemContent
          )}
        </div>

        {/* 🎥 VİDEO OYNATICI */}
        {videoEmbedUrl && (
          <div style={{ marginTop: "35px", borderTop: "1px solid rgba(255, 215, 0, 0.3)", paddingTop: "25px" }}>
            <h3 style={{ color: "#ffd700", fontSize: "1.15rem", marginBottom: "15px", textTransform: "uppercase", fontWeight: "bold" }}>
              🎥 İlgili Sunum / Video Arşivi
            </h3>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px", border: "1.5px solid #ffd700" }}>
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
