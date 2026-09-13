import React, { useState } from "react";

export default function AtlasMap({ locations = [] }) {
  // Eğer locations dışarıdan boş veya undefined gelirse hata vermemesi için güvenli dizi:
  const safeLocations = locations.length > 0 ? locations : [
    {
      id: "ANADOLU-01",
      name: "Göbeklitepe / Karahantepe Havzası",
      region: "Anadolu / Üst Mezopotamya",
      details: "İnsanlık tarihinin en kadim inanç ve mimari merkezi. Kök-hece matrisinde 'ÇEV' ve 'BA' köklerinin ilk coğrafi izdüşümünü sunar."
    },
    {
      id: "ANADOLU-02",
      name: "Yazılıkaya / Boğazköy",
      region: "İç Anadolu",
      details: "Hitit ve öncesi kaya piktogramlarının, tanrı/dağ damgalarının dikey aks üzerinde kodlandığı ana merkez."
    },
    {
      id: "AVRASYA-01",
      name: "Tamgalı Say (Tamgaly)",
      region: "Orta Asya / Kazakistan",
      details: "Binlerce petroglifin yer aldığı, güneş başlıkklı insan figürlerinin ve kök damgaların boy gösterdiği kutsal vadi."
    }
  ];

  // Varsayılan olarak ilk lokasyon seçili gelsin
  const [activeLoc, setActiveLoc] = useState(safeLocations[0]);

  // Entegrasyon: Lokasyona göre Kök Hece Matrisi bağlantılarını dinamik getirme
  const getIntegratedNodes = (locId) => {
    if (locId.includes("ANADOLU-01")) return ["ÇEV", "BA", "YKOS 100 Katmanı"];
    if (locId.includes("ANADOLU-02")) return ["H-Piktogramı", "Dikey Aks", "YKOS 200"];
    if (locId.includes("ANADOLU-03")) return ["KUR", "DA", "ÇEV"];
    if (locId.includes("AVRASYA-01")) return ["GÖK", "ÇİK", "Yükselim Vektörü"];
    if (locId.includes("AKDENIZ-01")) return ["YOL", "AYLUİL", "Avrupa Atlası"];
    return ["KÖK", "YOL", "BİR"];
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "25px", animation: "fadeIn 0.5s ease" }}>
      
      <style>{`
        @keyframes pulseRadar {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .radar-ring {
          position: absolute;
          border: 1px solid rgba(255, 215, 0, 0.6);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 15px rgba(255,215,0,0.2);
        }
        .radar-ring-1 { width: 80px; height: 80px; animation: pulseRadar 3s infinite; }
        .radar-ring-2 { width: 80px; height: 80px; animation: pulseRadar 3s infinite 1s; }
        .radar-ring-3 { width: 80px; height: 80px; animation: pulseRadar 3s infinite 2s; }
        
        .loc-card {
          transition: all 0.3s ease;
        }
        .loc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
        }
      `}</style>

      {/* 1. YATAY LOKASYON SEÇİCİ */}
      <div style={{ display: "flex", gap: "15px", overflowX: "auto", paddingBottom: "15px", scrollbarWidth: "thin", scrollbarColor: "#ffd700 #050811" }}>
        {safeLocations.map((loc) => (
          <div 
            key={loc.id} 
            className="loc-card"
            onClick={() => setActiveLoc(loc)}
            style={{ 
              minWidth: "220px", 
              background: activeLoc?.id === loc.id ? "rgba(255, 215, 0, 0.15)" : "rgba(255, 215, 0, 0.03)", 
              border: activeLoc?.id === loc.id ? "1.5px solid #ffd700" : "1px solid rgba(255, 215, 0, 0.3)", 
              borderRadius: "10px", 
              padding: "15px", 
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <span style={{ color: activeLoc?.id === loc.id ? "#ffd700" : "#aaa", fontWeight: "bold", fontSize: "0.85rem" }}>📍 {loc.name}</span>
            <span style={{ color: "#888", fontSize: "0.75rem" }}>{loc.region}</span>
          </div>
        ))}
      </div>

      {/* 2. ENTEGRE DETAY VE GÖRSELLEŞTİRME PANELİ */}
      {activeLoc && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" }}>
          
          {/* SOL: Dijital Radar / Harita Simülasyonu */}
          <div style={{ 
            background: "#02040a", 
            border: "1px solid rgba(255, 215, 0, 0.3)", 
            borderRadius: "12px", 
            minHeight: "350px", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            position: "relative", 
            overflow: "hidden",
            boxShadow: "inset 0 0 50px rgba(0,0,0,0.8)"
          }}>
            <div className="radar-ring radar-ring-1"></div>
            <div className="radar-ring radar-ring-2"></div>
            <div className="radar-ring radar-ring-3"></div>
            
            <div style={{ position: "absolute", width: "100%", height: "100%", backgroundImage: "linear-gradient(rgba(255,215,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div style={{ zIndex: 10, textAlign: "center", background: "rgba(5,8,17,0.7)", padding: "20px", borderRadius: "15px", border: "1px solid rgba(255,215,0,0.2)", backdropFilter: "blur(4px)" }}>
              <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "10px", filter: "drop-shadow(0 0 10px #ffd700)" }}>🗺️</span>
              <h3 style={{ color: "#ffd700", margin: "0 0 5px 0", fontSize: "1.2rem", letterSpacing: "1px" }}>{activeLoc.name}</h3>
              <div style={{ color: "#00ff7f", fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "2px" }}>KOORDİNAT EŞİTLENDİ [SİMETRİ: %99.4]</div>
            </div>
          </div>

          {/* SAĞ: Akademik Rapor ve Matris Entegrasyonu */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            
            <div style={{ background: "rgba(255,215,0,0.04)", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "12px", padding: "20px", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid rgba(255,215,0,0.2)", paddingBottom: "10px", marginBottom: "15px" }}>
                <span style={{ fontSize: "1.2rem" }}>📜</span>
                <h4 style={{ color: "#ffd700", margin: 0, fontSize: "1rem" }}>Akademik Konum Raporu</h4>
              </div>
              <p style={{ color: "#ccc", lineHeight: "1.7", fontSize: "0.9rem", margin: 0 }}>
                {activeLoc.details}
              </p>
            </div>

            <div style={{ background: "rgba(30,144,255,0.05)", border: "1px solid rgba(30,144,255,0.4)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid rgba(30,144,255,0.2)", paddingBottom: "10px", marginBottom: "15px" }}>
                <span style={{ fontSize: "1.2rem" }}>🔗</span>
                <h4 style={{ color: "#1e90ff", margin: 0, fontSize: "1rem" }}>YKOS Matris Entegrasyonu</h4>
              </div>
              <p style={{ color: "#aaa", fontSize: "0.8rem", marginBottom: "15px" }}>
                Bu coğrafi havza, YKOS algoritmasında aşağıdaki matris düğümleriyle doğrudan eşleşmektedir:
              </p>
              
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {getIntegratedNodes(activeLoc.id).map((node, index) => (
                  <span 
                    key={index} 
                    style={{ 
                      background: "rgba(30,144,255,0.1)", 
                      border: "1px solid #1e90ff", 
                      color: "#1e90ff", 
                      padding: "6px 12px", 
                      borderRadius: "20px", 
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      boxShadow: "0 0 10px rgba(30,144,255,0.2)"
                    }}
                  >
                    {node}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}