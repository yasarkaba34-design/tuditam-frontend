// src/pages/FluxAkisModeli.jsx
import React from "react";

export default function FluxAkisModeli({ onGoHome }) {
  const fluxStations = [
    {
      id: "S1",
      step: "01",
      title: "SES",
      symbols: "Göbeklitepe",
      desc: "Anlamın ilk titreşimi",
      accent: "#f59e0b",
      halo: "rgba(245, 158, 11, 0.4)"
    },
    {
      id: "S2",
      step: "02",
      title: "KÖK",
      symbols: "Hatti • Hitit • Luwi",
      desc: "Sesin biçimlenmiş hali",
      accent: "#ea580c",
      halo: "rgba(234, 88, 12, 0.35)"
    },
    {
      id: "S3",
      step: "03",
      title: "HECE",
      symbols: "Frig • Lidya • Helen",
      desc: "Kökün yapısal birimi",
      accent: "#d97706",
      halo: "rgba(217, 119, 6, 0.35)"
    },
    {
      id: "S4",
      step: "04",
      title: "KELİME",
      symbols: "Roma • Selçuklu",
      desc: "Hece’nin anlam inşası",
      accent: "#b45309",
      halo: "rgba(180, 83, 9, 0.35)"
    },
    {
      id: "S5",
      step: "05",
      title: "DİL (TÜRKÇE)",
      symbols: "Modern Dil Matrisi",
      desc: "KÖKHECE’nin güncel hali",
      accent: "#00ff7f",
      halo: "rgba(0, 255, 127, 0.45)"
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
          YKOS BİLİMSEL MODELLEME • PANEL 03
        </span>
      </div>

      {/* FLUX PANEL GÖVDESİ */}
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
          <div style={{ color: "#64748b", fontSize: "0.65rem", letterSpacing: "1px" }}>Flux Akış Modeli</div>
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
            FLUX: DİLİN AKIŞ MODELİ
          </h1>
          <div style={{ color: "#94a3b8", fontSize: "0.82rem", letterSpacing: "1px" }}>
            Sesin Bilişsel ve Tarihsel Dönüşüm Hattı
          </div>
        </div>

        {/* FLUX AKIŞ HATTI & 5 DURAK */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", margin: "20px 0 34px 0" }}>
          
          {/* AKAN ORGANİK TURUNCU ENERJİ ÇİZGİSİ */}
          <div style={{
            position: "absolute",
            left: "27px",
            top: "16px",
            bottom: "16px",
            width: "3px",
            background: "linear-gradient(to bottom, #f59e0b 0%, #ea580c 40%, #b45309 80%, #00ff7f 100%)",
            boxShadow: "0 0 14px #ea580c",
            zIndex: 1
          }} />

          {fluxStations.map((station) => (
            <div
              key={station.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "rgba(15, 23, 42, 0.65)",
                border: `1px solid ${station.accent}66`,
                borderRadius: "10px",
                padding: "14px 20px",
                position: "relative",
                zIndex: 2,
                backdropFilter: "blur(4px)"
              }}
            >
              {/* TURUNCU HALOLU DURAK DÜĞÜMÜ */}
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#080c16",
                border: `2px solid ${station.accent}`,
                color: station.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "0.85rem",
                flexShrink: 0,
                boxShadow: `0 0 16px ${station.halo}`
              }}>
                {station.step}
              </div>

              {/* DURAK BİLGİSİ */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                  <span style={{ color: "#f8fafc", fontWeight: "900", fontSize: "1.05rem", letterSpacing: "1px" }}>
                    {station.title}
                  </span>
                  <span style={{ color: station.accent, fontSize: "0.75rem", fontWeight: "bold", background: "rgba(0,0,0,0.5)", padding: "2px 8px", borderRadius: "4px", border: `1px solid ${station.accent}44` }}>
                    {station.symbols}
                  </span>
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "0.85rem", fontStyle: "italic" }}>
                  “{station.desc}”
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
            “Dil, sesin akış içinde biçimlenerek anlam kazanmasıdır.”
          </p>
          <p style={{ margin: 0, fontSize: "0.92rem", color: "#ea580c", fontWeight: "bold" }}>
            “Türkçe, bu akışın bugünkü halidir.”
          </p>
        </div>
s
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
            12.000 YILLIK DİL AKIŞI
          </div>

          <div style={{ color: "#64748b", fontSize: "0.72rem", fontStyle: "italic", textAlign: "right" }}>
            Bu akış, dilin semiyotik hareketinin görsel kaydıdır.
          </div>
        </div>

      </div>

    </div>
  );
}
