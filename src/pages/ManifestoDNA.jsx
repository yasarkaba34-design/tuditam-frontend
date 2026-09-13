// src/pages/ManifestoDNA.jsx
import React from "react";

export default function ManifestoDNA({ onGoHome }) {
  const layers = [
    {
      num: "01",
      title: "SES",
      symbols: "Göbeklitepe T-Sütunu Morfolojisi",
      desc: "Anlamın ilk titreşimi",
      bg: "linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(15, 23, 42, 0.8))",
      border: "#d97706",
      tag: "MÖ 10.000"
    },
    {
      num: "02",
      title: "KÖK",
      symbols: "Hatti – Hitit – Luwi Formları",
      desc: "Sesin biçimlenmiş hali",
      bg: "linear-gradient(135deg, rgba(180, 83, 9, 0.12), rgba(15, 23, 42, 0.8))",
      border: "#b45309",
      tag: "MÖ 2500 - 1200"
    },
    {
      num: "03",
      title: "HECE",
      symbols: "Frig – Lidya – Helen Epigrafisi",
      desc: "Kökün yapısal birimi",
      bg: "linear-gradient(135deg, rgba(146, 64, 14, 0.12), rgba(15, 23, 42, 0.8))",
      border: "#92400e",
      tag: "MÖ 1200 - 300"
    },
    {
      num: "04",
      title: "KELİME",
      symbols: "Roma – Selçuklu Katmanı",
      desc: "Hece’nin anlam inşası",
      bg: "linear-gradient(135deg, rgba(120, 53, 15, 0.12), rgba(15, 23, 42, 0.8))",
      border: "#78350f",
      tag: "MS 300 - 1300"
    },
    {
      num: "05",
      title: "DİL (TÜRKÇE)",
      symbols: "Modern Türkçenin Algoritmik Formu",
      desc: "KÖKHECE’nin güncel hali",
      bg: "linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(8, 11, 20, 0.95))",
      border: "#f59e0b",
      tag: "GÜNÜMÜZ"
    }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "860px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* ÜST BUTON */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <button
          onClick={onGoHome}
          style={{
            background: "rgba(245, 158, 11, 0.1)",
            border: "1.5px solid #f59e0b",
            color: "#f59e0b",
            padding: "8px 18px",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "0.85rem",
            cursor: "pointer"
          }}
        >
          🏠 Anasayfaya Dön
        </button>
        <span style={{ fontSize: "0.78rem", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase" }}>
          YKOS BİLİMSEL MANİFESTO SERİSİ • NO: 01
        </span>
      </div>

      {/* MANİFESTO POSTER GÖVDESİ */}
      <div style={{
        background: "#080c16",
        border: "2px solid #d97706",
        borderRadius: "16px",
        padding: "36px 28px",
        boxShadow: "0 0 50px rgba(217, 119, 6, 0.15), inset 0 0 80px rgba(0, 0, 0, 0.9)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "20px", right: "24px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "0.85rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.65rem", letterSpacing: "1px" }}>Yaşar Kaba Okuma Sistemi</div>
        </div>

        {/* ÜST BAŞLIK ALANI */}
        <div style={{ textAlign: "center", marginTop: "10px", marginBottom: "32px" }}>
          <div style={{ color: "#d97706", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>
            ANADOLU EPİSTEMOLOJİK DİL MATRİSİ
          </div>
          <h1 style={{
            color: "#f8fafc",
            fontSize: "1.9rem",
            fontWeight: "900",
            letterSpacing: "2px",
            lineHeight: "1.25",
            margin: "0 0 10px 0",
            textShadow: "0 2px 20px rgba(245, 158, 11, 0.3)"
          }}>
            KÖKHECE → TÜRKÇE
          </h1>
          <div style={{ color: "#f59e0b", fontSize: "1.1rem", fontWeight: "700", letterSpacing: "1.5px" }}>
            DİLİN DNA’SINI OLUŞTURAN 5 KATMAN
          </div>
        </div>

        {/* ORTA BÖLÜM: DİKEY DNA VE 5 KATMAN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative", marginBottom: "36px" }}>
          
          {/* DİKEY ENERJİ AKIŞ ÇİZGİSİ */}
          <div style={{
            position: "absolute",
            left: "24px",
            top: "20px",
            bottom: "20px",
            width: "3px",
            background: "linear-gradient(to bottom, #f59e0b, #d97706, #78350f)",
            boxShadow: "0 0 12px #f59e0b",
            zIndex: 1
          }} />

          {layers.map((layer, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                background: layer.bg,
                border: `1px solid ${layer.border}`,
                borderRadius: "10px",
                padding: "16px 20px",
                position: "relative",
                zIndex: 2,
                backdropFilter: "blur(4px)"
              }}
            >
              {/* NUMARA VE DÜĞÜM NOKTASI */}
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#080c16",
                border: `2px solid ${layer.border}`,
                color: "#f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.85rem",
                flexShrink: 0,
                boxShadow: `0 0 10px ${layer.border}66`
              }}>
                {layer.num}
              </div>

              {/* KATMAN İÇERİĞİ */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ color: "#f8fafc", fontWeight: "900", fontSize: "1.05rem", letterSpacing: "1px" }}>
                    {layer.title}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "0.7rem", fontWeight: "bold", background: "rgba(0,0,0,0.5)", padding: "2px 8px", borderRadius: "4px", border: "1px solid #334155" }}>
                    {layer.tag}
                  </span>
                </div>
                <div style={{ color: "#d97706", fontSize: "0.82rem", fontWeight: "600", marginBottom: "2px" }}>
                  {layer.symbols}
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "0.85rem", fontStyle: "italic" }}>
                  “{layer.desc}”
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALT MANİFESTO METNİ */}
        <div style={{
          borderTop: "1px solid rgba(217, 119, 6, 0.3)",
          borderBottom: "1px solid rgba(217, 119, 6, 0.3)",
          padding: "18px 12px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(217, 119, 6, 0.03)"
        }}>
          <p style={{ margin: "0 0 6px 0", fontSize: "1rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.5px" }}>
            “Dil, sesin anlamla buluştuğu bilişsel bir yolculuktur.”
          </p>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#f59e0b", fontWeight: "bold", letterSpacing: "0.5px" }}>
            “Türkçe, Göbeklitepe’de başlayan bu yolculuğun bugünkü halidir.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{
            background: "linear-gradient(90deg, #d97706, #b45309)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.75rem",
            letterSpacing: "1.2px",
            padding: "8px 14px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK SES–KÖK–HECE–KELİME–DİL DNA YOLCULUĞU
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu manifesto, Anadolu’nun dilsel hafızasının görsel kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
