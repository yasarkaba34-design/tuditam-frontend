import React from "react";

// Bağımsız İç Veri Tabanı (JSON Import Hatasını Engeller)
const readsData = [
  {
    id: 1,
    title: "Göbeklitepe T-Sütunu YKOS Okuması",
    category: "Arkeolojik Okuma Katmanı",
    period: "M.Ö. 9600",
    location: "Şanlıurfa, Anadolu",
    summary: "Göbeklitepe T-sütunları üzerindeki ikil sembollerin YKOS kök hece ve damga yöntemiyle okunması.",
    content: `Göbeklitepe T-sütunları üzerinde yer alan 'H' ve 'C' piktogramları ile hayvan rölyefleri, geleneksel arkeolojik yaklaşımların aksine birer süsleme değil, Ön-Türkçe kök hece dizgesine dayalı kavramsal metinlerdir.

YKOS (Yaşar Kaba Çözümleme Sistemi) yöntemi ile yapılan fonetik çözümlemede:
- 'H' sembolü: ER-İK-AN (Eril ve Dişil Dengesi / Bağlantı)
- 'C' sembolü: KÖK-SU (Varlık Kaynağı ve Akış)

Bu okuma, Anadolu'nun insanlık tarihinin en eski yazılı/damgalı iletişim havuzu olduğunu somut verilerle doğrulamaktadır.`
  },
  {
    id: 2,
    title: "Etrüsk Lemnos Kitabesi & Ön Türkçe Eşleşmesi",
    category: "Dil ve Yazıt Atlası",
    period: "M.Ö. 600",
    location: "Lemnos Adası / Ege Havzası",
    summary: "Lemnos adası mezar taşında yer alan alfabenin YKOS 100-200 matrisleri ile deşifre edilmesi.",
    content: `Etrüsk ve Lemnos adası kitabeleri, Batı dilleri yöntemiyle tam çözülememiş birer muamma olarak kabul edilmekteydi. YKOS Kök Hece Matrisi uygulandığında; harf gruplarının Anadolu kökenli Ön-Türkçe hece ekleri (BA, KÖK, YOL, BİR) ile %90'ın üzerinde anlam uyumu sağladığı görülmüştür.

Bu çalışma, Anadolu'dan Ege ve İtalya yarımadasına gerçekleşen kültür ve dil migrasyon hattının en güçlü kanıtıdır.`
  }
];

export default function ReadingScreen({ readId = 1 }) {
  const currentItem = readsData.find((item) => item.id === Number(readId)) || readsData[0];

  return (
    <div style={{ padding: "20px", color: "#fff", fontFamily: "Segoe UI, sans-serif" }}>
      <div style={{ backgroundColor: "#050811", border: "1px solid #ffd700", borderRadius: "12px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
        
        <div style={{ borderBottom: "1px solid rgba(255, 215, 0, 0.3)", paddingBottom: "15px", marginBottom: "20px" }}>
          <span style={{ backgroundColor: "rgba(255, 215, 0, 0.15)", color: "#ffd700", border: "1px solid #ffd700", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "bold" }}>
            {currentItem.category}
          </span>
          <h1 style={{ color: "#ffd700", fontSize: "1.8rem", margin: "12px 0 6px 0" }}>{currentItem.title}</h1>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", display: "flex", gap: "15px" }}>
            <span>📍 Konum: {currentItem.location}</span>
            <span>⏳ Dönem: {currentItem.period}</span>
          </div>
        </div>

        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", borderLeft: "4px solid #ffd700", padding: "12px 18px", marginBottom: "20px", fontSize: "0.95rem", color: "#e2e8f0" }}>
          <strong>Özet:</strong> {currentItem.summary}
        </div>

        <div style={{ lineHeight: "1.8", fontSize: "1rem", color: "#cbd5e1", whiteSpace: "pre-line" }}>
          {currentItem.content}
        </div>

      </div>
    </div>
  );
}