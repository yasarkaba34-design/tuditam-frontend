// src/pages/DilDnaModeli.jsx
import React from "react";

export default function DilDnaModeli({ onGoHome }) {
  const dnaRungs = [
    {
      id: "R1",
      step: "01",
      title: "SES",
      symbols: "Göbeklitepe Sembolü",
      desc: "Anlamın ilk titreşimi",
      accent: "#f59e0b",
      halo: "rgba(245, 158, 11, 0.45)",
      epoch: "MÖ 10.000"
    },
    {
      id: "R2",
      step: "02",
      title: "KÖK",
      symbols: "Hatti – Hitit – Luwi Sembolleri",
      desc: "Sesin biçimlenmiş hali",
      accent: "#ea580c",
      halo: "rgba(234, 88, 12, 0.35)",
      epoch: "MÖ 2500 - 1200"
    },
    {
      id: "R3",
      step: "03",
      title: "HECE",
      symbols: "Frig – Lidya – Helen Sembolleri",
      desc: "Kökün yapısal birimi",
      accent: "#d97706",
      halo: "rgba(217, 119, 6, 0.35)",
      epoch: "MÖ 1200 - 300"
    },
    {
      id: "R4",
      step: "04",
      title: "KELİME",
      symbols: "Roma – Selçuk Sembolleri",
      desc: "Hece’nin anlam inşası",
      accent: "#b45309",
      halo: "rgba(180, 83, 9, 0.35)",
      epoch: "MS 300 - 1300"
    },
    {
      id: "R5",
      step: "05",
      title: "DİL (TÜRKÇE)",
      symbols: "Modern Türkçe Sembolü",
      desc: "KÖKHECE’nin güncel hali",
      accent: "#00ff7f",
      halo: "rgba(0, 255, 127, 0.45)",
      epoch: "GÜNÜMÜZ"
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
          YKOS BİLİŞSEL DNA SERİSİ • PANEL 05
        </span>
      </div>

      {/* DNA PANEL GÖVDESİ */}
      <div style={{
        background: "#060913",
        border: "2px solid #ea580c",
        borderRadius: "16px",
        padding: "36px 28px",
        boxShadow: "0 0 50px rgba(234, 88, 12, 0.15), inset 0 0 90px rgba(0, 0, 0, 0.95)",
        position: "relative",
        overflow: "hidden"
      }}>

        {/* SAĞ ÜST KURUMSAL ETİKET */}
        <div style={{ position: "absolute", top: "20px", right: "24px", textAlign: "right" }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: "0.85rem", letterSpacing: "2px" }}>YKOS</div>
          <div style={{ color: "#64748b", fontSize: "0.65rem", letterSpacing: "1px" }}>Dilin DNA Modeli</div>
        </div>

        {/* BAŞLIK ALANI */}
        <div style={{ textAlign: "center", marginTop: "6px", marginBottom: "32px" }}>
          <div style={{ color: "#ea580c", fontSize: "0.85rem", fontWeight: "800", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px" }}>
            KÖKHECE → TÜRKÇE
          </div>
          <h1 style={{
            color: "#f8fafc",
            fontSize: "1.9rem",
            fontWeight: "900",
            letterSpacing: "2px",
            lineHeight: "1.2",
            margin: "0 0 6px 0",
            textShadow: "0 0 25px rgba(234, 88, 12, 0.35)"
          }}>
            DİLİN DNA MODELİ
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.82rem", letterSpacing: "1px" }}>
            Ses ve Anlamın 5 Katmanlı Çift Sarmal Evrimi
          </div>
        </div>

        {/* DNA ÇİFT SARMAL BASAMAKLARI */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", margin: "20px 0 34px 0" }}>
          
          {/* ÇİFT SARMAL SOL VE SAĞ ENERJİ ÇİZGİLERİ */}
          <div style={{
            position: "absolute",
            left: "20px",
            top: "16px",
            bottom: "16px",
            width: "3px",
            background: "linear-gradient(to bottom, #f59e0b 0%, #ea580c 40%, #b45309 80%, #00ff7f 100%)",
            boxShadow: "0 0 12px #ea580c",
            zIndex: 1
          }} />
          <div style={{
            position: "absolute",
            left: "44px",
            top: "16px",
            bottom: "16px",
            width: "2px",
            background: "linear-gradient(to bottom, #00ff7f 0%, #b45309 40%, #ea580c 80%, #f59e0b 100%)",
            boxShadow: "0 0 10px #f59e0b",
            zIndex: 1
          }} />

          {dnaRungs.map((rung) => (
            <div
              key={rung.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "rgba(15, 23, 42, 0.7)",
                border: `1px solid ${rung.accent}66`,
                borderRadius: "10px",
                padding: "14px 20px",
                position: "relative",
                zIndex: 2,
                backdropFilter: "blur(4px)"
              }}
            >
              {/* DNA BASAMAK DÜĞÜMÜ */}
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#080c16",
                border: `2px solid ${rung.accent}`,
                color: rung.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.85rem",
                flexShrink: 0,
                boxShadow: `0 0 16px ${rung.halo}`
              }}>
                {rung.step}
              </div>

              {/* BASAMAK BİLGİSİ */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                  <span style={{ color: "#f8fafc", fontWeight: "900", fontSize: "1.05rem", letterSpacing: "1px" }}>
                    {rung.title}
                  </span>
                  <span style={{ color: rung.accent, fontSize: "0.72rem", fontWeight: "bold", background: "rgba(0,0,0,0.5)", padding: "2px 8px", borderRadius: "4px", border: `1px solid ${rung.accent}44` }}>
                    {rung.epoch}
                  </span>
                </div>
                <div style={{ color: rung.accent, fontSize: "0.82rem", fontWeight: "bold", marginBottom: "2px" }}>
                  {rung.symbols}
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "0.85rem", fontStyle: "italic" }}>
                  “{rung.desc}”
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALT MANİFESTO METNİ */}
        <div style={{
          borderTop: "1px solid rgba(234, 88, 12, 0.3)",
          borderBottom: "1px solid rgba(234, 88, 12, 0.3)",
          padding: "16px 12px",
          textAlign: "center",
          marginBottom: "24px",
          background: "rgba(234, 88, 12, 0.03)"
        }}>
          <p style={{ margin: "0 0 4px 0", fontSize: "0.95rem", color: "#f8fafc", fontWeight: "600" }}>
            “Dil, sesin bilişsel bir DNA yapısında katmanlaşmasıdır.”
          </p>
          <p style={{ margin: 0, fontSize: "0.92rem", color: "#ea580c", fontWeight: "bold" }}>
            “Türkçe, bu DNA’nın güncel halidir.”
          </p>
        </div>

        {/* ALT BANT VE KİTLE ETİKETİ */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{
            background: "linear-gradient(90deg, #ea580c, #b45309)",
            color: "#000",
            fontWeight: "900",
            fontSize: "0.75rem",
            letterSpacing: "1.2px",
            padding: "8px 14px",
            borderRadius: "6px"
          }}>
            12.000 YILLIK DİL DNA EVRİMİ
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu DNA, dilin bilişsel çekirdeğinin görsel kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
