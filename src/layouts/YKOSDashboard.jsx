// src/layouts/YKOSDashboard.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { translations } from "../data/i18n";
import { BubbleMatrixView } from "../mega/BubbleMatrixView";
import { YKOSPanel } from "./YKOSPanel";

const YKOS_POSTERS = [
  { id: 1, no: "01", title: "Sıfır Noktası & Pleistosen Sığınağı", desc: "Anadolu Refugium Modeli, mikroklima koruması ve derin zaman hafızası.", icon: "🌋", tag: "BUZUL ÇAĞI" },
  { id: 2, no: "02", title: "Kozmik Mühür: Göbeklitepe", desc: "T-Sütunları, piktogramlar ve insanlığın ilk algoritmik grafik hafızası.", icon: "🗿", tag: "PROTO-DAMGA" },
  { id: 3, no: "03", title: "Anadolu’dan Asya’ya Büyük Akış (Yol)", desc: "Saymalıtaş, Tamgalısay ve Altay petrogliflerine uzanan göç ve damga hatları.", icon: "🧭", tag: "GÖÇ VE AKIŞ" },
  { id: 4, no: "04", title: "Avrasya Damga Ağı & Orhun Abideleri", desc: "Runik yazıtlar, boy tamgaları ve epigrafik çizgisel mühür mantığı.", icon: "📜", tag: "ORHUN EPİGRAFİ" },
  { id: 5, no: "05", title: "Avrupa’nın Saklı Hafızası: Etrüsk & Glozel", desc: "Fransa Glozel tabletleri ve İtalya Etrüsk yazıtlarının Ön-Türkçe katmanları.", icon: "🏛️", tag: "GLOZEL & ETRÜSK" },
  { id: 6, no: "06", title: "Mezopotamya Çekirdeği: Sümer & Çivi Yazısı", desc: "Eklemeli (Agglutinative) dil mimarisi ve çivi yazısındaki kök-hece korunumu.", icon: "📐", tag: "SÜMER MATRİSİ" },
  { id: 7, no: "07", title: "Anadolu Mühürleri: Hitit & Luvi", desc: "Yazılıkaya anıtları ve hiyeroglif mühür sisteminin geometrik veri tabanı.", icon: "⚜️", tag: "YAZILIKAYA" },
  { id: 8, no: "08", title: "M5 Kök-Hece Algoritması (Türkçe OS)", desc: "Türkçenin doğal bir kodlama dili ve matematiksel işletim sistemi olması.", icon: "⚡", tag: "DİL İŞLETİM SİSTEMİ" },
  { id: 9, no: "09", title: "Küresel Petroglif Atlası (Amerika - Afrika)", desc: "Arizona Hopi petrogliflerinden Avrasya'ya küresel sembol yayılımı.", icon: "🗺️", tag: "KÜRESEL ATLAS" },
  { id: 10, no: "10", title: "Şartlandırmadan Okumak (YKOS Manifestosu)", desc: "Önce Veri ➔ Sonra Analiz ➔ Sonra Değerlendirme ➔ Sürekli Güncelleme.", icon: "⚖️", tag: "BİLİMSEL MANİFESTO" },
  { id: 11, no: "11", title: "YKOS 1000: Kuantum & Yapay Zekâ", desc: "Disiplinler arası canlı bilgi ağı, graf veri tabanı ve yapay zekâ entegrasyonu.", icon: "🚀", tag: "AI VE ENTEGRASYON" }
];

export default function YKOSDashboard({
  currentLang = "TR",
  setCurrentLang = () => {},
  onVisualize = () => {},
  onNavigateRead = () => {},
  onNavigateLogin = () => {},
  onNavigateAtlas = () => {},
  onNavigateEngine = () => {},
  onNavigateFlow = () => {},
  onNavigateMethod = () => {},
  onNavigateAcikVeri = () => {},
  onNavigateOpsCenter = () => {},
}) {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [posterModalOpen, setPosterModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(YKOS_POSTERS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [adminRecords, setAdminRecords] = useState([]);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [allVideoRecords, setAllVideoRecords] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpenVideoArchive = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      const vids = saved.filter(r => r.videoUrl || r.video || r.videoBaglantisi);
      setAllVideoRecords(vids);
      if (vids.length > 0) {
        setActiveVideo(vids[0]);
        setVideoModalOpen(true);
      } else {
        alert("Henüz sistemde video eklenmiş bir kayıt bulunmuyor.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const t = (translations && translations[currentLang]) ? translations[currentLang] : (translations?.TR || {});

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ykos_admin_records") || "[]");
      const approved = saved.filter(
        (r) => r.status === "approved" || r.durum === "onaylandi" || r.status === "published"
      );
      setAdminRecords(approved);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const languages = [
    { code: "TR", label: "Türkçe" },
    { code: "EN", label: "English" },
    { code: "DE", label: "Deutsch" },
    { code: "FR", label: "Français" },
    { code: "ES", label: "Español" },
    { code: "IT", label: "Italiano" },
    { code: "JA", label: "日本語" },
    { code: "ZH", label: "中文" },
    { code: "RU", label: "Русский" },
    { code: "AR", label: "العربية" },
    { code: "FA", label: "فارسی" }
  ];

  const initialStats = [
    { icon: "🌐", count: "214", label: t.stats?.countries || "Ülkeler" },
    { icon: "🏛️", count: "248", label: t.stats?.researches || "Araştırmalar" },
    { icon: "🔷", count: "9.870", label: t.stats?.tamgas || "Damgalar" },
    { icon: "🗿", count: "18.420", label: t.stats?.petroglyphs || "Petroglifler" },
    { icon: "📜", count: "4.132", label: t.stats?.inscriptions || "Yazıtlar" },
    { icon: "📚", count: "12.580", label: t.stats?.sources || "Kaynaklar" },
    { icon: "📷", count: "46.900", label: t.stats?.images || "Görseller" },
    { icon: "🗺️", count: "58", label: t.stats?.atlases || "Atlaslar" },
  ];

  const cardStyle = {
    backgroundColor: "#050811",
    border: "1.5px solid #ffd700",
    borderRadius: "14px",
    padding: "16px 14px",
    marginBottom: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
  };

  const btnBaseStyle = {
    background: "#050811",
    border: "1px solid rgba(255, 215, 0, 0.4)",
    color: "#ffffff",
    padding: "10px 4px",
    borderRadius: "8px",
    fontSize: "0.78rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    transition: "all 0.2s ease",
  };

  const sourceCards = t.cards && t.cards.length > 0 ? t.cards : [];

  const filteredGridCards = sourceCards.filter((card) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return card.title?.toLowerCase().includes(q) || (card.desc && card.desc.toLowerCase().includes(q));
  });

  const rightColumnItems = currentLang === "TR" && adminRecords.length > 0
    ? [
        ...adminRecords.map((rec) => ({
          id: rec.id,
          title: rec.title || rec.baslik,
          desc: rec.summary || rec.ozet,
          tag: rec.category || rec.kategori || "YAYIN",
          image: rec.image || rec.gorsel || rec.imageUrl || rec.resim,
          icon: "📑",
          onClick: () => onNavigateRead(rec.id)
        })),
        ...(t.verifiedItems || []).map((item) => ({
          ...item,
          onClick: () => (item.id === "ACIK-VERI" ? onNavigateAcikVeri() : onNavigateRead(item.id))
        }))
      ].slice(0, 4)
    : (t.verifiedItems || []).slice(0, 4).map((item) => ({
        ...item,
        onClick: () => (item.id === "ACIK-VERI" ? onNavigateAcikVeri() : onNavigateRead(item.id))
      }));

  const handleCardClick = (card) => {
    if (card.isMatrixCard) {
      onVisualize();
    } else if (card.id) {
      onNavigateRead(card.id);
    } else {
      onNavigateRead(card.title || "detay");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "10px", color: "#ffffff", fontFamily: "Segoe UI, sans-serif" }}>
      
      <style>{`
        @media (max-width: 768px) {
          .ykos-main-content-grid {
            display: flex !important;
            flex-direction: column !important;
            grid-template-columns: 1fr !important;
            max-height: none !important;
          }
          .ykos-archive-grid {
            display: flex !important;
            flex-direction: column !important;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* 1. ÜST BAR & KURUMSAL MÜHÜR */}
      <div style={{ ...cardStyle, paddingTop: "0px", position: "relative" }}>
        
        <div style={{ position: "absolute", left: "14px", top: "14px", zIndex: 10 }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: menuOpen ? "#f59e0b" : "rgba(245, 158, 11, 0.1)",
              border: "1.5px solid #f59e0b",
              color: menuOpen ? "#000" : "#f59e0b",
              padding: "6px 14px",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            ☰ {t.nav?.menu || "MENÜ"}
          </button>
        </div>

        <div style={{ position: "absolute", right: "14px", top: "14px", zIndex: 10 }}>
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setLangOpen(!langOpen)}
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid #f59e0b",
                color: "#f59e0b",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer"
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00ff7f", display: "inline-block" }}></span>
              {currentLang} ▾
            </span>

            {langOpen && (
              <div style={{
                position: "absolute", right: 0, top: "110%",
                background: "#0c101d", border: "1.5px solid #f59e0b",
                borderRadius: "6px", padding: "4px", zIndex: 50,
                display: "grid", gridTemplateColumns: "1fr", gap: "2px", minWidth: "110px"
              }}>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code);
                      setLangOpen(false);
                    }}
                    style={{
                      background: currentLang === l.code ? "#f59e0b" : "transparent",
                      color: currentLang === l.code ? "#000" : "#fff",
                      border: "none", padding: "4px 8px", textAlign: "left",
                      fontSize: "0.75rem", fontWeight: "bold", cursor: "pointer", borderRadius: "4px"
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px", marginBottom: "8px" }}>
          <div style={{ margin: "0 0 6px 0", filter: "drop-shadow(0 0 16px rgba(245, 158, 11, 0.45))" }}>
            <img
              src="/ykos-logo.png"
              alt="YKOS Logo"
              style={{ width: "260px", height: "auto", maxHeight: "220px", objectFit: "contain", display: "block", margin: "0 auto" }}
            />
          </div>

          <h1 style={{ color: "#f59e0b", fontSize: "1.95rem", fontWeight: "900", letterSpacing: "3px", margin: "0 0 4px 0", textShadow: "0 0 20px rgba(245, 158, 11, 0.4)" }}>
            YKOS BİLGİ SİSTEMİ
          </h1>

          <div style={{ color: "#ffd700", fontSize: "0.82rem", fontWeight: "bold", letterSpacing: "1px", margin: "4px 0 6px 0", textTransform: "uppercase" }}>
            Gazeteciler Sosyal Sorumluluk Projeleri Derneği Kuruluşudur
          </div>

          <p style={{ color: "#94a3b8", fontSize: "0.8rem", letterSpacing: "1.2px", margin: 0, textTransform: "uppercase", fontWeight: "600" }}>
            DİSİPLİNLER ARASI ALGORİTMİK KÜLTÜR VE DİL VERİ TABANI
          </p>
        </div>

        {menuOpen && (
          <div style={{ marginTop: "14px", borderTop: "1px dashed rgba(255, 215, 0, 0.3)", paddingTop: "12px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
              <button onClick={() => { setMenuOpen(false); window.location.reload(); }} style={{ ...btnBaseStyle, border: "1.5px solid #ffd700", background: "rgba(255, 215, 0, 0.15)", color: "#ffd700", fontWeight: "900" }}>
                🏠 {t.nav?.home || "ANASAYFA"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onNavigateMethod(); }} style={{ ...btnBaseStyle, border: "1.5px solid #ffd700", color: "#ffd700", fontWeight: "bold" }}>
                🏛️ {t.nav?.about || "HAKKIMIZDA"}
              </button>

              <button onClick={() => { setMenuOpen(false); setPosterModalOpen(true); }} style={{ ...btnBaseStyle, border: "1.5px solid #f59e0b", background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", fontWeight: "900" }}>
                🖼️ 11'Lİ AFİŞ & MANİFESTO SERİSİ
              </button>

              <button onClick={() => { setMenuOpen(false); onNavigateMethod(); }} style={btnBaseStyle}>
                📖 {t.nav?.methodology || "YKOS METODOLOJİSİ"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onVisualize(); }} style={{ ...btnBaseStyle, border: "1.5px solid #ffd700", color: "#ffd700", fontWeight: "900" }}>
                🌌 {t.nav?.matrix || "KÖK HECE MATRİSİ"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onNavigateAtlas(); }} style={btnBaseStyle}>
                🗺️ {t.nav?.atlas || "DAMGA ATLASI"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onNavigateEngine(); }} style={btnBaseStyle}>
                ⚙️ {t.nav?.engine || "OKUMA & ANALİZ MOTORU"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onNavigateFlow(); }} style={btnBaseStyle}>
                🧭 {t.nav?.flow || "GÖÇ & AKIŞ HARİTASI"}
              </button>
              
              <button onClick={() => { setMenuOpen(false); onNavigateOpsCenter(); }} style={{ ...btnBaseStyle, border: "1.5px solid #06b6d4", color: "#38bdf8", fontWeight: "900", background: "rgba(6, 182, 212, 0.1)" }}>
                🚀 {t.opsCenterBtn || "OPERASYON MERKEZİ"}
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px dashed rgba(255, 215, 0, 0.25)", paddingTop: "10px" }}>
              <button onClick={() => { setMenuOpen(false); onNavigateAcikVeri(); }} style={{ ...btnBaseStyle, width: "100%", padding: "10px", color: "#00ff7f", fontWeight: "900", border: "1px solid rgba(0, 255, 127, 0.5)", background: "rgba(0, 255, 127, 0.05)" }}>
                👤 {t.guestEntryBtn || "KONUK & AÇIK VERİ GİRİŞİ"}
              </button>
              <button onClick={() => { setMenuOpen(false); onNavigateLogin && onNavigateLogin("admin"); }} style={{ ...btnBaseStyle, width: "100%", padding: "10px", color: "#ffd700", fontWeight: "900", border: "1.5px solid #ffd700", background: "rgba(255, 215, 0, 0.05)" }}>
                ⚙️ {t.adminEntryBtn || "YÖNETİCİ VERİ GİRİŞİ"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. DİNAMİK ARAMA BARI */}
      <div style={{ marginBottom: "12px" }}>
        <SearchBar placeholder={t?.searchPlaceholder || "Arşivde veya Matriste Ara..."} onSearch={(q) => setSearchQuery(q)} />
      </div>

      {/* 3. DİNAMİK SAYAÇLAR */}
      <div style={cardStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px" }}>
          {initialStats.map((item, idx) => (
            <div key={idx} style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 215, 0, 0.35)", borderRadius: "10px", padding: "12px 6px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>{item.icon}</div>
              <div style={{ color: "#ffffff", fontWeight: "900", fontSize: "1.15rem", letterSpacing: "0.5px" }}>{item.count}</div>
              <div style={{ color: "#aaaaaa", fontSize: "0.75rem", fontWeight: "bold", marginTop: "2px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ANA GÖVDE: YKOS ÇÖZÜMLÜLERİ VE İNDEKSLER */}
      <div style={{ ...cardStyle, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#ffd700", fontSize: "1.05rem", marginTop: 0, borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "8px", marginBottom: "12px" }}>
          ⚡ YKOS ÇÖZÜMLERİ VE İNDEKSLER (CANLI ARŞİV)
        </h3>

        <div className="ykos-main-content-grid" style={{ display: "grid", gridTemplateColumns: "2.3fr 1fr", gap: "14px", minHeight: "440px", maxHeight: "560px" }}>
          
          <div className="ykos-archive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", overflowY: "auto", paddingRight: "6px" }}>
            {filteredGridCards.map((card, idx) => {
              if (card.isMatrixCard) {
                return (
                  <div
                    key={`matrix-${idx}`}
                    onClick={() => handleCardClick(card)}
                    style={{ background: "rgba(6, 182, 212, 0.05)", border: "1.5px solid #06b6d4", borderRadius: "6px", padding: "10px 12px", cursor: "pointer", display: "flex", gap: "10px", alignItems: "center", transition: "all 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ffd700")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#06b6d4")}
                  >
                    <div style={{ width: "38px", height: "38px", background: "#081b26", border: "1px solid #06b6d4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>🌌</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: "bold", color: "#ffd700" }}>{card.title}</div>
                      <div style={{ fontSize: "0.65rem", color: "#38bdf8", wordBreak: "break-all" }}>{card.desc}</div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={card.id || `card-${idx}`}
                  onClick={() => handleCardClick(card)}
                  style={{ background: "rgba(0, 255, 127, 0.02)", border: "1px solid rgba(0, 255, 127, 0.3)", borderRadius: "6px", padding: "9px 11px", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00ff7f"; e.currentTarget.style.background = "rgba(0, 255, 127, 0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0, 255, 127, 0.3)"; e.currentTarget.style.background = "rgba(0, 255, 127, 0.02)"; }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px", marginBottom: "4px" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#00ff7f", lineHeight: "1.3" }}>► {card.title}</div>
                      {card.isNew && (
                        <span style={{ background: "#22c55e", color: "#000", fontSize: "8px", fontWeight: "900", padding: "1px 4px", borderRadius: "2px", flexShrink: 0 }}>{t.newBadge || "YENİ"}</span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: "0.68rem", color: "#aaa", lineHeight: "1.35", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", background: "rgba(255, 215, 0, 0.02)", padding: "12px", borderRadius: "8px", border: "1.5px solid rgba(255, 215, 0, 0.3)", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #ffd700", paddingBottom: "6px" }}>
              <span style={{ color: "#ffd700", fontSize: "0.85rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "6px" }}>📑 {t.approvedTitle || "ONAYLI İÇERİK & VERİ"}</span>
              <span style={{ background: "#ffd700", color: "#000", fontSize: "8.5px", fontWeight: "900", padding: "2px 6px", borderRadius: "3px" }}>{t.publishBadge || "YAYIN"}</span>
            </div>

            {rightColumnItems.map((item, idx) => {
              const itemImg = item.image || item.gorsel || item.imageUrl || item.resim;
              return (
                <div
                  key={`right-item-${idx}`}
                  onClick={item.onClick}
                  style={{ display: "flex", gap: "10px", alignItems: "center", background: idx === 0 ? "rgba(255, 215, 0, 0.08)" : "#0c101d", border: idx === 0 ? "1.5px solid #ffd700" : "1px solid rgba(255, 215, 0, 0.25)", borderRadius: "6px", padding: "10px", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ffd700"; e.currentTarget.style.background = "rgba(255, 215, 0, 0.15)"; e.currentTarget.style.transform = "translateX(2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = idx === 0 ? "#ffd700" : "rgba(255, 215, 0, 0.25)"; e.currentTarget.style.background = idx === 0 ? "rgba(255, 215, 0, 0.08)" : "#0c101d"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ width: "42px", height: "42px", background: "#1a1505", border: "1px solid #ffd700", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0, overflow: "hidden" }}>
                    {itemImg ? <img src={itemImg} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (item.icon || "📑")}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                      <h4 style={{ margin: 0, fontSize: "0.78rem", color: "#ffd700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</h4>
                      <span style={{ fontSize: "0.62rem", color: "#22c55e", fontWeight: "bold" }}>{t.contentLink || "İÇERİK ➔"}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.66rem", color: "#ccc", lineHeight: "1.3", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ALT BUTTONLAR */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", width: "100%", maxWidth: "950px", margin: "14px auto 0 auto", flexWrap: "wrap" }}>
          <button onClick={onVisualize} style={{ flex: 1, minWidth: "220px", background: "linear-gradient(135deg, #ffd700, #b8860b)", color: "#000", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "900", fontSize: "0.85rem", cursor: "pointer" }}>
            {t.visualizeBtn || "BALONCUK MATRİSİNİ GÖRSELLEŞTİR →"}
          </button>
          
          <button onClick={onNavigateAcikVeri} style={{ flex: 1, minWidth: "220px", background: "linear-gradient(135deg, #00ff7f, #008000)", color: "#000", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "900", fontSize: "0.85rem", cursor: "pointer" }}>
            🌐 {t.openDataBtn || "AÇIK VERİ PORTALINA GİT"}
          </button>

          <button onClick={handleOpenVideoArchive} style={{ flex: 1, minWidth: "220px", background: "linear-gradient(135deg, #ef4444, #991b1b)", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "900", fontSize: "0.85rem", cursor: "pointer" }}>
            🎥 VİDEO ARŞİVİ & SUNUMLAR
          </button>
        </div>
      </div>

      {/* 🎥 VİDEO ARŞİVİ SEÇİM MODALI */}
      {videoModalOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.88)", backdropFilter: "blur(8px)",
          zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "16px"
        }}>
          <div style={{
            background: "#050811", border: "2px solid #ffd700", borderRadius: "16px",
            width: "100%", maxWidth: "1050px", maxHeight: "90vh", display: "flex", flexDirection: "column",
            boxShadow: "0 0 35px rgba(255, 215, 0, 0.35)", overflow: "hidden"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", background: "rgba(255, 215, 0, 0.05)" }}>
              <h2 style={{ margin: 0, fontSize: "1.15rem", color: "#ffd700", fontWeight: "900" }}>
                🎥 YKOS VİDEO ARŞİVİ VE SUNUM LİSTESİ
              </h2>
              <button onClick={() => setVideoModalOpen(false)} style={{ background: "transparent", border: "1px solid #ef4444", color: "#ef4444", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", fontWeight: "bold" }}>✕</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "16px", padding: "18px", overflowY: "auto", flex: 1 }}>
              <div>
                {activeVideo ? (
                  <div>
                    <h3 style={{ color: "#ffd700", fontSize: "1.1rem", marginBottom: "10px" }}>
                      {activeVideo.title || activeVideo.baslik}
                    </h3>
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px", border: "1.5px solid #ffd700" }}>
                      <iframe
                        src={(() => {
                          const url = activeVideo.videoUrl || activeVideo.video || activeVideo.videoBaglantisi || "";
                          if (url.includes("embed")) return url;
                          const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
                          return match ? `https://www.youtube.com/embed/${match[1]}` : url;
                        })()}
                        title="Video Oynatıcı"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p style={{ color: "#ccc", fontSize: "0.85rem", marginTop: "10px", lineHeight: "1.5" }}>
                      {activeVideo.summary || activeVideo.ozet || activeVideo.content || ""}
                    </p>
                    <button 
                      onClick={() => {
                        setVideoModalOpen(false);
                        onNavigateRead(activeVideo.id);
                      }}
                      style={{ marginTop: "10px", background: "rgba(255, 215, 0, 0.2)", border: "1px solid #ffd700", color: "#ffd700", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
                    >
                      📖 Bu İçeriğin Detay Sayfasına Git ➔
                    </button>
                  </div>
                ) : (
                  <p style={{ color: "#888" }}>Lütfen listeden bir video seçin.</p>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto", maxHeight: "420px", paddingRight: "4px" }}>
                {allVideoRecords.map((vid, i) => {
                  const isSelected = activeVideo?.id === vid.id;
                  return (
                    <div
                      key={vid.id || i}
                      onClick={() => setActiveVideo(vid)}
                      style={{
                        background: isSelected ? "rgba(245, 158, 11, 0.2)" : "#0c101d",
                        border: isSelected ? "1.5px solid #f59e0b" : "1px solid rgba(255, 215, 0, 0.2)",
                        borderRadius: "8px", padding: "10px 12px", cursor: "pointer",
                        display: "flex", gap: "10px", alignItems: "center"
                      }}
                    >
                      <span style={{ fontSize: "1.5rem" }}>▶️</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: isSelected ? "#ffd700" : "#fff", fontWeight: "bold", fontSize: "0.85rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {vid.title || vid.baslik}
                        </div>
                        <div style={{ color: "#94a3b8", fontSize: "0.7rem", marginTop: "2px" }}>
                          {vid.category || vid.kategori || "YKOS Sunum"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. 11'Lİ YKOS AFİŞ & MANİFESTO VİTRİN MODALI */}
      {posterModalOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.88)", backdropFilter: "blur(8px)",
          zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "16px"
        }}>
          <div style={{
            background: "#050811", border: "2px solid #ffd700", borderRadius: "16px",
            width: "100%", maxWidth: "1050px", maxHeight: "90vh", display: "flex", flexDirection: "column",
            boxShadow: "0 0 35px rgba(255, 215, 0, 0.35)", overflow: "hidden"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", background: "rgba(255, 215, 0, 0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>🖼️</span>
                <div>
                  <h2 style={{ margin: 0, fontSize: "1.15rem", color: "#ffd700", fontWeight: "900" }}>
                    11'Lİ YKOS SEMİYOTİK AFİŞ & MANİFESTO SERİSİ
                  </h2>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                    12.000 Yıllık Kültürel, Epigrafik ve Dilsel Hafıza Koleksiyonu
                  </span>
                </div>
              </div>
              <button onClick={() => setPosterModalOpen(false)} style={{ background: "transparent", border: "1px solid #ef4444", color: "#ef4444", width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer", fontWeight: "bold", fontSize: "1rem" }}>✕</button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px", padding: "18px", overflowY: "auto", flex: 1 }}>
              <div style={{ background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(5, 8, 17, 0.95))", border: "1.5px solid #f59e0b", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ background: "#f59e0b", color: "#000", fontWeight: "900", fontSize: "0.8rem", padding: "3px 8px", borderRadius: "4px" }}>PANEL {selectedPoster.no} / 11</span>
                    <span style={{ color: "#38bdf8", fontSize: "0.75rem", fontWeight: "bold", border: "1px solid #38bdf8", padding: "2px 8px", borderRadius: "4px" }}>{selectedPoster.tag}</span>
                  </div>
                  <div style={{ fontSize: "3.2rem", margin: "14px 0", textAlign: "center" }}>{selectedPoster.icon}</div>
                  <h3 style={{ color: "#ffd700", fontSize: "1.35rem", margin: "0 0 10px 0", fontWeight: "900" }}>{selectedPoster.title}</h3>
                  <p style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>{selectedPoster.desc}</p>
                </div>
                <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px dashed rgba(255, 215, 0, 0.25)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#00ff7f", fontSize: "0.75rem", fontWeight: "bold" }}>● YKOS KÜLLİYAT ONAYLI</span>
                  <button onClick={() => { setPosterModalOpen(false); onNavigateMethod(); }} style={{ background: "rgba(245, 158, 11, 0.2)", border: "1px solid #f59e0b", color: "#f59e0b", padding: "6px 12px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: "bold", cursor: "pointer" }}>METODOLOJİDE İNCELE ➔</button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto", maxHeight: "420px", paddingRight: "4px" }}>
                {YKOS_POSTERS.map((p) => {
                  const isSelected = selectedPoster.id === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPoster(p)}
                      style={{ background: isSelected ? "rgba(245, 158, 11, 0.15)" : "#0c101d", border: isSelected ? "1.5px solid #f59e0b" : "1px solid rgba(255, 215, 0, 0.2)", borderRadius: "8px", padding: "10px 12px", cursor: "pointer", display: "flex", gap: "10px", alignItems: "center", transition: "all 0.2s" }}
                    >
                      <span style={{ fontSize: "1.4rem" }}>{p.icon}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ color: isSelected ? "#ffd700" : "#ffffff", fontWeight: "bold", fontSize: "0.82rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.title}</span>
                          <span style={{ color: "#f59e0b", fontSize: "0.7rem", fontWeight: "900", flexShrink: 0 }}>#{p.no}</span>
                        </div>
                        <div style={{ color: "#94a3b8", fontSize: "0.68rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "2px" }}>{p.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
