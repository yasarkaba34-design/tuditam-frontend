import React, { useState } from "react";
import "./MatrixToggle.css";

export default function MatrixToggle({ onNavigateRead }) {
  const [selectedNode, setSelectedNode] = useState(null);

  // Eksiksiz Zengin YKOS Ağ Haritası Veri Tabanı
  const nodes = [
    // Ana Merkezler
    { 
      id: "ykos100", label: "YKOS 100", x: 65, y: 55, size: 55, color: "#1e3a8a", border: "#3b82f6",
      details: { title: "YKOS 100 - Temel Kök Hece Matrisi", desc: "Anadolu merkezli 40 temel kök hece ve piktogram diziliminin matematiksel matrisi.", root: "Ana Hece Dizilimi: (BA, BİR, YOL, KÖK)", layer: "Katman: İlk Çağ Ön-Türkçe Piktogramlar" }
    },
    { 
      id: "ykos200", label: "YKOS 200", x: 55, y: 72, size: 58, color: "#064e3b", border: "#10b981",
      details: { title: "YKOS 200 - Arkeolojik Çözümleme", desc: "Göbeklitepe T-Sütunları, Sümer Tabletleri ve Glozel Yazıtları fonetik okuma katmanı.", root: "Analiz: Taş ve Kil üzeri Damga/Piktogram Eşleşmesi", layer: "Katman: M.Ö. 10.000 - M.Ö. 3.000 Arkeolojik Sözlük" }
    },
    { 
      id: "ykos300", label: "YKOS 300", x: 42, y: 68, size: 60, color: "#7c2d12", border: "#f97316",
      details: { title: "YKOS 300 - Küresel Göç & Akış Atlası", desc: "Anadolu'dan Asya, Avrupa ve Amerika kıtalarına kök hece ve damga yayılım hattı.", root: "Migrasyon: Anadolu → Orta Asya → Bering → Amerika", layer: "Katman: Karşılaştırmalı Dil & Dilbilgisi Atlası" }
    },

    // Atlaslar & Kadim Merkezler
    { 
      id: "anadolu", label: "ANADOLU ATLASI", x: 58, y: 46, size: 45, color: "#7c2d12", border: "#ea580c",
      details: { title: "Anadolu Kültür Atlası", desc: "Kök hece ve damga sisteminin doğuş ve küresel yayılım odağı.", root: "Odak: Çatalhöyük, Göbeklitepe, Karahantepe hece havuzu.", layer: "Sistem: YKOS Başlangıç Çekirdeği" }
    },
    { 
      id: "ortaasya", label: "ORTA ASYA ATLASI", x: 34, y: 60, size: 42, color: "#7c2d12", border: "#ea580c",
      details: { title: "Orta Asya Damga Dizgesi", desc: "Anadolu'dan doğuya taşınan Yenisey, Orhun ve Tamgalı-Say damga havuzu.", root: "Damga Sayısı: 9.870 Onaylı Petroglif", layer: "Yayılım: Yenisey - Altay - Tamgalı" }
    },
    { 
      id: "amerika", label: "AMERİKA ATLASI", x: 30, y: 71, size: 38, color: "#7c2d12", border: "#ea580c",
      details: { title: "Amerika Kıta Atlası", desc: "Bering hattı üzerinden Mayalar ve Olmeklere uzanan damga sürekliliği.", root: "Eşleşme: Maya Piktogramları & YKOS Kök Heceler", layer: "Süreklilik: M.Ö. 4000 Göç Hattı" }
    },
    { 
      id: "avrupa", label: "AVRUPA ATLASI", x: 42, y: 90, size: 40, color: "#7c2d12", border: "#ea580c",
      details: { title: "Avrupa Dil Akışı Atlası", desc: "Etrüsk, Vinca ve Glozel yazıtlarıyla Akdeniz ve Batı Avrupa hece yayılımı.", root: "Eşleşme: Lemnos - Etrüsk Alfabeleri", layer: "Yayılım: Batı Akdeniz - Ege" }
    },

    // Arkeolojik Okuma Merkezleri
    { 
      id: "sumer", label: "Sümer", x: 54, y: 58, size: 36, color: "#047857", border: "#34d399",
      details: { title: "Sümer Piktogram Okuması", desc: "Mezopotamya erken dönem çivi ve resim yazılarının YKOS kök çözümü.", root: "Fonetik Çözüm: DUMU-Zİ / UR-UK Kök Heceleri", layer: "Tarihlendirme: M.Ö. 3500" }
    },
    { 
      id: "gobeklitepe", label: "Göbeklitepe", x: 63, y: 75, size: 36, color: "#047857", border: "#34d399",
      details: { title: "Göbeklitepe T-Sütunu YKOS Okuması", desc: "T-Sütunlar üzerindeki H ve C sembollerinin YKOS kök hece analizi.", root: "Fonetik Çözüm: ER-İK-AN / KÖK-SU Metin Eşleşmesi", layer: "Tarihlendirme: M.Ö. 9600" }
    },
    { 
      id: "etrusk", label: "Etrüsk", x: 49, y: 93, size: 34, color: "#047857", border: "#34d399",
      details: { title: "Etrüsk Lemnos Kitabesi", desc: "Etrüsk ve Lemnos adası kitabelerinin Ön Türkçe hece kökleri ile tam deşifresi.", root: "Eşleşme: YKOS-100 Kök Fonetiği", layer: "Bölge: İtalya - Ege Havzası" }
    },
    { 
      id: "glozel", label: "Glozel", x: 52, y: 86, size: 32, color: "#047857", border: "#34d399",
      details: { title: "Glozel Tablet Çözümlemesi", desc: "Fransa Glozel bölgesinde bulunan kadim kemik ve taş üzeri damgalar.", root: "Eşleşme: Glozel Piktogramları & YKOS-200", layer: "Bölge: Batı Avrupa" }
    },

    // Kök Heceler & Damgalar
    { 
      id: "bir", label: "BİR", x: 68, y: 48, size: 34, color: "#581c87", border: "#a855f7",
      details: { title: "BİR (Kök Hece Çözümlemesi)", desc: "Varlık, bütünlük ve birincil kaynak sembolizmi.", root: "Fonetik Çözüm: B-İ-R / Başlangıç ve Nokta Damgası", layer: "Katalog Ref: YKOS-KÖK-01" }
    },
    { 
      id: "yol", label: "YOL", x: 74, y: 53, size: 32, color: "#1e293b", border: "#64748b",
      details: { title: "YOL (Kök Hece Çözümlemesi)", desc: "YKOS Kavramsal Çerçevesi: Süreç, akış ve dinamik ilerleme hatı ('Rulo değil yol').", root: "Fonetik Çözüm: Y-O-L / Akış, Yön ve Hareket Damgası", layer: "Katalog Ref: YKOS-KÖK-04" }
    },
    { 
      id: "kok", label: "KÖK", x: 74, y: 26, size: 34, color: "#581c87", border: "#a855f7",
      details: { title: "KÖK (Kök Hece Çözümlemesi)", desc: "Temel, dip, köken ve gövdeyi toprağa/geleneğe bağlayan ana damga.", root: "Kök Analizi: K-Ö-K / Derin Bağlantı", layer: "Piktogram Çözümü: Ağaç/Bitki Kök Çizgisi" }
    },
    { 
      id: "kur", label: "KUR", x: 63, y: 16, size: 34, color: "#7c2d12", border: "#f97316",
      details: { title: "KUR (Kök Hece Çözümlemesi)", desc: "İnşa etmek, kurmak, düzen ve merkez oluşturma damgası.", root: "Fonetik Çözüm: K-U-R / Yapısal Düzen", layer: "Katalog Ref: YKOS-KÖK-08" }
    },
    { 
      id: "ba", label: "BA", x: 64, y: 34, size: 34, color: "#7c2d12", border: "#f97316",
      details: { title: "BA (Kök Hece Çözümlemesi)", desc: "Bağlama, başlama ve birleşme kök hecesi.", root: "Fonetik Çözüm: B-A / Başlangıç İlliyeti", layer: "Katalog Ref: YKOS-KÖK-02" }
    },
    { 
      id: "cev", label: "ÇEV", x: 61, y: 44, size: 30, color: "#1e293b", border: "#64748b",
      details: { title: "ÇEV (Kök Hece Çözümlemesi)", desc: "Çevrelemek, dairevi alan ve kuşatma sembolü.", root: "Fonetik Çözüm: Ç-E-V / Dairesel Sınır", layer: "Katalog Ref: YKOS-KÖK-12" }
    },
    { 
      id: "dis", label: "DİŞ", x: 50, y: 38, size: 32, color: "#1e293b", border: "#64748b",
      details: { title: "DİŞ (Kök Hece Çözümlemesi)", desc: "Dış, dışarısı, kesim hattı ve çentik damgası.", root: "Fonetik Çözüm: D-İ-Ş / Keskin Ayrım", layer: "Katalog Ref: YKOS-KÖK-15" }
    },
    { 
      id: "yuz", label: "YÜZ", x: 44, y: 38, size: 30, color: "#1e293b", border: "#64748b",
      details: { title: "YÜZ (Kök Hece Çözümlemesi)", desc: "Sath, yüzey, görünür kılma ve çehre sembolizmi.", root: "Fonetik Çözüm: Y-Ü-Z / Dış Düzlem", layer: "Katalog Ref: YKOS-KÖK-18" }
    },
    { 
      id: "derin", label: "DERİN", x: 36, y: 34, size: 34, color: "#1e293b", border: "#64748b",
      details: { title: "DERİN (Kök Hece Çözümlemesi)", desc: "Derinlik, dip katman ve gizli öz kavramı.", root: "Fonetik Çözüm: D-E-R-İ-N / İçsel Katman", layer: "Katalog Ref: YKOS-KÖK-22" }
    },
    { 
      id: "bol", label: "BÖL", x: 57, y: 85, size: 32, color: "#581c87", border: "#a855f7",
      details: { title: "BÖL (Kök Hece Çözümlemesi)", desc: "Parçalamak, taksim etmek ve alan ayırma damgası.", root: "Fonetik Çözüm: B-Ö-L / Paylaşım Çizgisi", layer: "Katalog Ref: YKOS-KÖK-25" }
    },
    { 
      id: "kes", label: "KES", x: 61, y: 66, size: 32, color: "#581c87", border: "#a855f7",
      details: { title: "KES (Kök Hece Çözümlemesi)", desc: "Aksatmak, durdurmak ve sınırı netleştirme damgası.", root: "Fonetik Çözüm: K-E-S / Net Kesim", layer: "Katalog Ref: YKOS-KÖK-29" }
    }
  ];

  // Tam Bağlantı Ağı
  const links = [
    { from: "ykos100", to: "bir" },
    { from: "ykos100", to: "yol" },
    { from: "ykos100", to: "anadolu" },
    { from: "ykos100", to: "kes" },
    { from: "ykos200", to: "gobeklitepe" },
    { from: "ykos200", to: "sumer" },
    { from: "ykos200", to: "bol" },
    { from: "ykos300", to: "ortaasya" },
    { from: "ykos300", to: "amerika" },
    { from: "ykos300", to: "avrupa" },
    { from: "anadolu", to: "ba" },
    { from: "ba", to: "kur" },
    { from: "ba", to: "kok" },
    { from: "anadolu", to: "cev" },
    { from: "cev", to: "dis" },
    { from: "dis", to: "yuz" },
    { from: "yuz", to: "derin" },
    { from: "avrupa", to: "etrusk" },
    { from: "etrusk", to: "glozel" }
  ];

  const getNode = (id) => nodes.find(n => n.id === id);

  return (
    <div className="matrix-canvas-wrapper" style={{ width: "100%", height: "650px", backgroundColor: "#030712", borderRadius: "12px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,215,0,0.3)" }}>
      
      {/* ÜST SOL BİLGİ & AÇIKLAMA GÖSTERGESİ (LEJANT) */}
      <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "rgba(5,8,17,0.92)", border: "1px solid #ffd700", padding: "14px 18px", borderRadius: "10px", zIndex: 10, boxShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
        <h3 style={{ color: "#ffd700", margin: 0, fontSize: "1.05rem", fontWeight: "bold" }}>YKOS DİNAMİK ÇÖZÜMLEME MATRİSİ</h3>
        <small style={{ color: "#38bdf8", display: "block", marginTop: "3px", fontWeight: "bold", fontSize: "0.75rem" }}>GLOBAL ATLAS ENTEGRASYONU</small>
        
        {/* KATMAN GÖSTERGE LEJANTI */}
        <div style={{ marginTop: "10px", borderTop: "1px solid rgba(255, 215, 0, 0.2)", paddingTop: "8px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.72rem", color: "#e2e8f0" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#3b82f6", display: "inline-block", boxShadow: "0 0 6px #3b82f6" }}></span>
            <strong>YKOS 100:</strong> Kök-Hece Matrisi
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.72rem", color: "#e2e8f0" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }}></span>
            <strong>YKOS 200:</strong> Kültür & Arkeoloji Okumaları
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.72rem", color: "#e2e8f0" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#f97316", display: "inline-block", boxShadow: "0 0 6px #f97316" }}></span>
            <strong>YKOS 300:</strong> Küresel Atlas & Göç Akışı
          </div>
        </div>
      </div>

      {/* Tuval (Çizgiler + Baloncuklar) */}
      <svg style={{ width: "100%", height: "100%" }}>
        {links.map((link, idx) => {
          const source = getNode(link.from);
          const target = getNode(link.to);
          if (!source || !target) return null;
          return (
            <line
              key={idx}
              x1={`${source.x}%`}
              y1={`${source.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="rgba(255, 215, 0, 0.3)"
              strokeWidth="2"
            />
          );
        })}

        {nodes.map((node) => (
          <g 
            key={node.id} 
            onClick={() => setSelectedNode(node)}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 2}
              fill={node.color}
              stroke={selectedNode?.id === node.id ? "#ffffff" : node.border}
              strokeWidth={selectedNode?.id === node.id ? "4" : "2.5"}
              style={{ filter: "drop-shadow(0px 0px 10px " + node.border + ")" }}
            />
            <text
              x={`${node.x}%`}
              y={`${node.y}%`}
              textAnchor="middle"
              dy=".3em"
              fill="#ffffff"
              fontSize={node.size > 45 ? "12px" : "10px"}
              fontWeight="bold"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* SAĞ ALT: CANLI YKOS ÇÖZÜMLEME KARTI */}
      {selectedNode && selectedNode.details && (
        <div style={{ position: "absolute", bottom: "20px", right: "20px", backgroundColor: "#050811", border: "1px solid #ffd700", padding: "16px", borderRadius: "12px", width: "300px", color: "#fff", zIndex: 100, boxShadow: "0 10px 30px rgba(0,0,0,0.95)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", borderBottom: "1px solid rgba(255,215,0,0.2)", paddingBottom: "6px" }}>
            <h4 style={{ color: "#ffd700", margin: 0, fontSize: "1rem" }}>{selectedNode.details.title}</h4>
            <button onClick={() => setSelectedNode(null)} style={{ background: "transparent", border: "none", color: "#ffd700", fontSize: "1.1rem", cursor: "pointer" }}>✕</button>
          </div>
          
          <p style={{ fontSize: "0.82rem", color: "#e2e8f0", margin: "6px 0", lineHeight: "1.4" }}>
            {selectedNode.details.desc}
          </p>

          <div style={{ background: "rgba(255, 215, 0, 0.08)", borderLeft: "3px solid #ffd700", padding: "6px 10px", margin: "10px 0", borderRadius: "4px", fontSize: "0.78rem", color: "#fef08a" }}>
            {selectedNode.details.root}
          </div>

          <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginBottom: "12px" }}>
            {selectedNode.details.layer}
          </div>

          <button 
            onClick={() => onNavigateRead && onNavigateRead(1)}
            style={{ width: "100%", background: "linear-gradient(135deg, #ffd700, #b8860b)", color: "#000", border: "none", padding: "8px", borderRadius: "6px", fontWeight: "bold", fontSize: "0.8rem", cursor: "pointer" }}
          >
            DETAYLI ANALİZİ OKU ➔
          </button>
        </div>
      )}

    </div>
  );
}
