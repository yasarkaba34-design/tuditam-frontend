import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "TR", label: "Türkçe" });

  const languages = [
    { code: "TR", label: "Türkçe" },
    { code: "EN", label: "English" },
    { code: "AZ", label: "Azərbaycan" },
    { code: "KK", label: "Qazaqşa" },
    { code: "KY", label: "Kırgızca" },
    { code: "UZ", label: "Oʻzbekcha" }
  ];

  return (
    <header style={{ width: "100%", borderBottom: "1px solid #222", padding: "14px 16px", boxSizing: "border-box", backgroundColor: "#060709" }}>
      {/* ÜST BAR */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* MOBİL HAMBURGER MENÜ BUTONU */}
        <button
          className="mobile-hamburger-btn"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsLangOpen(false);
          }}
          style={{
            background: "#141414",
            border: "1px solid #ffd700",
            borderRadius: "6px",
            color: "#ffd700",
            padding: "8px 12px",
            fontSize: "18px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ☰
        </button>

        {/* ORTA: TÜDİTAM MÜHÜR & KURUMSAL KİMLİK */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Dairesel Altın Işıltılı TÜDİTAM Logosu */}
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.35)",
              border: "1.5px solid rgba(212, 175, 55, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#111"
            }}>
              <img 
                src="/tuditam-logo.png" 
                alt="TÜDİTAM Mühür" 
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            
            {/* TÜDİTAM Başlık Yazısı */}
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  color: "#ffd700",
                  fontWeight: "900",
                  fontSize: "22px",
                  letterSpacing: "3px",
                  lineHeight: "1.1"
                }}
              >
                TÜDİTAM
              </div>
              <div style={{ color: "#f1f5f9", fontSize: "12px", fontWeight: "600", letterSpacing: "0.8px", marginTop: "3px" }}>
                TÜRK DİLİ VE TARİHİ ARAŞTIRMALARI MERKEZİ
              </div>
            </div>
          </div>

          {/* Bağlı Kuruluş İbaresi (En Altta) */}
          <div style={{ color: "#94a3b8", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", marginTop: "8px", borderTop: "1px solid #1e293b", paddingTop: "4px" }}>
            Gazeteciler Sosyal Sorumluluk Projeleri Derneği Kuruluşudur
          </div>
        </div>

        {/* SAĞ: ÇOKLU DİL BUTONU */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              setIsLangOpen(!isLangOpen);
              setIsMenuOpen(false);
            }}
            style={{
              background: "#141414",
              border: "1px solid #ffd700",
              borderRadius: "6px",
              color: "#ffd700",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🌐 {selectedLang.code}
          </button>

          {/* DİL SEÇİM AÇILIR MENÜSÜ */}
          {isLangOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "40px",
                backgroundColor: "#111",
                border: "1px solid #ffd700",
                borderRadius: "6px",
                padding: "6px",
                zIndex: 9999,
                minWidth: "130px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.8)"
              }}
            >
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setSelectedLang(item);
                    setIsLangOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: selectedLang.code === item.code ? "#221e05" : "transparent",
                    color: selectedLang.code === item.code ? "#ffd700" : "#ccc",
                    border: "none",
                    padding: "6px 8px",
                    fontSize: "11px",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                >
                  {item.label} ({item.code})
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 9 BUTONLUK MENÜ ALANI */}
      <div className={`header-nav-buttons ${isMenuOpen ? "active" : ""}`} style={{ marginTop: "15px" }}>
        <button className="menu-btn">KURUMSAL</button>
        <button className="menu-btn">YKOS METODOLOJİSİ</button>
        <button className="menu-btn">KÖK HECE MATRİSİ</button>
        <button className="menu-btn">DAMGA ATLASI</button>
        <button className="menu-btn">OKUMA & ANALİZ MOTORU</button>
        <button className="menu-btn">GÖÇ & AKIŞ HARİTASI</button>
        <button className="menu-btn">VİDEO & SUNUMLAR</button>
        <button className="menu-btn">KÜLLİYAT & YAYINLAR</button>
        <button className="menu-btn" style={{ backgroundColor: "#1c1905", color: "#ffd700" }}>DİJİTAL ARŞİV</button>
      </div>
    </header>
  );
}
