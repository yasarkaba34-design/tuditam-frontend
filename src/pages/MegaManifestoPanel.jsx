// src/pages/MegaManifestoPanel.jsx
import React from "react";

export default function MegaManifestoPanel({ onGoHome }) {
  const cardStyle = {
    background: "rgba(8, 12, 22, 0.75)",
    border: "1.5px solid rgba(245, 158, 11, 0.4)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "24px",
    backdropFilter: "blur(6px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.8)"
  };

  const sectionHeaderStyle = {
    color: "#f59e0b",
    fontSize: "1.15rem",
    fontWeight: "900",
    letterSpacing: "1.5px",
    borderBottom: "1px solid rgba(245, 158, 11, 0.3)",
    paddingBottom: "8px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  return (
    <div style={{ width: "100%", maxWidth: "920px", margin: "0 auto", padding: "16px", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* ÜST BUTON BAR */}
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
          YKOS MEGA PANEL SERİSİ • TRİPTİK MODEL
        </span>
      </div>

      {/* MEGA PANEL ANA KAPSAYICI */}
      <div style={{
        background: "#040711",
        border: "2.5px solid #d97706",
        borderRadius: "20px",
        padding: "36px 28px",
        boxShadow: "0 0 60px rgba(217, 119, 6, 0.2), inset 0 0 100px rgba(0, 0, 0, 0.95)",
        position: "relative"
      }}>

        {/* SAĞ ÜST KURUMSAL DAMGA */}
        <div style={{ position: "absolute", top: "24px", right: "28px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "1rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.68rem", letterSpacing: "1px" }}>Bütünleşik Dil Modeli</div>
        </div>

        {/* ANA BAŞLIK */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ color: "#d97706", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            ANADOLU EPİSTEMOLOJİK SİSTEMİ
          </div>
          <h1 style={{ color: "#f8fafc", fontSize: "2rem", fontWeight: "900", letterSpacing: "2px", margin: "0 0 6px 0" }}>
            KÖKHECE → TÜRKÇE
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem", letterSpacing: "1px" }}>
            12.000 Yıllık Semiyotik Hafıza, Akış ve Ağ Mimarisi
          </div>
        </div>

        {/* === 1. ÜST BÖLÜM: SEMİYOTİK ATLAS === */}
        <div style={cardStyle}>
          <div style={sectionHeaderStyle}>
            <span>🏛️ 1. SEMİYOTİK ATLAS</span>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Hafızasının Katmanları</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "20px", alignItems: "center" }}>
            <div style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 60%, #080c16 95%)",
              boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #ffd700",
              margin: "0 auto",
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: "900"
            }}>
              SEMİYOTİK<br />KÜRE
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.8rem" }}>
              <div style={{ color: "#f59e0b" }}><b>• Göbeklitepe:</b> İlk Ses Sembolü ve Monolitik Rezonans</div>
              <div style={{ color: "#ea580c" }}><b>• Hatti–Hitit–Luwi:</b> Biçimlenen Kök Sembolleri</div>
              <div style={{ color: "#d97706" }}><b>• Frig–Lidya–Helen:</b> Yapısal Hece Sembolleri</div>
              <div style={{ color: "#b45309" }}><b>• Roma–Selçuk:</b> Kelime ve Mimari Kavram Sembolleri</div>
              <div style={{ color: "#00ff7f" }}><b>• Türkçe:</b> Yaşayan ve Algoritmik Dil Sembolleri</div>
            </div>
          </div>
        </div>

        {/* BAĞLANTI HATTI (İNDİRİCİ AKIŞ) */}
        <div style={{ height: "30px", display: "flex", justifyContent: "center", alignItems: "center", margin: "-12px 0 12px 0" }}>
          <div style={{ width: "2px", height: "100%", background: "linear-gradient(to bottom, #f59e0b, #ea580c)", boxShadow: "0 0 8px #f59e0b" }} />
        </div>

        {/* === 2. ORTA BÖLÜM: FLUX AKIŞI === */}
        <div style={cardStyle}>
          <div style={sectionHeaderStyle}>
            <span>⚡ 2. FLUX AKIŞI</span>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Akış Modeli</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", textAlign: "center" }}>
            {[
              { t: "SES", s: "Göbeklitepe", d: "İlk Titreşim", c: "#f59e0b" },
              { t: "KÖK", s: "Hitit / Luwi", d: "Biçimleniş", c: "#ea580c" },
              { t: "HECE", s: "Frig / Helen", d: "Yapısal Birim", c: "#d97706" },
              { t: "KELİME", s: "Roma / Selçuk", d: "Anlam İnşası", c: "#b45309" },
              { t: "DİL", s: "Türkçe", d: "Güncel Hal", c: "#00ff7f" }
            ].map((node, i) => (
              <div key={i} style={{ background: "rgba(15, 23, 42, 0.6)", border: `1px solid ${node.c}55`, padding: "10px 4px", borderRadius: "8px" }}>
                <div style={{ color: node.c, fontWeight: "900", fontSize: "0.85rem" }}>{node.t}</div>
                <div style={{ color: "#e2e8f0", fontSize: "0.68rem", fontWeight: "bold", margin: "3px 0" }}>{node.s}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.62rem", fontStyle: "italic" }}>{node.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BAĞLANTI HATTI (İNDİRİCİ AKIŞ) */}
        <div style={{ height: "30px", display: "flex", justifyContent: "center", alignItems: "center", margin: "-12px 0 12px 0" }}>
          <div style={{ width: "2px", height: "100%", background: "linear-gradient(to bottom, #ea580c, #00ff7f)", boxShadow: "0 0 8px #ea580c" }} />
        </div>

        {/* === 3. ALT BÖLÜM: BUBBLEMATRIX HARİTASI === */}
        <div style={cardStyle}>
          <div style={sectionHeaderStyle}>
            <span>🌌 3. BUBBLEMATRIX HARİTASI</span>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Semiyotik Ağı</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
            {[
              { label: "Dil Baloncukları", sub: "Sentaks & Anlam Matrisi", color: "#00ff7f" },
              { label: "Kelime Baloncukları", sub: "Epigrafik Yapılar", color: "#b45309" },
              { label: "Hece Baloncukları", sub: "Fonem Blokları", color: "#d97706" },
              { label: "Kök Baloncukları", sub: "Onto-Kök Formlar", color: "#ea580c" },
              { label: "Ses Baloncukları", sub: "Monolitik Titreşim", color: "#f59e0b" }
            ].map((b, idx) => (
              <div key={idx} style={{ background: "#060913", border: `1px solid ${b.color}44`, borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: b.color, margin: "0 auto 6px auto", boxShadow: `0 0 8px ${b.color}` }} />
                <div style={{ color: "#fff", fontWeight: "bold", fontSize: "0.75rem" }}>{b.label}</div>
                <div style={{ color: "#64748b", fontSize: "0.65rem", marginTop: "2px" }}>{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* === ALT MANİFESTO VE BİTİŞ === */}
        <div style={{
          borderTop: "1.5px solid rgba(217, 119, 6, 0.4)",
          borderBottom: "1.5px solid rgba(217, 119, 6, 0.4)",
          padding: "20px 14px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(217, 119, 6, 0.04)"
        }}>
          <p style={{ margin: "0 0 6px 0", fontSize: "1.05rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Dil; semiyotik hafızanın, akışın ve anlam baloncuklarının birleşik yapısıdır.”
          </p>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#f59e0b", fontWeight: "bold" }}>
            “Türkçe, Göbeklitepe’den bugüne kesintisiz uzanan bu semiyotik mimarinin yaşayan zirvesidir.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{
            background: "linear-gradient(90deg, #d97706, #b45309)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.78rem",
            letterSpacing: "1.2px",
            padding: "8px 16px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK BÜTÜNLEŞİK DİL MANİFESTOSU
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu mega panel, Anadolu’nun dilsel ve semiyotik mimarisinin triptik kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
