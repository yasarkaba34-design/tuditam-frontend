import React from "react";

export default function MethodologyPanel({ onNavigateHome = () => {} }) {
  const cardStyle = {
    backgroundColor: "#050811",
    border: "1.5px solid #ffd700",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
  };

  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "16px", color: "#ffffff", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* ÜST GEZİNME BARI */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <button
          onClick={onNavigateHome}
          style={{
            background: "rgba(245, 158, 11, 0.15)",
            border: "1.5px solid #f59e0b",
            color: "#f59e0b",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "900",
            fontSize: "0.85rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          🏠 ANASAYFAYA DÖN
        </button>
        <span style={{ color: "#94a3b8", fontSize: "0.8rem", letterSpacing: "1px" }}>
          YKOS BİLİMSEL METODOLOJİ VE KURUMSAL ESASLAR
        </span>
      </div>

      {/* 1. KURUMSAL BAŞLIK VE MÜHÜR */}
      <div style={{ ...cardStyle, textAlign: "center", padding: "28px 20px" }}>
        <div style={{ display: "inline-block", padding: "10px", borderRadius: "50%", border: "2px solid #f59e0b", marginBottom: "10px", background: "rgba(245, 158, 11, 0.05)" }}>
          <span style={{ fontSize: "2.2rem" }}>🦅</span>
        </div>
        <h1 style={{ color: "#f59e0b", fontSize: "1.8rem", fontWeight: "900", letterSpacing: "2px", margin: "0 0 6px 0" }}>
          YKOS BİLGİ SİSTEMİ
        </h1>
        <div style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: "bold", letterSpacing: "1px", marginBottom: "6px" }}>
          Yaşar Kaba Okuma Sistemi
        </div>
        <p style={{ color: "#94a3b8", fontSize: "0.82rem", letterSpacing: "1px", margin: 0, textTransform: "uppercase" }}>
          DİSİPLİNLER ARASI ALGORİTMİK KÜLTÜR VE DİL VERİ TABANI
        </p>
      </div>

      {/* 2. HAKKIMIZDA & GELİŞTİRİCİ TANITIMI */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", paddingBottom: "8px", marginBottom: "14px" }}>
          <span style={{ fontSize: "1.2rem" }}>📌</span>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#ffd700", fontWeight: "900" }}>
            HAKKIMIZDA & SİSTEMİN DOĞUŞU
          </h2>
        </div>
        <p style={{ color: "#e2e8f0", fontSize: "0.88rem", lineHeight: "1.65", margin: "0 0 12px 0" }}>
          <strong>YKOS (Yaşar Kaba Okuma Sistemi);</strong> araştırmacı-yazar Yaşar Kaba tarafından geliştirilen; arkeoloji, jeoloji, paleoklimatoloji, filoloji ve semiyotik verileri tek bir algoritmik çatı altında birleştiren disiplinler arası bir okuma ve analiz metodolojisidir.
        </p>
        <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: "1.6", margin: 0 }}>
          Sistem; Anadolu'yu insanlığın, erken piktogramların ve dilsel köklerin buzul çağı korunaklı <em>(Refugium)</em> merkezi olarak konumlandırır. Batı merkezli izole tarih tezlerinin aksine; grafik hafızanın Asya'dan Anadolu'ya değil, Anadolu'dan Avrasya, Etrüsk, Glozel ve küresel havzalara aktığını somut epigrafik ve algoritmik verilerle ortaya koyar.
        </p>
      </div>

      {/* 3. ARAŞTIRMA YAKLAŞIMI & ALGORİTMA HATTI */}
      <div style={cardStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", paddingBottom: "8px", marginBottom: "14px" }}>
          <span style={{ fontSize: "1.2rem" }}>⚙️</span>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#ffd700", fontWeight: "900" }}>
            YKOS ARAŞTIRMA ALGORİTMASI & ÇALIŞMA İLKESİ
          </h2>
        </div>
        <p style={{ color: "#cbd5e1", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "14px" }}>
          YKOS çalışmalarında veri temelli, şartlandırmasız ve karşılaştırmalı yöntem esastır. Amaç önceden belirlenmiş bir görüşü doğrulamak değil; verinin ortaya koyduğu örüntüyü şeffaf biçimde görünür kılmaktır:
        </p>
        
        {/* İŞLEM HATTI ÇUBUĞU */}
        <div style={{
          background: "rgba(6, 182, 212, 0.08)",
          border: "1.5px solid #06b6d4",
          borderRadius: "8px",
          padding: "12px",
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "0.85rem",
          fontWeight: "bold",
          letterSpacing: "0.5px",
          marginBottom: "12px"
        }}>
          ÖNCE VERİ ➔ MORFOLOJİ & FORM ➔ KÖK-HECE (M5) ➔ KRONOLOJİ ➔ COĞRAFİ AKIŞ ➔ SONUÇ RAPORU
        </div>
        <p style={{ color: "#94a3b8", fontSize: "0.78rem", fontStyle: "italic", textAlign: "center", margin: 0 }}>
          "Biz gördüğümüzü yazarız, görmediğimizi yazmayız; gördüğümüzü de asla görmezden gelmeyiz." — YKOS Manifestosu
        </p>
      </div>

      {/* 4. ÇALIŞMA ALANLARI VE BİRİMLER (2 KOLON) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        
        {/* SOL: TEMEL ÇALIŞMA ALANLARI */}
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", paddingBottom: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "1.1rem" }}>📚</span>
            <h3 style={{ margin: 0, fontSize: "0.95rem", color: "#ffd700", fontWeight: "bold" }}>
              TEMEL ÇALIŞMA ALANLARI
            </h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: "18px", color: "#cbd5e1", fontSize: "0.8rem", lineHeight: "1.8" }}>
            <li>Anadolu 12.000 Yıllık Epigrafik & Semiyotik Katmanları</li>
            <li>M5 Algoritmik Kök-Hece Matrisi & Türkçe Dil Kodlama Sistemi</li>
            <li>Göbeklitepe, Saymalıtaş ve Kaya Üstü Damga Morfolojisi</li>
            <li>Fransa Glozel Tabletleri & İtalya Etrüsk Karşılaştırma Analizleri</li>
            <li>Sümer Eklemeli Çivi Yazısı ile Ön-Türkçe Kök Korunumu</li>
            <li>Hitit-Luvi Hiyeroglif Mühürleri & Avrasya Runik Yazıtları</li>
            <li>Küresel Petroglif Atlası & Canlı Graf Veri Tabanı Mimarisi</li>
          </ul>
        </div>

        {/* SAĞ: SİSTEM SEVİYELERİ & TEMEL İLKE */}
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid rgba(255, 215, 0, 0.3)", paddingBottom: "8px", marginBottom: "12px" }}>
            <span style={{ fontSize: "1.1rem" }}>🏛️</span>
            <h3 style={{ margin: 0, fontSize: "0.95rem", color: "#ffd700", fontWeight: "bold" }}>
              YKOS SİSTEM HİYERARŞİSİ
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#cbd5e1", fontSize: "0.78rem" }}>
            <div style={{ padding: "6px 8px", background: "rgba(255,255,255,0.02)", borderRadius: "4px", borderLeft: "3px solid #f59e0b" }}>
              <strong style={{ color: "#ffd700" }}>YKOS 100:</strong> Temel Kök-Hece ve Damga Matrisleri
            </div>
            <div style={{ padding: "6px 8px", background: "rgba(255,255,255,0.02)", borderRadius: "4px", borderLeft: "3px solid #06b6d4" }}>
              <strong style={{ color: "#38bdf8" }}>YKOS 200:</strong> Buzul Çağından Günümüze Anadolu Atlasları
            </div>
            <div style={{ padding: "6px 8px", background: "rgba(255,255,255,0.02)", borderRadius: "4px", borderLeft: "3px solid #00ff7f" }}>
              <strong style={{ color: "#00ff7f" }}>YKOS 300 / 500:</strong> Küresel Bağlantılar & Disiplinler Arası Entegrasyon
            </div>
            <div style={{ padding: "6px 8px", background: "rgba(255,255,255,0.02)", borderRadius: "4px", borderLeft: "3px solid #ffd700" }}>
              <strong style={{ color: "#ffd700" }}>YKOS 1000:</strong> Yapay Zekâ & Kuantum Veri Tabanı Master Katmanı
            </div>
          </div>

          <div style={{ marginTop: "12px", padding: "10px", background: "rgba(0, 255, 127, 0.05)", border: "1px solid rgba(0, 255, 127, 0.3)", borderRadius: "6px" }}>
            <div style={{ color: "#00ff7f", fontWeight: "bold", fontSize: "0.75rem", marginBottom: "2px" }}>
              ⚖️ TEMEL BİLİMSEL İLKE
            </div>
            <div style={{ color: "#aaa", fontSize: "0.72rem", lineHeight: "1.4" }}>
              Araştırmanın görevi bir şeyi sahiplenmek değil, gerçeği araştırmaktır. Yeni veriler önceki değerlendirmeleri değiştirebilir; bu durumda eski kayıt korunur, yeni veri yeniden sınanır.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}