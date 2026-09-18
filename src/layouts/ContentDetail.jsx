import React, { useState, useEffect } from "react";
import { getEmbedUrl } from "../data/videoEmbed";
import { translations } from "../data/i18n";

export default function ContentDetail({ selectedId, currentLang = "TR" }) {
  const [record, setRecord] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ykos_admin_records") || "[]"
      );

      let found = null;

      // 1. Önce admin kayıtlarında ID ile ara
      if (selectedId) {
        found = saved.find(
          (r) => String(r.id) === String(selectedId)
        );

        // ID bulunamazsa başlık ile ara
        if (!found) {
          found = saved.find(
            (r) =>
              (r.title &&
                r.title.toLowerCase() ===
                  String(selectedId).toLowerCase()) ||
              (r.baslik &&
                r.baslik.toLowerCase() ===
                  String(selectedId).toLowerCase())
          );
        }
      }

      // 2. Statik içeriklerde ara
      if (!found) {
        const t = translations[currentLang] || translations["TR"];

        const allStaticItems = [
          ...(t.verifiedItems || []),
          ...(t.cards || [])
        ];

        found = allStaticItems.find(
          (item) =>
            String(item.id) === String(selectedId) ||
            (item.title &&
              item.title.toLowerCase() ===
                String(selectedId).toLowerCase())
        );
      }

      // 3. Son çare
      if (!found && saved.length > 0) {
        found = saved[0];
      }

      setRecord(found);
    } catch (e) {
      console.error("İçerik yükleme hatası:", e);
    }
  }, [selectedId, currentLang]);

  if (!record) {
    return (
      <div
        style={{
          padding: "30px",
          color: "#ffd700",
          textAlign: "center",
          fontFamily: "Segoe UI, sans-serif"
        }}
      >
        <h2>İçerik yükleniyor veya bulunamadı...</h2>
      </div>
    );
  }

  const title =
    record.title ||
    record.baslik ||
    "Başlıksız Kayıt";

  const category =
    record.category ||
    record.kategori ||
    record.tag ||
    "YKOS Arşiv";

  const videoUrl =
    record.videoUrl ||
    record.video ||
    record.videoBaglantisi ||
    "";

  // ANA METİN
  const content =
    record.content ||
    record.icerik ||
    record.kapsamliAnaliz ||
    record.summary ||
    record.ozet ||
    record.desc ||
    "Bu içerik için henüz detaylı metin girilmemiştir.";

  const imageUrl =
    record.image ||
    record.gorsel ||
    record.imageUrl ||
    record.resim ||
    "";

  // GALERİ
  const gallery =
    record.gallery ||
    record.galeri ||
    [];

  const embedUrl = getEmbedUrl(videoUrl);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Bağlantı panoya kopyalandı!");
  };

  return (
    <div
      className="content-detail"
      style={{
        padding: "20px",
        color: "#fff",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <div
        style={{
          backgroundColor: "#050811",
          border: "1.5px solid #ffd700",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)"
        }}
      >

        {/* KATEGORİ + PAYLAŞ */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px"
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(255,215,0,0.15)",
              color: "#ffd700",
              border: "1px solid #ffd700",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "bold"
            }}
          >
            {category}
          </span>

          <button
            onClick={handleShare}
            style={{
              backgroundColor: "rgba(56,189,248,0.15)",
              border: "1px solid #38bdf8",
              color: "#38bdf8",
              padding: "5px 14px",
              borderRadius: "6px",
              fontSize: "0.78rem",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            📤 Bu İçeriği Paylaş
          </button>
        </div>

        {/* BAŞLIK */}
        <h2
          style={{
            color: "#ffd700",
            fontSize: "1.8rem",
            margin: "18px 0"
          }}
        >
          {title}
        </h2>

        {/* ANA GÖRSEL */}
        {imageUrl && (
          <div
            style={{
              marginBottom: "25px",
              textAlign: "center"
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              onClick={() => setZoomImage(imageUrl)}
              title="Büyütmek için tıklayın"
              style={{
                maxWidth: "100%",
                maxHeight: "480px",
                borderRadius: "8px",
                border: "1.5px solid #ffd700",
                objectFit: "contain",
                cursor: "zoom-in"
              }}
            />
          </div>
        )}

        {/* ANA YAZI — EKSİK OLAN BÖLÜM */}
        <div
          style={{
            fontSize: "1rem",
            lineHeight: "1.85",
            color: "#f3f4f6",
            marginTop: "20px",
            marginBottom: "30px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word"
          }}
        >
          {content}
        </div>

        {/* ÇOKLU GÖRSEL GALERİ */}
        {gallery.length > 0 && (
          <div
            style={{
              borderTop: "1px solid rgba(255,215,0,0.25)",
              paddingTop: "20px",
              marginBottom: "30px"
            }}
          >
            <h3
              style={{
                color: "#ffd700",
                marginBottom: "15px"
              }}
            >
              🖼 Görsel Arşiv
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "12px"
              }}
            >
              {gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} - ${index + 1}`}
                  onClick={() => setZoomImage(img)}
                  title="Büyütmek için tıklayın"
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    border: "1px solid #ffd700",
                    borderRadius: "6px",
                    cursor: "zoom-in"
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* VİDEO */}
        {embedUrl && (
          <div
            style={{
              borderTop: "1px solid rgba(255,215,0,0.3)",
              paddingTop: "20px"
            }}
          >
            <h3
              style={{
                color: "#ffd700",
                fontSize: "1.1rem",
                marginBottom: "12px",
                textTransform: "uppercase"
              }}
            >
              🎥 İlgili Sunum / Video Arşivi
            </h3>

            <iframe
              width="100%"
              height="480"
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "8px",
                border: "1.5px solid #ffd700"
              }}
            />
          </div>
        )}

      </div>

      {/* TÜM GÖRSELLER İÇİN BÜYÜTME */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.94)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box",
            cursor: "zoom-out"
          }}
        >
          <img
            src={zoomImage}
            alt="Büyütülmüş görsel"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "92vh",
              objectFit: "contain",
              borderRadius: "8px",
              border: "2px solid #ffd700"
            }}
          />

          <button
            onClick={() => setZoomImage(null)}
            style={{
              position: "fixed",
              top: "20px",
              right: "25px",
              background: "#ffd700",
              color: "#000",
              border: "none",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}