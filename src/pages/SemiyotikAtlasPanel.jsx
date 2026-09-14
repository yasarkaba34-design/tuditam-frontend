// src/pages/SemiyotikAtlasPanel.jsx
import React from "react";

export default function SemiyotikAtlasPanel({ onGoHome }) {
  const semioticLayers = [
    {
      id: "L1",
      layer: "1. Göbeklitepe",
      title: "İlk Ses Sembolü",
      epoch: "MÖ 10.000",
      accent: "#f59e0b",
      icon: "☀️",
      desc: "Anlam öncesi ilk titreşim ve monolitik kabartma ikonografisi."
    },
    {
      id: "L2",
      layer: "2. Hatti – Hitit – Luwi",
      title: "Kök Sembolleri",
      epoch: "MÖ 2500 – 1200",
      accent: "#d97706",
      icon: "⚡",
      desc: "Anadolu hiyeroglif ve çivi yazılı ontolojik kök morfemleri."
    },
    {
      id: "L3",
      layer: "3. Frig – Lidya – Helen",
      title: "Hece Sembolleri",
      epoch: "MÖ 1200 – 300",
      accent: "#b45309",
      icon: "🏛️",
      desc: "Fonetik hece yapılarının taş ve sikke üzerine aktarılan semiyotik formu."
    },
    {
      id: "L4",
      layer: "4. Roma – Selçuk",
      title: "Kelime Sembolleri",
      epoch: "MS 300 – 1300",
      accent: "#92400e",
      icon: "📜",
      desc: "Kavramsal inşa, mimari kitabeler ve soyut geometrik damgalar."
    },
    {
      id: "L5",
      layer: "5. Türkçe",
      title: "Modern Dil Sembolleri",
      epoch: "GÜNÜMÜZ",
      accent: "#00ff7f",
      icon: "🌐",
      desc: "12.000 yıllık ses ve kök matrisinin yaşayan algoritmik semiyotiği."
    }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "880px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* ÜST GEZİNME */}
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
          YKOS SEMİYOTİK ATLAS SERİSİ • PANEL 02
        </span>
      </div>

      {/* ATLAS AFİŞ GÖVDESİ */}
      <div style={{
        background: "#050811",
        border: "2px solid #d97706",
        borderRadius: "16px",
        padding: "36px 28px",
        boxShadow: "0 0 50px rgba(217, 119, 6, 0.15), inset 0 0 90px rgba(0, 0, 0, 0.95)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "20px", right: "24px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "0.85rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.65rem", letterSpacing: "1px" }}>Semiyotik Dil Atlası</div>
        </div>

        {/* BAŞLIK ALANI */}
        <div style={{ textAlign: "center", marginTop: "8px", marginBottom: "30px" }}>
          <div style={{ color: "#d97706", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            KÖKHECE → TÜRKÇE
          </div>
          <h1 style={{
            color: "#f8fafc",
            fontSize: "2rem",
            fontWeight: "900",
            letterSpacing: "2.5px",
            lineHeight: "1.2",
            margin: "0 0 6px 0",
            textShadow: "0 0 25px rgba(245, 158, 11, 0.35)"
          }}>
            SEMİYOTİK ATLAS
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.82rem", letterSpacing: "1px" }}>
            Anadolu Uygarlıklarının Çok Katmanlı Sembolik Matrisi
          </div>
        </div>

        {/* MERKEZİ SEMİYOTİK KÜRE VE ENERJİ HALKALARI */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          margin: "30px 0",
          minHeight: "260px"
        }}>
          {/* DIŞ ENERJİ HALKASI */}
          <div style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "1.5px dashed rgba(245, 158, 11, 0.4)",
            boxShadow: "0 0 30px rgba(217, 119, 6, 0.2)"
          }} />

          {/* ORTA HALKA */}
          <div style={{
            position: "absolute",
            width: "190px",
            height: "190px",
            borderRadius: "50%",
            border: "1.5px solid rgba(245, 158, 11, 0.6)",
            background: "radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)"
          }} />

          {/* ÇEKİRDEK KÜRE */}
          <div style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 60%, #080c16 95%)",
            boxShadow: "0 0 35px rgba(245, 158, 11, 0.6), inset -5px -5px 15px rgba(0,0,0,0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
            border: "2px solid #ffd700"
          }}>
            <span style={{ fontSize: "1.4rem" }}>🌌</span>
            <span style={{ fontSize: "0.68rem", fontWeight: "900", color: "#fff", letterSpacing: "1px", marginTop: "2px" }}>
              SEMİYOTİK<br />KÜRE
            </span>
          </div>
        </div>

        {/* 5 SEMİYOTİK KATMAN LİSTESİ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
          {semioticLayers.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(15, 23, 42, 0.6)",
                border: `1px solid ${item.accent}55`,
                borderRadius: "8px",
                padding: "12px 16px",
                backdropFilter: "blur(4px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ color: item.accent, fontWeight: "900", fontSize: "0.9rem" }}>{item.layer}</span>
                    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.85rem" }}>— {item.title}</span>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "2px" }}>{item.desc}</div>
                </div>
              </div>
              <span style={{
                background: "#080c16",
                color: item.accent,
                border: `1px solid ${item.accent}66`,
                fontSize: "0.68rem",
                fontWeight: "bold",
                padding: "3px 8px",
                borderRadius: "4px",
                whiteSpace: "nowrap"
              }}>
                {item.epoch}
              </span>
            </div>
          ))}
        </div>

        {/* ALT MANİFESTO METNİ */}
        <div style={{
          borderTop: "1px solid rgba(217, 119, 6, 0.3)",
          borderBottom: "1px solid rgba(217, 119, 6, 0.3)",
          padding: "16px 12px",
          textAlign: "center",
          marginBottom: "22px",
          background: "rgba(217, 119, 6, 0.03)"
        }}>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Anadolu’nun ses, kök, hece ve kelime hafızası; Türkçe’nin semiyotik atlasında birleşir.”
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
            12.000 YILLIK SEMİYOTİK DİL HAFIZASI
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu atlas, dilin görsel-semiyotik hafızasının kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}