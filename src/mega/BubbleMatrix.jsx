// FILE: src/mega/BubbleMatrix.jsx
import React, { useState, useEffect, useRef } from "react";

/**
 * @typedef {Object} Bubble
 * @property {string} id
 * @property {string} atlasRef
 * @property {Object} position
 * @property {number} position.x
 * @property {number} position.y
 * @property {string} position.layer
 * @property {Object} resonance
 * @property {number} resonance.intensity
 * @property {number} resonance.frequency
 * @property {string} resonance.color
 */

export default function BubbleMatrix({ onGoHome, onSelectNode }) {
  const [pipelineResult, setPipelineResult] = useState(null);

  // Dahili Pipeline Tetikleyici (Harici dosya ihtiyacını ortadan kaldırır)
  const triggerPipeline = (node) => {
    setPipelineResult({
      status: "SUCCESS",
      nodeId: node.id,
      label: node.label,
      matchScore: node.score,
      analysisTimestamp: new Date().toISOString(),
      quantumState: "SYNCHRONIZED",
      activeConnections: node.connections.split(", ")
    });
  };

  // Tam Kapsamlı Baloncuk Kümesi (40+ Düğüm) - Bubble modeline tam uyumlu
  const nodes = [
    // 1. ÇEKİRDEK VE KURAMSAL MERKEZ
    { id: "YKOS-1000", label: "YKOS 1000 — Külliyat & Algoritmik Merkez", desc: "Anadolu Kök-Hece ve Damga sistematiğinin ana kuramsal çekirdeği.", connections: "YKOS 100, YKOS 200, YKOS 500, ANADOLU", score: "%99.9", x: 470, y: 190, r: 28, color: "#f59e0b", atlasRef: "ATLAS-01", position: { x: 470, y: 190, layer: "CORE" }, resonance: { intensity: 9.9, frequency: 432, color: "#f59e0b" } },
    { id: "YKOS-100", label: "YKOS 100 — Kök Hece Matrisi", desc: "100 Temel Kök hecenin fonetik ve anlamsal tam eşleşme tablosu.", connections: "ÇEV, BA, ER, YOL, OL, KÖK, VAR, BİR", score: "%99.7", x: 530, y: 260, r: 25, color: "#06b6d4", atlasRef: "ATLAS-02", position: { x: 530, y: 260, layer: "MATRIX" }, resonance: { intensity: 9.7, frequency: 528, color: "#06b6d4" } },
    { id: "YKOS-200", label: "YKOS 200 — Küresel Damga Ağı", desc: "Anadolu merkezli 200 temel damganın dünya petrogliflerindeki yayılımı.", connections: "ANADOLU, ASYA, AMERİKA, AVRUPA, AFRİKA", score: "%99.5", x: 440, y: 310, r: 26, color: "#10b981", atlasRef: "ATLAS-03", position: { x: 440, y: 310, layer: "GLOBAL" }, resonance: { intensity: 9.5, frequency: 639, color: "#10b981" } },
    { id: "YKOS-500", label: "YKOS 500 — Karşılaştırmalı Morfoloji", desc: "Sümer, Hitit, Etrüsk ve Ön-Türkçe çapraz dil morfolojisi.", connections: "SÜMER, ETRÜSK, HİTİT, URARTU", score: "%98.9", x: 330, y: 240, r: 24, color: "#f97316", atlasRef: "ATLAS-04", position: { x: 330, y: 240, layer: "MORPHOLOGY" }, resonance: { intensity: 9.2, frequency: 741, color: "#f97316" } },

    // 2. KADİM COĞRAFYA VE ARKEOLOJİK MERKEZLER
    { id: "ANADOLU", label: "Anadolu Atlası — Ana Merkez", desc: "12.000 yıllık kültürel, morfolojik ve epigrafik ana merkez.", connections: "GÖBEKLİTEPE, ÇATALHÖYÜK, YAZILIKAYA", score: "%99.9", x: 590, y: 190, r: 22, color: "#eab308", atlasRef: "ATLAS-05", position: { x: 590, y: 190, layer: "GEO" }, resonance: { intensity: 9.9, frequency: 852, color: "#eab308" } },
    { id: "GÖBEKLİTEPE", label: "Göbeklitepe T-Sütunları", desc: "H sembolü, dairesel tapınak düzeni ve kozmik steller.", connections: "ANADOLU, YKOS 100, H-DAMGA", score: "%99.8", x: 670, y: 150, r: 19, color: "#10b981", atlasRef: "ATLAS-06", position: { x: 670, y: 150, layer: "GEO" }, resonance: { intensity: 9.8, frequency: 963, color: "#10b981" } },
    { id: "ÇATALHÖYÜK", label: "Çatalhöyük Dairesel Damgalar", desc: "MÖ 7000 mühür ve duvar bezemelerinde ÇEV/BA ilkeleri.", connections: "ANADOLU, ÇEV, BA", score: "%99.3", x: 630, y: 240, r: 18, color: "#10b981", atlasRef: "ATLAS-07", position: { x: 630, y: 240, layer: "GEO" }, resonance: { intensity: 9.3, frequency: 432, color: "#10b981" } },
    { id: "YAZILIKAYA", label: "Yazılıkaya Açıkhava Tapınağı", desc: "Hitit panteonu ve hiyeroglif damga kompozisyonları.", connections: "ANADOLU, HİTİT", score: "%98.7", x: 690, y: 210, r: 17, color: "#06b6d4", atlasRef: "ATLAS-08", position: { x: 690, y: 210, layer: "GEO" }, resonance: { intensity: 8.7, frequency: 528, color: "#06b6d4" } },
    { id: "SAYMALITAŞ", label: "Saymalıtaş Petroglifleri", desc: "Tiyanşan dağlarında on binlerce piktogram ve güneş başlı figür.", connections: "ASYA, GÜNEŞ-BAŞ", score: "%99.2", x: 330, y: 350, r: 18, color: "#a855f7", atlasRef: "ATLAS-09", position: { x: 330, y: 350, layer: "GEO" }, resonance: { intensity: 9.2, frequency: 639, color: "#a855f7" } },
    { id: "TAMGALI", label: "Tamgalısay Vadisi", desc: "Kazakistan kaya resimleri ve Ön-Türk damga kronolojisi.", connections: "ASYA, SAYMALITAŞ", score: "%98.9", x: 260, y: 360, r: 16, color: "#a855f7", atlasRef: "ATLAS-10", position: { x: 260, y: 360, layer: "GEO" }, resonance: { intensity: 8.9, frequency: 741, color: "#a855f7" } },
    { id: "ORHUN", label: "Orhun Vadisi Yazıtları", desc: "Köktürk runik harflerinin tamga kökenleri.", connections: "ASYA, YKOS 100", score: "%99.4", x: 380, y: 380, r: 17, color: "#a855f7", atlasRef: "ATLAS-11", position: { x: 380, y: 380, layer: "GEO" }, resonance: { intensity: 9.4, frequency: 852, color: "#a855f7" } },
    
    // 3. KITALARARASI VE MEDENİYET HATTI
    { id: "ASYA", label: "Orta Asya & Avrasya Kuşağı", desc: "Bozkır petroglifleri ve göç yolları.", connections: "YKOS 200, SAYMALITAŞ, TAMGALI", score: "%99.1", x: 360, y: 320, r: 20, color: "#a855f7", atlasRef: "ATLAS-12", position: { x: 360, y: 320, layer: "CONTINENT" }, resonance: { intensity: 9.1, frequency: 963, color: "#a855f7" } },
    { id: "AMERİKA", label: "Amerika Kıtası — Maya & İnka", desc: "Piktogramlar ve petroglif benzerlik hatları.", connections: "YKOS 200, BERING", score: "%98.1", x: 230, y: 300, r: 18, color: "#f43f5e", atlasRef: "ATLAS-13", position: { x: 230, y: 300, layer: "CONTINENT" }, resonance: { intensity: 8.1, frequency: 432, color: "#f43f5e" } },
    { id: "AVRUPA", label: "Avrupa — Etrüsk & Glozel", desc: "Akdeniz epigrafisi ve Lemnos mezar taşı paralelleri.", connections: "YKOS 200, ETRÜSK", score: "%98.0", x: 250, y: 220, r: 18, color: "#6366f1", atlasRef: "ATLAS-14", position: { x: 250, y: 220, layer: "CONTINENT" }, resonance: { intensity: 8.0, frequency: 528, color: "#6366f1" } },
    { id: "SÜMER", label: "Sümer — Çivi Yazısı Öncesi", desc: "Uruk ve Cemdet Nasr piktografik kil tabletleri.", connections: "YKOS 500, KÖK", score: "%98.8", x: 370, y: 170, r: 17, color: "#f97316", atlasRef: "ATLAS-15", position: { x: 370, y: 170, layer: "CIVILIZATION" }, resonance: { intensity: 8.8, frequency: 639, color: "#f97316" } },
    { id: "ETRÜSK", label: "Etrüsk Alfabesi & Lemnos", desc: "İtalya yarımadası ve Ege adalarında Ön-Türkçe okumalar.", connections: "YKOS 500, AVRUPA", score: "%98.6", x: 270, y: 170, r: 17, color: "#f97316", atlasRef: "ATLAS-16", position: { x: 270, y: 170, layer: "CIVILIZATION" }, resonance: { intensity: 8.6, frequency: 741, color: "#f97316" } },
    { id: "HİTİT", label: "Hitit Hiyeroglifleri", desc: "Anadolu Luvi ve Hitit mühür damgaları.", connections: "YKOS 500, YAZILIKAYA", score: "%98.5", x: 310, y: 120, r: 16, color: "#f97316", atlasRef: "ATLAS-17", position: { x: 310, y: 120, layer: "CIVILIZATION" }, resonance: { intensity: 8.5, frequency: 852, color: "#f97316" } },
    { id: "URARTU", label: "Urartu Çivi & Resim Yazısı", desc: "Doğu Anadolu dağ kaleleri ve hayat ağacı damgaları.", connections: "YKOS 500, ANADOLU", score: "%98.2", x: 390, y: 110, r: 16, color: "#f97316", atlasRef: "ATLAS-18", position: { x: 390, y: 110, layer: "CIVILIZATION" }, resonance: { intensity: 8.2, frequency: 963, color: "#f97316" } },

    // 4. KOZMİK İLKELER VE KÖK HECELER
    { id: "O", label: "O — Evrensel Öz & Merkez", desc: "Dairesel form, mutlak başlangıç ve kaynak.", connections: "BİR, YOL, OL, KÖK", score: "%99.9", x: 520, y: 90, r: 20, color: "#ffd700", atlasRef: "ATLAS-19", position: { x: 520, y: 90, layer: "ROOT" }, resonance: { intensity: 9.9, frequency: 432, color: "#ffd700" } },
    { id: "BİR", label: "BİR — Teklik & İlk Aks", desc: "Dikey eksen, ilk kutuplanma ve irade.", connections: "O, ER, VAR", score: "%99.8", x: 590, y: 80, r: 18, color: "#ffd700", atlasRef: "ATLAS-20", position: { x: 590, y: 80, layer: "ROOT" }, resonance: { intensity: 9.8, frequency: 528, color: "#ffd700" } },
    { id: "YOL", label: "YOL — Akış ve Devinim", desc: "Zaman ve mekan içindeki hareket morfolojisi.", connections: "O, OL, KÖK", score: "%99.2", x: 620, y: 310, r: 18, color: "#eab308", atlasRef: "ATLAS-21", position: { x: 620, y: 310, layer: "ROOT" }, resonance: { intensity: 9.2, frequency: 639, color: "#eab308" } },
    { id: "OL", label: "OL — Maddeleşme ve Varlık", desc: "Tohumdan forma geçiş döngüsü.", connections: "O, YOL, BİR", score: "%99.0", x: 560, y: 340, r: 17, color: "#eab308", atlasRef: "ATLAS-22", position: { x: 560, y: 340, layer: "ROOT" }, resonance: { intensity: 9.0, frequency: 741, color: "#eab308" } },
    { id: "KÖK", label: "KÖK — Temel & Kaynak", desc: "Yerin derinliğine inen ve besleyen ontolojik ilke.", connections: "O, YOL, SÜMER", score: "%99.4", x: 480, y: 370, r: 18, color: "#eab308", atlasRef: "ATLAS-23", position: { x: 480, y: 370, layer: "ROOT" }, resonance: { intensity: 9.4, frequency: 852, color: "#eab308" } },
    { id: "VAR", label: "VAR — Mevcudiyet", desc: "Algılanan ve şahit olunan evren düzlemi.", connections: "BİR, OL", score: "%98.8", x: 650, y: 90, r: 16, color: "#ffd700", atlasRef: "ATLAS-24", position: { x: 650, y: 90, layer: "ROOT" }, resonance: { intensity: 8.8, frequency: 963, color: "#ffd700" } },
    { id: "ER", label: "ER — Güç ve Bilinç", desc: "İnsan idraki ve dikey yükseliş damgası.", connections: "BİR, YKOS 100", score: "%98.7", x: 450, y: 70, r: 16, color: "#10b981", atlasRef: "ATLAS-25", position: { x: 450, y: 70, layer: "ROOT" }, resonance: { intensity: 8.7, frequency: 432, color: "#10b981" } },
    { id: "BA", label: "BA — Bağlantı & Köprü", desc: "İki noktayı birleştiren temel morfem.", connections: "YKOS 100, ÇEV", score: "%98.5", x: 410, y: 60, r: 16, color: "#06b6d4", atlasRef: "ATLAS-26", position: { x: 410, y: 60, layer: "ROOT" }, resonance: { intensity: 8.5, frequency: 528, color: "#06b6d4" } },
    { id: "ÇEV", label: "ÇEV — Koruyucu Daire", desc: "Merkezi saran çember ve sınır morfolojisi.", connections: "YKOS 100, BA, ÇATALHÖYÜK", score: "%98.9", x: 360, y: 70, r: 17, color: "#06b6d4", atlasRef: "ATLAS-27", position: { x: 360, y: 70, layer: "ROOT" }, resonance: { intensity: 8.9, frequency: 639, color: "#06b6d4" } },
    { id: "AY", label: "AY — Döngüsel Zaman", desc: "Hilal formu, kozmik takvim ve kadınsal ilke.", connections: "O, ANADOLU", score: "%98.6", x: 570, y: 130, r: 15, color: "#38bdf8", atlasRef: "ATLAS-28", position: { x: 570, y: 130, layer: "ROOT" }, resonance: { intensity: 8.6, frequency: 741, color: "#38bdf8" } },
    { id: "KÜN", label: "KÜN — Güneş & Işık", desc: "Merkezdeki ışık kaynağı ve ısı damgası.", connections: "O, BİR", score: "%98.9", x: 480, y: 130, r: 15, color: "#ffd700", atlasRef: "ATLAS-29", position: { x: 480, y: 130, layer: "ROOT" }, resonance: { intensity: 8.9, frequency: 852, color: "#ffd700" } },
    { id: "TÖRE", label: "TÖRE — Kozmik Denge & Adalet", desc: "Dört yönün ve gök kubbenin sarsılmaz nizamı.", connections: "O, YKOS 1000", score: "%99.1", x: 530, y: 40, r: 16, color: "#a855f7", atlasRef: "ATLAS-30", position: { x: 530, y: 40, layer: "ROOT" }, resonance: { intensity: 9.1, frequency: 963, color: "#a855f7" } },
    { id: "ÖK", label: "ÖK — Yüce Akıl & Yaratıcı", desc: "Öksökö (Çift başlı kartal) ve kozmik zeka damgası.", connections: "O, TÖRE", score: "%99.3", x: 470, y: 30, r: 15, color: "#a855f7", atlasRef: "ATLAS-31", position: { x: 470, y: 30, layer: "ROOT" }, resonance: { intensity: 9.3, frequency: 432, color: "#a855f7" } },
    { id: "EL", label: "EL — İrade & Tasarım", desc: "Göbeklitepe stellerindeki el ve kavrayış damgası.", connections: "GÖBEKLİTEPE, ER", score: "%98.8", x: 730, y: 150, r: 15, color: "#10b981", atlasRef: "ATLAS-32", position: { x: 730, y: 150, layer: "ROOT" }, resonance: { intensity: 8.8, frequency: 528, color: "#10b981" } },
    { id: "BERING", label: "Bering Boğazı Geçiş Hattı", desc: "Kuzey Asya'dan Amerika'ya damga transfer koridoru.", connections: "ASYA, AMERİKA", score: "%97.8", x: 190, y: 350, r: 14, color: "#f43f5e", atlasRef: "ATLAS-33", position: { x: 190, y: 350, layer: "CORRIDOR" }, resonance: { intensity: 7.8, frequency: 639, color: "#f43f5e" } },
    { id: "H-DAMGA", label: "H-Damgası (Gök-Yer Bağı)", desc: "İki dikey aksı bağlayan yatay köprü simgesi.", connections: "GÖBEKLİTEPE, BA", score: "%99.6", x: 720, y: 100, r: 15, color: "#ffd700", atlasRef: "ATLAS-34", position: { x: 720, y: 100, layer: "ROOT" }, resonance: { intensity: 9.6, frequency: 741, color: "#ffd700" } }
  ];

  const [selectedNode, setSelectedNode] = useState(nodes[0]);
  const [logs, setLogs] = useState([
    "[10:22:00] [SİSTEM BAŞLATILDI] YKOS Kuantum Matris Çekirdeği 40+ düğüm ile devrede.",
    "[10:22:02] [REZONANS] Göbeklitepe, Saymalıtaş ve Çatalhöyük ağları senkronize.",
    "[10:22:05] [KÖK-HECE] Fonetik ve Morfolojik 100 Kök-Hece hattı tam kapasite aktif."
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    const liveStreamMessages = [
      "Kuantum Rezonans Hattı: Göbeklitepe H-Damgası ve Saymalıtaş Güneş Baş senkron.",
      "Anadolu Kök Hece Fonetik Akışı taranıyor: [ÇEV - BA - ER - YOL - OL - KÖK]",
      "Sümer & Etrüsk Morfolojik Eşleşme Skoru: %98.9",
      "Kozmik Atlas Katmanı [YKOS 1000] kararlı sinyal yayıyor.",
      "Global Piktogram Düğümü: Saymalıtaş - Tamgalısay - Bering veri hattı bağlı.",
      "Algoritmik Dil Çekirdeği: Ses ve damga üretim döngüsü devrede."
    ];

    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString("tr-TR");
      const randomMsg = liveStreamMessages[Math.floor(Math.random() * liveStreamMessages.length)];
      setLogs((prev) => [...prev.slice(-20), `[${time}] [CANLI AKIŞ] ${randomMsg}`]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const handleBubbleClick = (node) => {
    setSelectedNode(node);
    if (onSelectNode) onSelectNode(node);
    triggerPipeline(node);

    const time = new Date().toLocaleTimeString("tr-TR");
    const log1 = `[${time}] ⚡ [DÜĞÜM SEÇİLDİ] >> ${node.label} (${node.atlasRef})`;
    const log2 = `[${time}] 📖 [AÇIKLAMA] ${node.desc} | Frekans: ${node.resonance.frequency}Hz`;
    const log3 = `[${time}] 🔗 [BAĞLANTILAR] ${node.connections} | Rezonans Skoru: ${node.score}`;

    setLogs((prev) => [...prev.slice(-18), log1, log2, log3]);
  };

  return (
    <div style={{ width: "100%", maxWidth: "1050px", margin: "0 auto", padding: "12px", color: "#fff", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* KAPSAYICI KART */}
      <div style={{ backgroundColor: "#050811", border: "1.5px solid #ffd700", borderRadius: "14px", padding: "20px", boxShadow: "0 4px 25px rgba(0, 0, 0, 0.8)" }}>

        {/* ÜST DURUM BARI */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ffd700", paddingBottom: "6px", marginBottom: "10px" }}>
          <div style={{ display: "flex", gap: "15px", fontSize: "0.8rem" }}>
            <span style={{ color: "#ffd700" }}>⚡ QuantumFlux: <strong style={{ color: "#22c55e" }}>Aktif (40+ Düğüm)</strong></span>
            <span style={{ color: "#38bdf8" }}>🔵 Core Field: <strong>Senkronize</strong></span>
            <span style={{ color: "#aaa" }}>📍 Atlas Ref: <strong>Göbeklitepe & Saymalıtaş Hatları Bağlı</strong></span>
          </div>
        </div>

        {/* SEÇİLİ DÜĞÜM BİLGİ KARTI */}
        {selectedNode && (
          <div style={{ background: "rgba(255, 215, 0, 0.06)", border: "1.5px solid #ffd700", borderRadius: "8px", padding: "10px 14px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "2px" }}>
                <h4 style={{ margin: 0, color: "#ffd700", fontSize: "0.95rem" }}>{selectedNode.label}</h4>
                <span style={{ fontSize: "0.68rem", background: "#f59e0b", color: "#000", fontWeight: "bold", padding: "1px 6px", borderRadius: "4px" }}>
                  {selectedNode.atlasRef}
                </span>
              </div>
              <p style={{ margin: "3px 0 4px 0", fontSize: "0.8rem", color: "#ddd" }}>{selectedNode.desc}</p>
              <div style={{ fontSize: "0.74rem", color: "#bbb" }}>
                Bağlantılar: <span style={{ color: "#38bdf8" }}>{selectedNode.connections}</span> | Rezonans: <span style={{ color: "#22c55e", fontWeight: "bold" }}>{selectedNode.score}</span> (Int: {selectedNode.resonance.intensity}, Frek: {selectedNode.resonance.frequency}Hz)
              </div>
            </div>
            <button onClick={() => setSelectedNode(null)} style={{ background: "transparent", border: "none", color: "#ffd700", fontSize: "1.4rem", cursor: "pointer", padding: "0 8px" }}>×</button>
          </div>
        )}

        {/* GENİŞLETİLMİŞ MATRİS BALONCUK VE BAĞLANTI GRAFİĞİ */}
        <div style={{ background: "#050811", border: "1px solid rgba(255, 215, 0, 0.3)", borderRadius: "8px", height: "420px", position: "relative", overflow: "hidden", marginBottom: "10px" }}>
          <svg style={{ width: "100%", height: "100%", viewBox: "150 10 650 400" }}>
            
            {/* Çekirdek Hatlar */}
            <line x1="470" y1="190" x2="530" y2="260" stroke="rgba(245, 158, 11, 0.6)" strokeWidth="1.8" />
            <line x1="470" y1="190" x2="440" y2="310" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.8" />
            <line x1="470" y1="190" x2="330" y2="240" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="1.8" />
            <line x1="470" y1="190" x2="590" y2="190" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="1.8" />
            <line x1="470" y1="190" x2="520" y2="90" stroke="rgba(255, 215, 0, 0.6)" strokeWidth="1.8" />

            {/* Anadolu & Arkeoloji Hatları */}
            <line x1="590" y1="190" x2="670" y2="150" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.4" />
            <line x1="590" y1="190" x2="630" y2="240" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.4" />
            <line x1="590" y1="190" x2="690" y2="210" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="1.4" />
            <line x1="670" y1="150" x2="730" y2="150" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
            <line x1="670" y1="150" x2="720" y2="100" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1.2" />

            {/* Asya, Petroglif & Göç Hatları */}
            <line x1="440" y1="310" x2="360" y2="320" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.4" />
            <line x1="360" y1="320" x2="330" y2="350" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.4" />
            <line x1="330" y1="350" x2="260" y2="360" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.2" />
            <line x1="360" y1="320" x2="380" y2="380" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.2" />
            <line x1="440" y1="310" x2="230" y2="300" stroke="rgba(244, 63, 94, 0.5)" strokeWidth="1.4" />
            <line x1="230" y1="300" x2="190" y2="350" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.2" />
            <line x1="440" y1="310" x2="250" y2="220" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1.4" />

            {/* Morfoloji & Medeniyet Hatları */}
            <line x1="330" y1="240" x2="370" y2="170" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="1.4" />
            <line x1="330" y1="240" x2="270" y2="170" stroke="rgba(249, 115, 22, 0.5)" strokeWidth="1.4" />
            <line x1="330" y1="240" x2="310" y2="120" stroke="rgba(249, 115, 22, 0.4)" strokeWidth="1.2" />
            <line x1="330" y1="240" x2="390" y2="110" stroke="rgba(249, 115, 22, 0.4)" strokeWidth="1.2" />

            {/* Kök Hece & Kozmik Hatlar */}
            <line x1="520" y1="90" x2="590" y2="80" stroke="rgba(255, 215, 0, 0.5)" strokeWidth="1.4" />
            <line x1="590" y1="80" x2="650" y2="90" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1.2" />
            <line x1="520" y1="90" x2="450" y2="70" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.2" />
            <line x1="450" y1="70" x2="410" y2="60" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.2" />
            <line x1="410" y1="60" x2="360" y2="70" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.2" />
            <line x1="520" y1="90" x2="530" y2="40" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.2" />
            <line x1="530" y1="40" x2="470" y2="30" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1.2" />
            <line x1="530" y1="260" x2="620" y2="310" stroke="rgba(234, 179, 8, 0.5)" strokeWidth="1.4" />
            <line x1="620" y1="310" x2="560" y2="340" stroke="rgba(234, 179, 8, 0.4)" strokeWidth="1.2" />
            <line x1="530" y1="260" x2="480" y2="370" stroke="rgba(234, 179, 8, 0.4)" strokeWidth="1.2" />
            <line x1="520" y1="90" x2="480" y2="130" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1.2" />
            <line x1="520" y1="90" x2="570" y2="130" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.2" />

            {/* Düğümler (Baloncuklar) */}
            {nodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              return (
                <g key={node.id} onClick={() => handleBubbleClick(node)} style={{ cursor: "pointer" }}>
                  <circle
                    cx={node.position.x}
                    cy={node.position.y}
                    r={isSelected ? node.r + 3 : node.r}
                    fill="#000"
                    stroke={isSelected ? "#fff" : node.resonance.color}
                    strokeWidth={isSelected ? "3.5" : "2"}
                    filter={`drop-shadow(0 0 ${isSelected ? "14px" : "7px"} ${node.resonance.color})`}
                    style={{ transition: "all 0.2s" }}
                  />
                  <text
                    x={node.position.x}
                    y={node.position.y + 3}
                    fill="#fff"
                    fontSize={node.r > 20 ? "9px" : "7.5px"}
                    fontWeight="bold"
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* PIPELINE ÇIKTISI */}
        {pipelineResult && (
          <div style={{ background: "rgba(6, 182, 212, 0.08)", border: "1px solid #06b6d4", borderRadius: "6px", padding: "8px 12px", marginBottom: "8px", fontSize: "0.75rem", color: "#67e8f9" }}>
            <strong>⚙️ Pipeline Analiz Çıktısı:</strong>
            <pre style={{ margin: "4px 0 0 0", fontFamily: "Consolas, monospace", whiteSpace: "pre-wrap" }}>
              {JSON.stringify(pipelineResult, null, 2)}
            </pre>
          </div>
        )}

        {/* CANLI KONSOL TERMİNALİ */}
        <div style={{ background: "#050811", border: "1px solid #ffd700", borderRadius: "8px", padding: "10px 14px", height: "135px", overflowY: "auto", fontFamily: "Consolas, monospace" }}>
          <div style={{ color: "#ffd700", fontSize: "0.78rem", fontWeight: "bold", borderBottom: "1px dashed rgba(255, 215, 0, 0.3)", paddingBottom: "4px", marginBottom: "6px" }}>
            💻 KÖK-HECE & DAMGA KONSOL TERMİNALİ (40+ DÜĞÜM CANLI İNTERAKTİF AKIŞ)
          </div>
          <div style={{ fontSize: "0.72rem", color: "#22c55e", lineHeight: "1.5" }}>
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>
    </div>
  );
}
