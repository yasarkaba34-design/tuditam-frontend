// src/layouts/OpsCenter.jsx (Esnek Mobil Uyumlu Düzen)
export default function OpsCenter({ onGoHome, onNavigateDataEntry, onNavigateDataPool }) {
  const panelStyle = { 
    backgroundColor: "#050811", 
    border: "1px solid #ffd700", 
    borderRadius: "10px", 
    padding: "12px 14px", 
    color: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.6)"
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%", background: "#02040a", color: "#fff", fontFamily: "Segoe UI, sans-serif", boxSizing: "border-box" }}>
      
      {/* SOL DİKEY MENÜ (Mobilde gizlenir veya esner) */}
      <div className="ops-sidebar" style={{ width: "250px", minWidth: "220px", background: "#050811", borderRight: "1px solid rgba(255,215,0,0.2)", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: "0" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "10px" }}>
            <span style={{ fontSize: "1.3rem" }}>👑</span>
            <div>
              <div style={{ color: "#ffd700", fontSize: "0.9rem", fontWeight: "900" }}>YKOS</div>
              <div style={{ color: "#888", fontSize: "0.6rem" }}>1000 YILLIK KÖK SİSTEMİ</div>
            </div>
          </div>

          <div style={{ fontSize: "0.68rem", color: "#888", marginBottom: "8px", textTransform: "uppercase", fontWeight: "bold" }}>Ana Menü</div>
          {[
            { name: "Ana Sayfa", action: onGoHome },
            { name: "Veri Girişi", action: onNavigateDataEntry },
            { name: "Veri Havuzu", action: onNavigateDataPool },
            { name: "Katmanlar", action: null },
            { name: "Doğrulama Motoru", action: null },
            { name: "Çaprazlama Laboratuvarı", action: null },
            { name: "Çeviri Yönetimi", action: null },
            { name: "Atlas & Harita", action: null },
            { name: "Kaynak & Kanıt", action: null },
            { name: "Raporlar", action: null },
            { name: "Kullanıcılar", action: null },
            { name: "Sistem Ayarları", action: null }
          ].map(menu => (
            <div 
              key={menu.name} 
              onClick={menu.action}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", color: "#d1d5db", cursor: "pointer", fontSize: "0.8rem", borderRadius: "6px", marginBottom: "2px", fontWeight: "500" }} 
              onMouseOver={(e) => e.currentTarget.style.background="rgba(255,215,0,0.1)"} 
              onMouseOut={(e) => e.currentTarget.style.background="transparent"}
            >
              <span>🔹</span> {menu.name}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,215,0,0.2)", paddingTop: "12px", marginTop: "15px" }}>
          <div style={{ fontSize: "0.68rem", color: "#888" }}>YKOS SÜRÜM</div>
          <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#ffd700", margin: "2px 0" }}>v2.4.1</div>
          <div style={{ fontSize: "0.65rem", color: "#00ff7f" }}>● Güncel sürüm kullanıyorsunuz.</div>
        </div>
      </div>

      {/* SAĞ ANA İÇERİK ALANI */}
      <div style={{ flex: 1, minWidth: "300px", maxWidth: "1350px", margin: "0 auto", padding: "15px", display: "flex", flexDirection: "column", gap: "15px", boxSizing: "border-box" }}>
        
        {/* ÜST BİLGİ VE KONTROL BARI */}
        <div style={{ ...panelStyle, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", gap: "10px" }}>
          <div>
            <h1 style={{ color: "#ffd700", fontSize: "1.1rem", margin: "0 0 2px 0", fontWeight: "900" }}>YKOS OPERASYON MERKEZİ</h1>
            <div style={{ fontSize: "0.75rem", color: "#aaa" }}>Bilgiyi Katmanlandır, Doğrula, Çaprazla ve Geleceğe Aktar.</div>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "#00ff7f", border: "1px solid #00ff7f", padding: "4px 10px", borderRadius: "6px", fontWeight: "bold" }}>● ÇEVRİMİÇİ</span>
            <div style={{ background: "rgba(255,215,0,0.1)", border: "1px solid #ffd700", padding: "5px 12px", borderRadius: "6px", fontSize: "0.78rem", color: "#ffd700", fontWeight: "bold" }}>
              Yönetici: YKOS Admin
            </div>
          </div>
        </div>

        {/* 6'LI METRİK KARTLARI */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
          {[
            { t: "TOPLAM VERİ", v: "12.486", desc: "+142 bugün" }, 
            { t: "ONAY BEKLEYEN", v: "37", desc: "3 kritik" }, 
            { t: "ÇAPRAZ TEST", v: "14", desc: "Devam eden" }, 
            { t: "KAYNAK EKSİK", v: "22", desc: "Tamamlanmayı bekliyor" },
            { t: "ATLAS AKTİF", v: "2.841", desc: "Harita noktası" }, 
            { t: "SİSTEM DURUMU", v: "ÇEVRİMİÇİ", desc: "Tüm sistemler aktif" }
          ].map((m, i) => (
            <div key={i} style={{ ...panelStyle, padding: "10px" }}>
              <div style={{ fontSize: "0.62rem", color: "#888", fontWeight: "bold" }}>{m.t}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: "900", color: "#ffd700", margin: "4px 0" }}>{m.v}</div>
              <div style={{ fontSize: "0.62rem", color: "#00ff7f" }}>{m.desc}</div>
            </div>
          ))}
        </div>

        {/* 4'LÜ KONTROL MODÜLLERİ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { id: "01", t: "DİNAMİK KATMAN KONTROL MERKEZİ", sub: "10 Katmanlı Matris Yönetimi", b: "Katmanları Yönet" },
            { id: "02", t: "ALGORİTMİK DOĞRULAMA COHERENCE", sub: "Tutarlılık ve Analiz Motoru", b: "Doğrulama Motoru" },
            { id: "03", t: "ÇOK DİLLİ ENTEGRASYON PANELİ", sub: "10 Dil Çeviri ve Yönetim", b: "Çeviri Paneli Aç" },
            { id: "04", t: "CANLI KÜRESEL AĞ TETİKLEYİCİ", sub: "Veri Akışı ve Onay Merkezi", b: "Onay Merkezi" }
          ].map((m, i) => (
            <div key={i} style={{...panelStyle, border: "1.5px solid #ffd700", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "12px"}}>
              <div>
                <div style={{ color: "#ffd700", fontWeight: "900", fontSize: "0.78rem", marginBottom: "2px" }}>{m.id} {m.t}</div>
                <div style={{ color: "#aaa", fontSize: "0.68rem", marginBottom: "10px" }}>{m.sub}</div>
              </div>
              <button style={{ background: "transparent", border: "1px solid #ffd700", color: "#ffd700", padding: "6px 10px", borderRadius: "4px", fontSize: "0.72rem", cursor: "pointer", fontWeight: "bold", width: "100%" }}>
                {m.b}
              </button>
            </div>
          ))}
        </div>

        {/* ALT ALAN: 3 SÜTUN */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
          
          {/* 1. Katman Dağılımı */}
          <div style={panelStyle}>
            <h3 style={{ color: "#ffd700", fontSize: "0.85rem", margin: "0 0 10px 0", borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "5px" }}>
              📊 KATMAN DAĞILIMI (10 Katman)
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { name: "1. Kozmik Katman", val: 842, max: 2500, color: "#ffd700" },
                { name: "2. Anadolu Arkeolojisi", val: 2340, max: 2500, color: "#00ff7f" },
                { name: "3. Dil Katmanı", val: 1240, max: 2500, color: "#1e90ff" },
                { name: "4. Damga & Sembol", val: 617, max: 2500, color: "#ff8c00" },
                { name: "5. Kök-Hece & Dilbilim", val: 1987, max: 2500, color: "#ba55d3" },
                { name: "6. Kronoloji & Tarih", val: 1102, max: 2500, color: "#38bdf8" },
                { name: "7. Coğrafya & Atlas", val: 1268, max: 2500, color: "#4ade80" },
                { name: "8. Semiyotik & Anlam", val: 654, max: 2500, color: "#f87171" },
                { name: "9. YZ Entegrasyonu", val: 213, max: 2500, color: "#eab308" },
                { name: "10. YKOS Meta Katman", val: 223, max: 2500, color: "#a855f7" }
              ].map((l, idx) => (
                <div key={idx} style={{ fontSize: "0.7rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1px", color: "#ccc" }}>
                    <span>{l.name}</span>
                    <strong style={{ color: "#ffd700" }}>{l.val}</strong>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", height: "4px", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ width: `${(l.val / l.max) * 100}%`, background: l.color, height: "100%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Doğrulama Motoru */}
          <div style={panelStyle}>
            <h3 style={{ color: "#ffd700", fontSize: "0.85rem", margin: "0 0 10px 0", borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "5px" }}>
              🔬 YKOS DOĞRULAMA MOTORU
            </h3>
            <div style={{ textAlign: "center", padding: "8px 0" }}>
              <div style={{ fontSize: "2rem", fontWeight: "900", color: "#00ff7f" }}>%99.4</div>
              <div style={{ color: "#ffd700", fontSize: "0.75rem", fontWeight: "bold", marginTop: "2px" }}>YKOS TUTARLILIK SKORU</div>
              <div style={{ fontSize: "0.68rem", color: "#aaa", marginBottom: "10px" }}>Algoritmik Simetri ve Çapraz Eşleşme Oranı Mükemmel Düzeyde.</div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", textAlign: "left", fontSize: "0.7rem", background: "rgba(255,215,0,0.03)", padding: "8px", borderRadius: "6px", border: "1px solid rgba(255,215,0,0.2)" }}>
                <div>Form Benzerliği: <strong style={{ color: "#00ff7f" }}>98.7%</strong></div>
                <div>Fonetik Uyum: <strong style={{ color: "#00ff7f" }}>97.3%</strong></div>
                <div>Anlam Uyum: <strong style={{ color: "#00ff7f" }}>99.1%</strong></div>
                <div>Kronolojik Uyum: <strong style={{ color: "#00ff7f" }}>98.6%</strong></div>
                <div>Coğrafi Uyum: <strong style={{ color: "#00ff7f" }}>96.8%</strong></div>
                <div>Güvenilirlik: <strong style={{ color: "#00ff7f" }}>99.2%</strong></div>
              </div>
            </div>
          </div>

          {/* 3. Canlı Veri Havuzu */}
          <div style={panelStyle}>
            <h3 style={{ color: "#ffd700", fontSize: "0.85rem", margin: "0 0 10px 0", borderBottom: "1px solid rgba(255,215,0,0.3)", paddingBottom: "5px" }}>
              🌐 CANLI VERİ HAVUZU & AKIŞ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { title: "Dörkol Yoros Damgası", loc: "İstanbul / Beykoz", status: "İnceleniyor" },
                { title: "M.Ö. Hitit Yazıtı Parçası", loc: "Çorum / Alacahöyük", status: "Doğrulandı" },
                { title: "Yeni Kök-Hece Bağlantısı", loc: "Anadolu Matrisi", status: "Onaylandı" },
                { title: "Urartu Mühür Baskısı", loc: "Van / Ayanis", status: "Gelen" }
              ].map((item, idx) => (
                <div key={idx} style={{ background: "rgba(255,215,0,0.03)", border: "1px solid rgba(255,215,0,0.2)", padding: "8px", borderRadius: "6px", fontSize: "0.72rem" }}>
                  <div style={{ color: "#ffd700", fontWeight: "bold" }}>📜 {item.title}</div>
                  <div style={{ color: "#aaa", display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                    <span>📍 {item.loc}</span>
                    <span style={{ color: item.status === "Onaylandı" ? "#00ff7f" : item.status === "Doğrulandı" ? "#38bdf8" : "#fde047" }}>● {item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
