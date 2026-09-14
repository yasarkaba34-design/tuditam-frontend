import React, { useState } from "react";

export default function GocHaritasi() {
  const [selectedFlow, setSelectedFlow] = useState(0);

  const migrationFlows = [
    {
      id: "FLOW-01",
      title: "Anadolu’dan Avrasya’ya Damga ve Kök Yayılımı",
      origin: "Anadolu Merkez (Göbeklitepe / İç Anadolu Havzası)",
      direction: "Anadolu'dan Asya ve Avrupa'ya Doğru",
      period: "MÖ 10. Bin - Neolitik Dönem",
      description: "Anadolu kökenli kök hece ve damga formlarının, coğrafi ve demografik akış hatlarıyla Asya içlerine ve batıya doğru yayılım simülasyonu."
    },
    {
      id: "FLOW-02",
      title: "Petroglif ve Sembol Göç Yolları",
      origin: "Merkezî Anadolu & Yaylalar",
      direction: "Doğu ve Kuzey Hattı",
      period: "Tunç Çağı",
      description: "Tarih öncesi kaya resimlerinde ve damgalarda görülen ortak motiflerin, ana karadan komşu havzalara aktarım vektörleri."
    }
  ];

  const currentFlow = migrationFlows[selectedFlow] || migrationFlows[0];

  return (
    <div style={{ backgroundColor: "#171717", color: "#fff", padding: "24px", borderRadius: "8px", border: "1px solid #444", animation: "fadeIn 0.4s ease" }}>
      <div style={{ marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "12px" }}>
        <h2 style={{ color: "#ffd700", fontSize: "22px", margin: 0 }}>Göç & Akış Haritası</h2>
        <p style={{ color: "#aaa", fontSize: "13px", margin: "4px 0 0 0" }}>
          Anadolu merkezli tarihsel göç rotalarını, kök-hece yayılım vektörlerini ve kültürel akış hatlarını inceleyin.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "300px minmax(0, 1fr)", gap: "20px" }}>
        {/* Akış Seçim Listesi */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {migrationFlows.map((flow, index) => {
            const isSelected = selectedFlow === index;
            return (
              <button
                key={flow.id}
                type="button"
                onClick={() => setSelectedFlow(index)}
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  backgroundColor: isSelected ? "#ffd700" : "#111",
                  color: isSelected ? "#000" : "#fff",
                  border: "1px solid",
                  borderColor: isSelected ? "#ffd700" : "#333",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: isSelected ? "bold" : "normal",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{flow.title}</span>
                <span style={{ fontSize: "0.7rem", opacity: 0.75 }}>{flow.period}</span>
              </button>
            );
          })}
        </div>

        {/* Akış Detay ve Görselleştirme Alanı */}
        <div style={{ backgroundColor: "#0b0c10", border: "1px solid #333", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ backgroundColor: "rgba(255,215,0,0.1)", border: "1px solid #ffd700", color: "#ffd700", padding: "4px 10px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "bold" }}>
              {currentFlow.period}
            </span>
            <span style={{ color: "#00ff7f", fontSize: "0.75rem", fontFamily: "monospace" }}>VEKTÖR: ANADOLU ➔ ASYA / DIŞ MERKEZ</span>
          </div>

          <h3 style={{ color: "#ffd700", fontSize: "1.3rem", margin: 0 }}>{currentFlow.title}</h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "10px 0" }}>
            <div style={{ background: "#111", padding: "12px", borderRadius: "6px", border: "1px solid #333" }}>
              <span style={{ color: "#888", fontSize: "0.75rem", display: "block" }}>ÇIKIŞ MERKEZİ</span>
              <strong style={{ color: "#fff", fontSize: "0.85rem" }}>{currentFlow.origin}</strong>
            </div>
            <div style={{ background: "#111", padding: "12px", borderRadius: "6px", border: "1px solid #333" }}>
              <span style={{ color: "#888", fontSize: "0.75rem", display: "block" }}>AKIŞ YÖNÜ</span>
              <strong style={{ color: "#ffd700", fontSize: "0.85rem" }}>{currentFlow.direction}</strong>
            </div>
          </div>

          <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
            {currentFlow.description}
          </p>
        </div>
      </div>
    </div>
  );
}