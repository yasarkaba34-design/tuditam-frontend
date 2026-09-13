// src/components/YKOSPosterGallery.jsx
import React, { useState } from "react";

const posters = [
  { id: 1, no: "01", title: "Sıfır Noktası & Buzul Sığınağı", desc: "Anadolu refugium modeli ve derin zaman hafızası", icon: "🌋" },
  { id: 2, no: "02", title: "Kozmik Mühür: Göbeklitepe", desc: "T-Sütunları ve erken grafik hafıza kodları", icon: "🗿" },
  { id: 3, no: "03", title: "Büyük Akış (Yol): Asya Hatları", desc: "Anadolu'dan Altay ve Saymalıtaş'a göç hatları", icon: "🧭" },
  { id: 4, no: "04", title: "Orhun & Avrasya Damga Ağı", desc: "Runik mühürler ve boy damgalarının tipolojisi", icon: "📜" },
  { id: 5, no: "05", title: "Etrüsk & Fransa Glozel Sırrı", desc: "Avrupa'daki çizgisel Ön-Türkçe katmanları", icon: "🏛️" },
  { id: 6, no: "06", title: "Sümer & Eklemeli Dil Matrisi", desc: "Çivi yazısında kök-hece korunum sistemi", icon: "📐" },
  { id: 7, no: "07", title: "Hitit & Luvi Hiyeroglifleri", desc: "Yazılıkaya kabartmalarındaki mühür dili", icon: "⚜️" },
  { id: 8, no: "08", title: "M5 Kök-Hece İşletim Sistemi", desc: "Türkçenin algoritmik ve matematiksel kod yapısı", icon: "⚡" },
  { id: 9, no: "09", title: "Küresel Petroglif Atlası", desc: "Amerika'dan Avrasya'ya küresel sembol yayılımı", icon: "🗺️" },
  { id: 10, no: "10", title: "YKOS Bilimsel Manifestosu", desc: "Şartlandırmadan okumak: Önce Veri, Sonra Analiz", icon: "⚖️" },
  { id: 11, no: "11", title: "YKOS 1000 Kuantum & AI Ağı", desc: "Canlı graf veri tabanı ve yapay zekâ entegrasyonu", icon: "🚀" }
];

export default function YKOSPosterGallery({ onSelectPoster = () => {} }) {
  const [active, setActive] = useState(posters[0]);

  return (
    <div style={{ background: "#050811", border: "1.5px solid #ffd700", borderRadius: "14px", padding: "18px", color: "#fff", marginTop: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255, 215, 0, 0.3)", paddingBottom: "10px", marginBottom: "14px" }}>
        <h3 style={{ color: "#ffd700", margin: 0, fontSize: "1.1rem" }}>
          🖼️ 11'Lİ YKOS SEMİYOTİK AFİŞ & MANİFESTO SERİSİ
        </h3>
        <span style={{ color: "#38bdf8", fontSize: "0.8rem", fontWeight: "bold" }}>KÜLLİYAT KOLEKSİYONU</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "12px" }}>
        {posters.map((p) => (
          <div
            key={p.id}
            onClick={() => { setActive(p); onSelectPoster(p); }}
            style={{
              background: active.id === p.id ? "rgba(245, 158, 11, 0.15)" : "#0c101d",
              border: active.id === p.id ? "1.5px solid #f59e0b" : "1px solid rgba(255, 215, 0, 0.25)",
              borderRadius: "8px",
              padding: "12px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "1.2rem" }}>{p.icon}</span>
              <span style={{ color: "#f59e0b", fontSize: "0.75rem", fontWeight: "900" }}>PANEL {p.no}</span>
            </div>
            <div style={{ color: "#ffd700", fontWeight: "bold", fontSize: "0.85rem", marginBottom: "4px" }}>{p.title}</div>
            <div style={{ color: "#94a3b8", fontSize: "0.72rem", lineHeight: "1.3" }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
