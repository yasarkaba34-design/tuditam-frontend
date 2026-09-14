// src/pages/BubbleMatrixPanel.jsx
import React from "react";

export default function BubbleMatrixPanel({ onGoHome }) {
  const bubbleClusters = [
    {
      id: "C5",
      level: "5. TÜRKÇE",
      title: "Dil Baloncukları",
      pos: "Üst Merkez (Tepe)",
      accent: "#00ff7f",
      halo: "rgba(0, 255, 127, 0.45)",
      nodes: ["Çağdaş Türkçe", "Algoritmik Matris", "Yaşayan Semiyotik"]
    },
    {
      id: "C4",
      level: "4. ROMA – SELÇUK",
      title: "Kelime Baloncukları",
      pos: "Üst Orta Katman",
      accent: "#b45309",
      halo: "rgba(180, 83, 9, 0.35)",
      nodes: ["Kavram İnşası", "Mimari Damga", "Sentaks"]
    },
    {
      id: "C3",
      level: "3. FRİG – LİDYA – HELEN",
      title: "Hece Baloncukları",
      pos: "Merkez Katman",
      accent: "#d97706",
      halo: "rgba(217, 119, 6, 0.35)",
      nodes: ["Fonetik Bloklar", "Epigrafik Hece", "Sikke & Yazıt"]
    },
    {
      id: "C2",
      level: "2. HATTİ – HİTİT – LUWİ",
      title: "Kök Baloncukları",
      pos: "Alt Orta Katman",
      accent: "#ea580c",
      halo: "rgba(234, 88, 12, 0.35)",
      nodes: ["Hiyeroglif Kök", "Çivi Yazılı Morfem", "Onto-Kök"]
    },
    {
      id: "C1",
      level: "1. GÖBEKLİTEPE",
      title: "Ses Baloncukları",
      pos: "En Alt Merkez (Kök)",
      accent: "#f59e0b",
      halo: "rgba(245, 158, 11, 0.5)",
      nodes: ["İlk Titreşim", "T-Sütunu İkonografi", "Kozmik Fonem"]
    }
  ];

  return (
    <div style={{ width: "100%", maxWidth: "860px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
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
          YKOS BİLİMSEL MODELLEME • PANEL 04
        </span>
      </div>

      {/* BUBBLE MATRIX PANEL GÖVDESİ */}
      <div style={{
        background: "#050811",
        border: "2px solid #f59e0b",
        borderRadius: "16px",
        padding: "36px 28px",
        boxShadow: "0 0 50px rgba(245, 158, 11, 0.15), inset 0 0 90px rgba(0, 0, 0, 0.95)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "20px", right: "24px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "0.85rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.65rem", letterSpacing: "1px" }}>BubbleMatrix Semiyotik Ağ</div>
        </div>

        {/* BAŞLIK ALANI */}
        <div style={{ textAlign: "center", marginTop: "6px", marginBottom: "32px" }}>
          <div style={{ color: "#f59e0b", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            KÖKHECE → TÜRKÇE
          </div>
          <h1 style={{
            color: "#f8fafc",
            fontSize: "1.85rem",
            fontWeight: "900",
            letterSpacing: "2px",
            lineHeight: "1.2",
            margin: "0 0 6px 0",
            textShadow: "0 0 25px rgba(245, 158, 11, 0.35)"
          }}>
            BUBBLEMATRIX: DİLİN SEMİYOTİK HARİTASI
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.82rem", letterSpacing: "1px" }}>
            Anadolu Dil Katmanlarının Topolojik ve Semiyotik Düğüm Ağı
          </div>
        </div>

        {/* BUBBLEMATRIX HARİTA KÜMELERİ (AŞAĞIDAN YUKARIYA AKIŞ) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative", margin: "20px 0 34px 0" }}>
          
          {/* İNCE TURUNCU İLİŞKİSEL BAĞLANTI ÇİZGİSİ */}
          <div style={{
            position: "absolute",
            left: "27px",
            top: "16px",
            bottom: "16px",
            width: "2px",
            background: "linear-gradient(to bottom, #00ff7f 0%, #b45309 30%, #d97706 60%, #ea580c 85%, #f59e0b 100%)",
            boxShadow: "0 0 10px #f59e0b",
            zIndex: 1
          }} />

          {bubbleClusters.map((cluster) => (
            <div
              key={cluster.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                background: "rgba(15, 23, 42, 0.65)",
                border: `1px solid ${cluster.accent}66`,
                borderRadius: "10px",
                padding: "14px 18px",
                position: "relative",
                zIndex: 2,
                backdropFilter: "blur(4px)"
              }}
            >
              {/* BALONCUK HALO ÇEKİRDEĞİ */}
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#080c16",
                border: `2px solid ${cluster.accent}`,
                color: cluster.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.85rem",
                flexShrink: 0,
                boxShadow: `0 0 16px ${cluster.halo}`
              }}>
                ⚪
              </div>

              {/* KÜME BİLGİSİ VE DÜĞÜMLER */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ color: "#f8fafc", fontWeight: "900", fontSize: "1rem", letterSpacing: "1px" }}>
                    {cluster.level} — <span style={{ color: cluster.accent }}>{cluster.title}</span>
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "0.72rem", fontStyle: "italic" }}>
                    {cluster.pos}
                  </span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                  {cluster.nodes.map((node, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        border: `1px solid ${cluster.accent}44`,
                        color: "#e2e8f0",
                        fontSize: "0.72rem",
                        padding: "2px 8px",
                        borderRadius: "4px"
                      }}
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALT MANİFESTO METNİ */}
        <div style={{
          borderTop: "1px solid rgba(245, 158, 11, 0.3)",
          borderBottom: "1px solid rgba(245, 158, 11, 0.3)",
          padding: "16px 12px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(245, 158, 11, 0.03)"
        }}>
          <p style={{ margin: "0 0 4px 0", fontSize: "0.95rem", color: "#f8fafc", fontWeight: "600" }}>
            “Dil, anlam baloncuklarının birbirine bağlanmasıyla oluşan bir semiyotik ağdır.”
          </p>
          <p style={{ margin: 0, fontSize: "0.92rem", color: "#f59e0b", fontWeight: "bold" }}>
            “Türkçe, bu ağın güncel halidir.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{
            background: "linear-gradient(90deg, #f59e0b, #b45309)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.75rem",
            letterSpacing: "1.2px",
            padding: "8px 14px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK SEMİYOTİK DİL AĞI
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu harita, dilin görsel-semiyotik yapısının kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
