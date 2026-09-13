// src/pages/KapanisManifestosu.jsx
import React from "react";

export default function KapanisManifestosu({ onGoHome }) {
  const unifiedLayers = [
    { num: "01", name: "KÖKHECE", role: "Ses Çekirdeği", desc: "Anlamın ilk monolitik titreşimi ve kök fonemler.", accent: "#f59e0b", icon: "☀️" },
    { num: "02", name: "SPİRAL", role: "Dil Sürekliliği", desc: "12.000 yıllık tarihsel ve kültürel katmanlaşma.", accent: "#ea580c", icon: "🌀" },
    { num: "03", name: "ATLAS", role: "Semiyotik Hafıza", desc: "Anadolu damga, kaya resmi ve yazıt korpusu.", accent: "#d97706", icon: "🏛️" },
    { num: "04", name: "FLUX", role: "Dil Akışı", desc: "Ses → Kök → Hece → Kelime → Dil dinamik akış hattı.", accent: "#b45309", icon: "⚡" },
    { num: "05", name: "BUBBLEMATRIX", role: "Anlam Ağı", desc: "Topolojik semiyotik düğümler ve bağlamsal ağ.", accent: "#854d0e", icon: "🌌" },
    { num: "06", name: "DNA", role: "Bilişsel Çekirdek", desc: "Çift sarmallı epistemolojik dil kodları.", accent: "#15803d", icon: "🧬" },
    { num: "07", name: "TÜRKÇE", role: "Güncel Dil Katmanı", desc: "KÖKHECE’nin yaşayan, algoritmik ve çağdaş formu.", accent: "#00ff7f", icon: "🌐" }
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
          YKOS MANİFESTO SERİSİ • BÜYÜK KAPANIŞ
        </span>
      </div>

      {/* MANİFESTO GÖVDESİ */}
      <div style={{
        background: "#02040a",
        border: "2.5px solid #d97706",
        borderRadius: "20px",
        padding: "40px 28px",
        boxShadow: "0 0 90px rgba(217, 119, 6, 0.25), inset 0 0 130px rgba(0, 0, 0, 0.98)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL DAMGA */}
        <div style={{ position: "absolute", top: "24px", right: "28px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "1.1rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.68rem", letterSpacing: "1px" }}>Yaşar Kaba Okuma Sistemi</div>
        </div>

        {/* BAŞLIK */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ color: "#ea580c", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            BÜTÜNLEŞİK SEMİYOTİK DİL MODELİ
          </div>
          <h1 style={{ color: "#f8fafc", fontSize: "2.1rem", fontWeight: "900", letterSpacing: "2.5px", margin: "0 0 6px 0", textShadow: "0 0 35px rgba(245, 158, 11, 0.4)" }}>
            YKOS DİL SÜREKLİLİĞİ
          </h1>
          <div style={{ color: "#f59e0b", fontSize: "1.2rem", fontWeight: "800", letterSpacing: "3px" }}>
            KAPANIŞ MANİFESTOSU
          </div>
        </div>

        {/* MERKEZİ SEMBOL VE ÇEKİRDEK KÜRE */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px 0 36px 0",
          position: "relative"
        }}>
          <div style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 65%, #02040a 95%)",
            boxShadow: "0 0 50px rgba(245, 158, 11, 0.6)",
            border: "2px solid #ffd700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            zIndex: 2
          }}>
            <span style={{ fontSize: "1.4rem" }}>🏛️</span>
            <span style={{ fontSize: "0.65rem", fontWeight: "900", letterSpacing: "1px", marginTop: "2px" }}>
              GÖBEKLİTEPE<br />ÇEKİRDEĞİ
            </span>
          </div>

          <div style={{
            position: "absolute",
            width: "190px",
            height: "190px",
            borderRadius: "50%",
            border: "1.5px dashed rgba(245, 158, 11, 0.4)",
            boxShadow: "0 0 25px rgba(217, 119, 6, 0.25)"
          }} />
        </div>

        {/* BİRLEŞİK YAPI KATMANLARI (7 KATMAN LİSTESİ) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "34px" }}>
          {unifiedLayers.map((layer) => (
            <div
              key={layer.num}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(15, 23, 42, 0.75)",
                border: `1.5px solid ${layer.accent}55`,
                borderRadius: "10px",
                padding: "12px 18px",
                boxShadow: `0 0 12px ${layer.accent}22`
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "1.2rem" }}>{layer.icon}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ color: layer.accent, fontWeight: "900", fontSize: "0.95rem" }}>
                      {layer.num}. {layer.name}
                    </span>
                    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.82rem" }}>
                      — {layer.role}
                    </span>
                  </div>
                  <div style={{ color: "#cbd5e1", fontSize: "0.75rem", marginTop: "2px" }}>
                    {layer.desc}
                  </div>
                </div>
              </div>

              <span style={{
                background: "#060913",
                color: layer.accent,
                border: `1px solid ${layer.accent}44`,
                fontSize: "0.68rem",
                fontWeight: "900",
                padding: "3px 8px",
                borderRadius: "4px"
              }}>
                AKTİF KATMAN
              </span>
            </div>
          ))}
        </div>

        {/* ORTA MANİFESTO METNİ */}
        <div style={{
          borderTop: "1.5px solid rgba(217, 119, 6, 0.4)",
          borderBottom: "1.5px solid rgba(217, 119, 6, 0.4)",
          padding: "22px 16px",
          textAlign: "center",
          marginBottom: "26px",
          background: "rgba(217, 119, 6, 0.04)"
        }}>
          <p style={{ margin: "0 0 8px 0", fontSize: "1.05rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Dil, sesin anlamla buluştuğu bilişsel bir sürekliliktir.”
          </p>
          <p style={{ margin: 0, fontSize: "0.98rem", color: "#f59e0b", fontWeight: "bold" }}>
            “KÖKHECE’den Türkçe’ye uzanan bu yolculuk, Anadolu’nun semiyotik hafızasının birleşik yapısıdır.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{
            background: "linear-gradient(90deg, #d97706, #b45309)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.78rem",
            letterSpacing: "1.2px",
            padding: "9px 16px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK DİL SÜREKLİLİĞİ MANİFESTOSU
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu manifesto, YKOS görsel-semiyotik evreninin kapanış kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
