// src/pages/KozmikSpiralEvreni.jsx
import React from "react";

export default function KozmikSpiralEvreni({ onGoHome }) {
  const spiralRings = [
    {
      id: "RING-5",
      ring: "5. Dış Halka",
      culture: "TÜRKÇE",
      concept: "Modern Dil Sembolleri",
      desc: "KÖKHECE’nin yaşayan algoritmik matrisi ve çağdaş semiyotiği.",
      accent: "#00ff7f",
      halo: "rgba(0, 255, 127, 0.45)",
      epoch: "GÜNÜMÜZ"
    },
    {
      id: "RING-4",
      ring: "4. Dış Katman",
      culture: "ROMA – SELÇUK",
      concept: "Kelime Sembolleri",
      desc: "Hece'nin sentaktik ve mimari anlam inşası, anıtsal kitabeler.",
      accent: "#b45309",
      halo: "rgba(180, 83, 9, 0.35)",
      epoch: "MS 300 – 1300"
    },
    {
      id: "RING-3",
      ring: "3. Orta Katman",
      culture: "FRİG – LİDYA – HELEN",
      concept: "Hece Sembolleri",
      desc: "Fonetik hece yapılarının taş ve sikke üzerine aktarılan semiyotik formu.",
      accent: "#d97706",
      halo: "rgba(217, 119, 6, 0.35)",
      epoch: "MÖ 1200 – 300"
    },
    {
      id: "RING-2",
      ring: "2. İç Katman",
      culture: "HATTİ – HİTİT – LUWİ",
      concept: "Kök Sembolleri",
      desc: "Sesin biçimlenmiş hiyeroglif ve çivi yazılı ontolojik kök morfemleri.",
      accent: "#ea580c",
      halo: "rgba(234, 88, 12, 0.35)",
      epoch: "MÖ 2500 – 1200"
    },
    {
      id: "RING-1",
      ring: "1. Spiral Çekirdeği",
      culture: "GÖBEKLİTEPE",
      concept: "İlk Ses Sembolü",
      desc: "Anlamın ilk monolitik rezonansı ve evrensel ses titreşimi.",
      accent: "#f59e0b",
      halo: "rgba(245, 158, 11, 0.5)",
      epoch: "MÖ 10.000"
    }
  ];

  const modules = [
    { name: "SEMİYOTİK ATLAS", sub: "Çekirdek Küre", icon: "🏛️", color: "#f59e0b" },
    { name: "FLUX MODELİ", sub: "Akış Çizgileri", icon: "⚡", color: "#ea580c" },
    { name: "BUBBLEMATRIX", sub: "Baloncuk Kümeleri", icon: "🌌", color: "#d97706" },
    { name: "KÖKHECE DNA", sub: "Çift Sarmal Omurga", icon: "🧬", color: "#00ff7f" }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "960px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
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
          YKOS BİRLEŞİK EVREN MODELİ • KOZMİK SPİRAL
        </span>
      </div>

      {/* DEV KOZMİK SPİRAL PANEL GÖVDESİ */}
      <div style={{
        background: "#02040a",
        border: "2.5px solid #f59e0b",
        borderRadius: "20px",
        padding: "38px 28px",
        boxShadow: "0 0 80px rgba(245, 158, 11, 0.25), inset 0 0 120px rgba(0, 0, 0, 0.98)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL DAMGA */}
        <div style={{ position: "absolute", top: "24px", right: "28px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "1.1rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.68rem", letterSpacing: "1px" }}>Birleşik Semiyotik Evren</div>
        </div>

        {/* ANA BAŞLIK */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ color: "#ea580c", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            KÖKHECE → TÜRKÇE
          </div>
          <h1 style={{ color: "#f8fafc", fontSize: "2.1rem", fontWeight: "900", letterSpacing: "2.5px", margin: "0 0 6px 0", textShadow: "0 0 35px rgba(245, 158, 11, 0.4)" }}>
            DİL SÜREKLİLİĞİ EVRENİ
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.88rem", letterSpacing: "1px" }}>
            12.000 Yıllık Ses, Kök, Hece, Kelime ve Anlam Sarmalı
          </div>
        </div>

        {/* 4 TEMEL YKOS MODÜL ROZETİ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "30px" }}>
          {modules.map((mod, i) => (
            <div
              key={i}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: `1.5px solid ${mod.color}55`,
                borderRadius: "8px",
                padding: "10px 6px",
                textAlign: "center",
                boxShadow: `0 0 12px ${mod.color}22`
              }}
            >
              <div style={{ fontSize: "1.2rem", marginBottom: "2px" }}>{mod.icon}</div>
              <div style={{ color: "#fff", fontWeight: "900", fontSize: "0.75rem", letterSpacing: "0.5px" }}>{mod.name}</div>
              <div style={{ color: mod.color, fontSize: "0.65rem", fontWeight: "bold" }}>{mod.sub}</div>
            </div>
          ))}
        </div>

        {/* MERKEZİ KOZMİK SPİRAL SİMÜLASYONU */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          margin: "24px 0 36px 0",
          minHeight: "220px",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(2, 4, 10, 0.9) 75%)",
          borderRadius: "14px",
          border: "1px dashed rgba(245, 158, 11, 0.3)",
          padding: "24px 12px"
        }}>
          {/* ÇEKİRDEK KÜRE */}
          <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 60%, #02040a 95%)",
            boxShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
            border: "2px solid #ffd700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
            marginBottom: "12px"
          }}>
            <span style={{ fontSize: "1.3rem" }}>🌌</span>
            <span style={{ fontSize: "0.65rem", fontWeight: "900", color: "#fff", letterSpacing: "1px" }}>
              KOZMİK<br />ÇEKİRDEK
            </span>
          </div>

          <div style={{ color: "#f59e0b", fontSize: "0.8rem", fontWeight: "bold", letterSpacing: "1px", textAlign: "center" }}>
            MÖ 10.000 GÖBEKLİTEPE ➔ ÇAĞDAŞ TÜRKÇE SÜREKLİLİK EKSENİ
          </div>
        </div>

        {/* 5 KOZMİK SPİRAL KATMAN LİSTESİ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
          {spiralRings.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(15, 23, 42, 0.75)",
                border: `1.5px solid ${item.accent}66`,
                borderRadius: "10px",
                padding: "14px 18px",
                boxShadow: `0 0 16px ${item.halo}`
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#080c16",
                  border: `2px solid ${item.accent}`,
                  color: item.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "0.8rem",
                  flexShrink: 0
                }}>
                  🌀
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: "bold" }}>{item.ring}</span>
                    <span style={{ color: item.accent, fontWeight: "900", fontSize: "0.95rem" }}>{item.culture}</span>
                    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.85rem" }}>— {item.concept}</span>
                  </div>
                  <div style={{ color: "#cbd5e1", fontSize: "0.78rem", marginTop: "3px" }}>{item.desc}</div>
                </div>
              </div>

              <span style={{
                background: "#060913",
                color: item.accent,
                border: `1px solid ${item.accent}55`,
                fontSize: "0.7rem",
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
          borderTop: "1.5px solid rgba(245, 158, 11, 0.4)",
          borderBottom: "1.5px solid rgba(245, 158, 11, 0.4)",
          padding: "20px 14px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(245, 158, 11, 0.04)"
        }}>
          <p style={{ margin: "0 0 6px 0", fontSize: "1.05rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Dil, sesin, kökün, hecenin, kelimenin ve anlamın birleşerek oluşturduğu kozmik bir sürekliliktir.”
          </p>
          <p style={{ margin: 0, fontSize: "0.98rem", color: "#f59e0b", fontWeight: "bold" }}>
            “Türkçe, bu sürekliliğin bugünkü halidir.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{
            background: "linear-gradient(90deg, #f59e0b, #ea580c)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.8rem",
            letterSpacing: "1.2px",
            padding: "9px 16px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK DİL EVRENİ
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu spiral, YKOS görsel-semiyotik motorunun birleşik evren kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
