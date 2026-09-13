// src/pages/BirlesikMegaPanel.jsx
import React from "react";

export default function BirlesikMegaPanel({ onGoHome }) {
  const cardSectionStyle = {
    background: "rgba(8, 12, 22, 0.8)",
    border: "1.5px solid rgba(245, 158, 11, 0.4)",
    borderRadius: "14px",
    padding: "24px",
    marginBottom: "20px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.85)"
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
          YKOS BİRLEŞİK MEGA MODEL • 3 BÖLÜMLÜ DİKEY PANEL
        </span>
      </div>

      {/* DEV DİKEY MEGA PANEL GÖVDESİ */}
      <div style={{
        background: "#03060f",
        border: "2.5px solid #d97706",
        borderRadius: "20px",
        padding: "36px 28px",
        boxShadow: "0 0 70px rgba(217, 119, 6, 0.2), inset 0 0 120px rgba(0, 0, 0, 0.98)",
        position: "relative"
      }}>

        {/* SAĞ ÜST KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "24px", right: "28px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "1.05rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.68rem", letterSpacing: "1px" }}>Görsel-Semiyotik Motor</div>
        </div>

        {/* ANA BAŞLIK */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ color: "#d97706", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            KÖKHECE → TÜRKÇE
          </div>
          <h1 style={{ color: "#f8fafc", fontSize: "2rem", fontWeight: "900", letterSpacing: "2.5px", margin: "0 0 6px 0", textShadow: "0 0 30px rgba(245, 158, 11, 0.4)" }}>
            BİRLEŞİK DİL MANİFESTOSU
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.88rem", letterSpacing: "1px" }}>
            Semiyotik Hafıza • Dinamik Akış Hattı • Topolojik Anlam Ağı
          </div>
        </div>

        {/* === 1. ÜST BÖLÜM — SEMİYOTİK ATLAS === */}
        <div style={cardSectionStyle}>
          <div style={sectionHeaderStyle}>
            <span>🏛️ 1. SEMİYOTİK ATLAS</span>
            <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Hafızasının Katmanları</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "22px", alignItems: "center" }}>
            <div style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #f59e0b, #78350f 60%, #080c16 95%)",
              boxShadow: "0 0 35px rgba(245, 158, 11, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #ffd700",
              margin: "0 auto",
              textAlign: "center",
              fontSize: "0.72rem",
              fontWeight: "900",
              color: "#fff"
            }}>
              <span>🌌</span>
              <span>SEMİYOTİK<br />KÜRE</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "7px", fontSize: "0.82rem" }}>
              <div style={{ color: "#f59e0b" }}><b>• Göbeklitepe:</b> İlk Ses Sembolü ve Monolitik Rezonans (MÖ 10.000)</div>
              <div style={{ color: "#ea580c" }}><b>• Hatti–Hitit–Luwi:</b> Sesin Biçimlenmiş Kök Sembolleri (MÖ 2500–1200)</div>
              <div style={{ color: "#d97706" }}><b>• Frig–Lidya–Helen:</b> Kökün Yapısal Hece Sembolleri (MÖ 1200–300)</div>
              <div style={{ color: "#b45309" }}><b>• Roma–Selçuk:</b> Hece'nin Anlam İnşası & Kelime Sembolleri (MS 300–1300)</div>
              <div style={{ color: "#00ff7f" }}><b>• Türkçe:</b> KÖKHECE’nin Güncel Yaşayan Dil Sembolleri (Günümüz)</div>
            </div>
          </div>
        </div>

        {/* AKIŞ ÇİZGİSİ (AŞAĞI YÖNLÜ ENERJİ) */}
        <div style={{ height: "32px", display: "flex", justifyContent: "center", alignItems: "center", margin: "-10px 0 10px 0" }}>
          <div style={{ width: "3px", height: "100%", background: "linear-gradient(to bottom, #f59e0b, #ea580c)", boxShadow: "0 0 10px #f59e0b" }} />
        </div>

        {/* === 2. ORTA BÖLÜM — FLUX AKIŞI === */}
        <div style={cardSectionStyle}>
          <div style={sectionHeaderStyle}>
            <span>⚡ 2. FLUX AKIŞI</span>
            <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Akış Modeli</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", textAlign: "center" }}>
            {[
              { num: "01", t: "SES", s: "Göbeklitepe", d: "Anlamın ilk titreşimi", c: "#f59e0b", halo: "rgba(245, 158, 11, 0.4)" },
              { num: "02", t: "KÖK", s: "Hitit / Luwi", d: "Sesin biçimlenmiş hali", c: "#ea580c", halo: "rgba(234, 88, 12, 0.35)" },
              { num: "03", t: "HECE", s: "Frig / Lidya", d: "Kökün yapısal birimi", c: "#d97706", halo: "rgba(217, 119, 6, 0.35)" },
              { num: "04", t: "KELİME", s: "Roma / Selçuk", d: "Hece’nin anlam inşası", c: "#b45309", halo: "rgba(180, 83, 9, 0.35)" },
              { num: "05", t: "DİL", s: "Türkçe", d: "KÖKHECE’nin güncel hali", c: "#00ff7f", halo: "rgba(0, 255, 127, 0.45)" }
            ].map((node, i) => (
              <div key={i} style={{ background: "rgba(15, 23, 42, 0.75)", border: `1.5px solid ${node.c}66`, padding: "12px 6px", borderRadius: "10px", boxShadow: `0 0 14px ${node.halo}` }}>
                <div style={{ color: node.c, fontWeight: "900", fontSize: "0.75rem" }}>{node.num}</div>
                <div style={{ color: "#fff", fontWeight: "900", fontSize: "0.95rem", margin: "2px 0" }}>{node.t}</div>
                <div style={{ color: node.c, fontSize: "0.68rem", fontWeight: "bold" }}>{node.s}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.64rem", fontStyle: "italic", marginTop: "4px" }}>“{node.d}”</div>
              </div>
            ))}
          </div>
        </div>

        {/* AKIŞ ÇİZGİSİ (AŞAĞI YÖNLÜ ENERJİ) */}
        <div style={{ height: "32px", display: "flex", justifyContent: "center", alignItems: "center", margin: "-10px 0 10px 0" }}>
          <div style={{ width: "3px", height: "100%", background: "linear-gradient(to bottom, #ea580c, #00ff7f)", boxShadow: "0 0 10px #00ff7f" }} />
        </div>

        {/* === 3. ALT BÖLÜM — BUBBLEMATRIX HARİTASI === */}
        <div style={cardSectionStyle}>
          <div style={sectionHeaderStyle}>
            <span>🌌 3. BUBBLEMATRIX HARİTASI</span>
            <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: "normal" }}>Dil Semiyotik Ağı</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
            {[
              { label: "Dil Baloncukları", sub: "Sentaks & Anlam Matrisi", color: "#00ff7f" },
              { label: "Kelime Baloncukları", sub: "Epigrafik & Mimari Yapı", color: "#b45309" },
              { label: "Hece Baloncukları", sub: "Fonetik Hece Blokları", color: "#d97706" },
              { label: "Kök Baloncukları", sub: "Onto-Kök & Morfemler", color: "#ea580c" },
              { label: "Ses Baloncukları", sub: "Monolitik Titreşim Fonemi", color: "#f59e0b" }
            ].map((b, idx) => (
              <div key={idx} style={{ background: "#060913", border: `1px solid ${b.color}55`, borderRadius: "8px", padding: "12px 8px", textAlign: "center" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: b.color, margin: "0 auto 6px auto", boxShadow: `0 0 10px ${b.color}` }} />
                <div style={{ color: "#fff", fontWeight: "bold", fontSize: "0.78rem" }}>{b.label}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.66rem", marginTop: "2px" }}>{b.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* === ALT MANİFESTO METNİ === */}
        <div style={{
          borderTop: "1.5px solid rgba(217, 119, 6, 0.4)",
          borderBottom: "1.5px solid rgba(217, 119, 6, 0.4)",
          padding: "20px 14px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(217, 119, 6, 0.04)"
        }}>
          <p style={{ margin: "0 0 6px 0", fontSize: "1.05rem", color: "#f8fafc", fontWeight: "600", letterSpacing: "0.4px" }}>
            “Dil, semiyotik hafızanın, akışın ve anlam baloncuklarının birleşik yapısıdır.”
          </p>
          <p style={{ margin: 0, fontSize: "0.98rem", color: "#f59e0b", fontWeight: "bold" }}>
            “Türkçe, bu birleşik yapının bugünkü halidir.”
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
            12.000 YILLIK SEMİYOTİK–AKIŞ–AĞ BİRLEŞİK DİL PANELİ
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu panel, YKOS görsel-semiyotik motorunun birleşik kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
