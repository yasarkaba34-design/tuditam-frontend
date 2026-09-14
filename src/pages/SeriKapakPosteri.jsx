// src/pages/SeriKapakPosteri.jsx
import React from "react";

export default function SeriKapakPosteri({ onGoHome }) {
  const seriesIcons = [
    { name: "Spiral", icon: "🌀" },
    { name: "Zaman Şeridi", icon: "⏳" },
    { name: "Bilişsel Katman", icon: "🧠" },
    { name: "Manifesto", icon: "📜" },
    { name: "Semiyotik Atlas", icon: "🏛️" },
    { name: "Flux", icon: "⚡" },
    { name: "BubbleMatrix", icon: "🌌" },
    { name: "Mega Panel", icon: "📐" },
    { name: "DNA", icon: "🧬" },
    { name: "Mega Spiral", icon: "🪐" },
    { name: "Kapanış", icon: "☀️" }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "940px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* ÜST GEZİNME */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
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
          YKOS BİLİMSEL SERİ KORPUSU • RESMİ KAPAK
        </span>
      </div>

      {/* KAPAK POSTER GÖVDESİ */}
      <div style={{
        background: "#02040a",
        border: "2.5px solid #f59e0b",
        borderRadius: "20px",
        padding: "44px 28px",
        boxShadow: "0 0 100px rgba(245, 158, 11, 0.3), inset 0 0 140px rgba(0, 0, 0, 0.98)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST BÜYÜK KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "24px", right: "28px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "1.4rem", letterSpacing: "3px" }}>YKOS</div>
          <div style={{ color: "#94a3b8", fontSize: "0.7rem", letterSpacing: "1px" }}>Yaşar Kaba Okuma Sistemi</div>
        </div>

        {/* BAŞLIK ALANI */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ color: "#ea580c", fontSize: "0.9rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            BÜTÜNLEŞİK DİL KORPUSU
          </div>
          <h1 style={{ color: "#f8fafc", fontSize: "2.3rem", fontWeight: "900", letterSpacing: "3px", margin: "0 0 6px 0", textShadow: "0 0 35px rgba(245, 158, 11, 0.4)" }}>
            DİL SÜREKLİLİĞİ SERİSİ
          </h1>
          <div style={{ color: "#f59e0b", fontSize: "1.25rem", fontWeight: "800", letterSpacing: "3px" }}>
            KAPAK POSTERİ
          </div>
        </div>

        {/* MERKEZDE DEV YKOS KURUMSAL İŞARETİ VE HALKALAR */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0 40px 0",
          position: "relative"
        }}>
          {/* DIŞ ENERJİ HALKASI */}
          <div style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            border: "1.5px dashed rgba(245, 158, 11, 0.4)",
            boxShadow: "0 0 30px rgba(245, 158, 11, 0.25)"
          }} />

          {/* ÇEKİRDEK GÖBEKLİTEPE MÜHRÜ */}
          <div style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 65%, #02040a 95%)",
            boxShadow: "0 0 60px rgba(245, 158, 11, 0.65)",
            border: "2px solid #ffd700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            zIndex: 2
          }}>
            <span style={{ fontSize: "1.8rem" }}>🏛️</span>
            <span style={{ fontSize: "0.72rem", fontWeight: "900", letterSpacing: "1px", marginTop: "2px" }}>
              GÖBEKLİTEPE<br />YKOS MÜHRÜ
            </span>
          </div>
        </div>

        {/* 11 AFİŞİN MİKRO İKON ŞEBEKESİ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "10px",
          marginBottom: "36px"
        }}>
          {seriesIcons.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                borderRadius: "8px",
                padding: "10px 6px",
                textAlign: "center",
                boxShadow: "0 0 10px rgba(245, 158, 11, 0.15)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div style={{ fontSize: "1.2rem", marginBottom: "3px" }}>{item.icon}</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.72rem", fontWeight: "bold" }}>{item.name}</div>
            </div>
          ))}
        </div>

        {/* ORTA MANİFESTO METNİ */}
        <div style={{
          borderTop: "1.5px solid rgba(245, 158, 11, 0.4)",
          borderBottom: "1.5px solid rgba(245, 158, 11, 0.4)",
          padding: "24px 16px",
          textAlign: "center",
          marginBottom: "28px",
          background: "rgba(245, 158, 11, 0.04)"
        }}>
          <p style={{ margin: 0, fontSize: "1.1rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Bu seri, KÖKHECE’den Türkçe’ye uzanan 12.000 yıllık dil sürekliliğinin görsel-semiyotik kaydıdır.”
          </p>
        </div>

        {/* ALT BANT: 11 PANELİN TAM DİZİLİMİ */}
        <div style={{
          background: "linear-gradient(90deg, #f59e0b, #ea580c, #b45309)",
          color: "#000",
          fontWeight: "900",
          fontSize: "0.68rem",
          letterSpacing: "1px",
          padding: "10px 14px",
          borderRadius: "6px",
          textAlign: "center",
          marginBottom: "16px",
          lineHeight: "1.4"
        }}>
          SPIRAL • ZAMAN ŞERİDİ • BİLİŞSEL KATMAN • MANİFESTO • ATLAS • FLUX • BUBBLEMATRIX • MEGA PANEL • DNA • MEGA SPIRAL • KAPANIŞ MANİFESTOSU
        </div>

        {/* SAĞ ALT KİTLE ETİKETİ */}
        <div style={{ textAlign: "right" }}>
          <span style={{ color: "#64748b", fontSize: "0.75rem", fontStyle: "italic" }}>
            “YKOS, dilin görsel-semiyotik evrenidir.”
          </span>
        </div>

      </div>

    </div>
  );
}s