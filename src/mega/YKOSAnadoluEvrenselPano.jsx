import React, { useState, useEffect } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine.js";

function YKOSAnadoluEvrenselPano() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMatrix, setActiveMatrix] = useState(null);
  const [selectedHece, setSelectedHece] = useState("OK");
  const [currentLang, setCurrentLang] = useState("TR");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [catalogFilter, setCatalogFilter] = useState("ALL");
  const [selectedItemModal, setSelectedItemModal] = useState(null);

  const [selectedAnalyzeItem, setSelectedAnalyzeItem] = useState("OK_DAMGA");
  const [activeAnalysisLayer, setActiveAnalysisLayer] = useState("GEOMETRY");
  const [selectedRoute, setSelectedRoute] = useState("ANATOLIA_ASIA");
  const [selectedSolution, setSelectedSolution] = useState("YAZIT_01");

  const [activeVideoId, setActiveVideoId] = useState("12000_YIL");
  const [matrixLevel, setMatrixLevel] = useState("YKOS_100");

  const handleResetToHome = () => {
    setActiveMatrix(null);
    setSelectedHece("OK");
    setSearchTerm("");
    setCatalogFilter("ALL");
    setSelectedItemModal(null);
  };

  useEffect(() => {
    let mounted = true;
    let stopFn = null;
    try {
      stopFn = startCosmicUniverse((packet) => {
        if (mounted) setData(packet);
      });
    } catch (err) {
      console.error(err);
    }
    return () => {
      mounted = false;
      if (typeof stopFn === "function") stopFn();
    };
  }, []);

  // 10 DİLLİ TAM SÖZLÜK MATRİSİ
  const i18n = {
    TR: {
      flag: "🇹🇷", label: "Türkçe",
      title: "YKOS BİLGİ SİSTEMİ", subtitle: "Disiplinler Arası Algoritmik Kültür ve Dil Veri Tabanı",
      searchPlaceholder: "🔍 Damga, kök hece, ülke, il veya kadim merkez ara...",
      systemStatus: "Sistem Durumu", statusActive: "AKTİF",
      matricesTitle: "MATRİSLER VE KATMANLAR",
      rightPanelTitle: "⚡ YKOS ÇÖZÜMLERİ VE İNDEKSLER",
      rightPanelDesc: "* Sağ paneldeki çözümlere basarak doğrudan dinamik okuma matrislerine geçebilirsiniz.",
      solutions: {
        gobeklitepe: "📜 Göbeklitepe T-Sütunu YKOS Okuması",
        etrusk: "📜 Etrüsk Lemnos Kitabesi & Ön Türkçe Eşleşmesi",
        kulliyat: "📚 YKOS 11 Ciltlik Külliyat ve Sembol Kataloğu"
      },
      engineText: "Canlı Motor Bağlantısı", backToHome: "✖ Ana Sayfaya Dön", moduleTitle: "YKOS MODÜLÜ",
      searchResultsTitle: "🔍 Canlı Arama ve İndeks Sonuçları", noResults: "Aranan kriterlere uygun kayıt bulunamadı.",
      nav: { kurumsal: "KURUMSAL", metodoloji: "YKOS METODOLOJİSİ", kokHece: "KÖK HECE MATRİSİ", damgaAtlasi: "DAMGA ATLASI", analizEngine: "OKUMA & ANALİZ MOTORU", flowMap: "GÖÇ & AKIŞ HARİTASI", video: "🎥 VİDEO & SUNUMLAR", kulliyat: "KÜLLİYAT & YAYINLAR", dijitalArsiv: "DİJİTAL ARŞİV" },
      stats: ["Ülkeler", "Araştırmalar", "Damgalar", "Petroglifler", "Yazıtlar", "Kaynaklar", "Görseller", "Atlaslar"],
      labels: { phonetic: "Fonetik Kök", semantic: "Anlamsal Katman", anatolian: "Anadolu Odak Noktası", asian: "Asya Akış Hattı", coherence: "Matris Uyum (Coherence)", rootPrefix: "Kök", category: "Kategori", location: "Kadim Merkez" },
      catalog: { all: "Tümü", stamps: "Damgalar", petroglyphs: "Petroglifler", inspect: "İncele" },
      analysis: { title: "YKOS Algoritmik Okuma ve Çözümleme Motoru", geometryTab: "📐 Geometrik Vektör Katmanı", directionTab: "🏹 Yön ve Vektör Akışı", phoneticTab: "𐰸 Fonetik Eşleşme Matrisi", confidence: "Algoritma Okuma Doğruluğu" },
      map: { title: "Anadolu Odaklı Kadim Göç ve Sembol Akış Haritası", route1: "Anadolu ➔ Asya Ana Akış Hattı", route2: "Anadolu ➔ Akdeniz & Avrupa Hattı", origin: "Çıkış / Odak Merkezi", destination: "Varış / Yayılım Havzası", stampsTransferred: "Taşınan Damga/Kök Sayısı" },
      heceDetails: {
        OK: { meaning: "Yön, Yükseliş, Bağlantı, Akış, Göç Hattı", anadolu: "Göbeklitepe / Çatalhöyük", asya: "Orhun / Yenisey Hobi Hattı" },
        AT: { meaning: "Hareket, İlerleme, Sıçrama, Birincil Er", anadolu: "Alacahöyük / Kültepe", asya: "Altay-Sayan Kültür Havzası" },
        ER: { meaning: "Varlık, Kimlik, Güç, Erginleşme", anadolu: "Hattuşa / Gordion", asya: "Issık Göl / Balasagun" },
        EL: { meaning: "Topluluk, Birlik, El/İl Yönetim Yapısı", anadolu: "Yazılıkaya / Karkamış", asya: "Talaz / Ötüken Havzası" }
      }
    }
  };

  const t = i18n[currentLang] || i18n.TR;

  const videoList = {
    "12000_YIL": { title: "Türkçenin 12.000 Yıllık Yolculuğu ve Anadolu Sığınak Modeli", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", desc: "Anadolu'nun buzul çağındaki mikroklima korumasından doğan ilk semboller ve kök hece yayınımı." },
    "YKOS_100": { title: "YKOS 100: Kök Hece Matrisi ve Algoritmik Okuma", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", desc: "OK, AT, ER, EL kök hecelerinin geometrik aksları ve fonetik tutarlılık analizi." },
    "ETRUSK_DEMO": { title: "Etrüsk Lemnos Kitabesi & Ön Türkçe Eşleşmesi", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", desc: "İtalya Yarımadası ve Akdeniz hattındaki Ön Türkçe damgaların YKOS algoritmasıyla çözümü." }
  };

  const solutionsData = {
    YAZIT_01: { title: t.solutions.gobeklitepe, stampsUsed: "OK (𐰸) + BAL (🗿) + AT (𐰡)", decipheredText: "Kök Ok-Er Yayılım Aksı / Güneş Yolu", method: "YKOS Geometrik & Fonetik Katman Analizi", status: "TAMAMLANDI (%99.8)" },
    YAZIT_02: { title: t.solutions.etrusk, stampsUsed: "EL (𐰠) + KIN (⚔️) + ER (𐰼)", decipheredText: "El-Er İl Yönetimi ve Birlik Andı", method: "Etrüsk - Ön Türkçe Fonetik Matrisi", status: "TAMAMLANDI (%98.4)" }
  };

  const routesData = {
    ANATOLIA_ASIA: { id: "ANATOLIA_ASIA", title: "Anadolu ➔ Kafkasya ➔ Altay / Orhun Göç Akışı", origin: "Göbeklitepe / Çatalhöyük / Kültepe (Anadolu)", destination: "Altay-Sayan Havzası, Orhun-Yenisey Vadisi", stamps: "OK (🏹), AT (🐎), ER (𐰼), BAL (🗿)", period: "M.Ö. 8000 - M.Ö. 2000", description: "Erken dönem kültür ve sembol hareketleri Anadolu odak merkezlerinden doğuya, Asya içlerine ve Altay kültür havzalarına doğru yayılmıştır." },
    ANATOLIA_EUROPE: { id: "ANATOLIA_EUROPE", title: "Anadolu ➔ Ege ➔ Balkanlar / Akdeniz Akış Hattı", origin: "Troya / Alacahöyük / Yazılıkaya (Anadolu)", destination: "Balkan Havzası, Etrüsk / İtalya Kıyıları", stamps: "EL (🖐️), KIN (⚔️), KUT (☀️)", period: "M.Ö. 5000 - M.Ö. 1200", description: "Anadolu kıyı ve iç merkezlerinden batıya, Akdeniz ve Kuzey İtalya Etrüsk yazı/damga geleneklerine uzanan fonetik akış hattı." }
  };

  const analysisData = {
    OK_DAMGA: { id: "OK_DAMGA", name: "Göbeklitepe Ok / Yay Damga Vektörü", icon: "🏹", symbolCode: "𐰸", geometry: { form: "Dikey Vektör + Yay Açısı (45°)", vectors: "2 Ana Çizgi, 1 Açısal Kesişim", symmetry: "Çift Yönlü Aksiyel Simetri" }, direction: { flow: "Güneyden Kuzeye Yükselen Akış", vectorType: "Dışa Açılan Yayın Yönlendirici Etkisi", speed: "Yüksek Vektör İvmesi" }, phonetic: { root: "OK / UK", soundValue: "[oq / uq]", meaning: "Hedefe Yönelim, Birleştirici Çizgi", accuracy: "%99.4" } },
    AT_DAMGA: { id: "AT_DAMGA", name: "Hakkari Gevaruk Sıçrayan Er Damgası", icon: "🐎", symbolCode: "𐰡", geometry: { form: "Çapraz Aksiyel Çizgi + Çift Kavis", vectors: "3 Birincil Vektör Katmanı", symmetry: "Dinamik Asimetri" }, direction: { flow: "Batıdan Doğuya Sıçrama Aksı", vectorType: "İleriye Doğru Kinetik İvme", speed: "Kinetik Hareket Düzlemi" }, phonetic: { root: "AT / ET", soundValue: "[at / et]", meaning: "Hızlı İlerleme, Sıçrama, Birincil Er", accuracy: "%98.7" } },
    ER_DAMGA: { id: "ER_DAMGA", name: "Kağızman Camuşlu Er Duruş Damgası", icon: "🧍", symbolCode: "𐰼", geometry: { form: "Merkezi Dikey Kolon + Çapraz Kollar", vectors: "4 Birleşik Çizgi Kesiti", symmetry: "Merkezi Denge" }, direction: { flow: "Topraktan Göğe Dikey Yükseliş", vectorType: "Sabit Duruş ve Güç Merkezi", speed: "Statik Denge Katmanı" }, phonetic: { root: "ER / IR", soundValue: "[er / ır]", meaning: "Kimlik, Varlık, Erginleşme", accuracy: "%97.8" } }
  };

  const catalogItems = [
    { id: "D01", title: "Yön Gösteren Ok Damgası", type: "DAMGA", kok: "OK", icon: "🏹", code: "𐰸", location: "Göbeklitepe T-Pillar", period: "M.Ö. 9600" },
    { id: "P01", title: "Dağ Keçisi Petroglifi", type: "PETROGLIF", kok: "AT", icon: "🐐", code: "𐰡", location: "Hakkari Gevaruk", period: "M.Ö. 4000" },
    { id: "D02", title: "Karakuş Yükseliş Damgası", type: "DAMGA", kok: "OK", icon: "🦅", code: "𐰸", location: "Çatalhöyük Katman IV", period: "M.Ö. 7000" },
    { id: "P02", title: "Süvari ve Er Betimlemesi", type: "PETROGLIF", kok: "ER", icon: "🐎", code: "𐰼", location: "Kars Kağızman Camuşlu", period: "M.Ö. 3000" },
    { id: "D03", title: "Birlik ve El Yönetim Çizimi", type: "DAMGA", kok: "EL", icon: "🖐️", code: "𐰠", location: "Yazılıkaya Kabartmaları", period: "M.Ö. 1300" },
    { id: "P03", title: "Güneş Kursu ve Işık Yolu", type: "PETROGLIF", kok: "AT", icon: "☀️", code: "𐰡", location: "Alacahöyük Höyük Havzası", period: "M.Ö. 2500" }
  ];

  const kokHeceVerileri = {
    OK: { hece: "OK", damgaGorsel: "🏹 / 𐰸", fonetikKok: "O-K / U-K", coherence: "0.9942" },
    AT: { hece: "AT", damgaGorsel: "🐎 / 𐰡", fonetikKok: "A-T / E-T", coherence: "0.9871" },
    ER: { hece: "ER", damgaGorsel: "🧍 / 𐰼", fonetikKok: "E-R / I-R", coherence: "0.9785" },
    EL: { hece: "EL", damgaGorsel: "🖐️ / 𐰠", fonetikKok: "E-L / I-L", coherence: "0.9810" }
  };

  const rawStats = [
    { id: 1, icon: "🌍", count: "214" },
    { id: 2, icon: "🏛️", count: "248" },
    { id: 3, icon: "🔷", count: "9.870" },
    { id: 4, icon: "🗿", count: "18.420" },
    { id: 5, icon: "📜", count: "4.132" },
    { id: 6, icon: "📚", count: "12.580" },
    { id: 7, icon: "📷", count: "46.900" },
    { id: 8, icon: "🗺️", count: "58" },
  ];

  const navMenuItems = [
    { id: "KURUMSAL", label: t.nav.kurumsal },
    { id: "METODOLOJI", label: t.nav.metodoloji },
    { id: "KOK_HECE", label: t.nav.kokHece },
    { id: "DAMGA_ATLASI", label: t.nav.damgaAtlasi },
    { id: "ANALIZ_ENGINE", label: t.nav.analizEngine },
    { id: "FLOW_MAP", label: t.nav.flowMap },
    { id: "VIDEO", label: t.nav.video },
    { id: "KULLIYAT", label: t.nav.kulliyat },
    { id: "DIJITAL_ARSIV", label: t.nav.dijitalArsiv },
  ];

  const currentHece = kokHeceVerileri[selectedHece];
  const currentHeceDetail = t.heceDetails[selectedHece] || t.heceDetails.OK;
  const currentAnalyze = analysisData[selectedAnalyzeItem];
  const currentRoute = routesData[selectedRoute];

  const isSearching = searchTerm.trim().length > 0;
  const searchResults = catalogItems.filter(item => {
    const query = searchTerm.toLowerCase();
    return item.title.toLowerCase().includes(query) || item.location.toLowerCase().includes(query) || item.kok.toLowerCase().includes(query) || item.type.toLowerCase().includes(query);
  });

  const filteredCatalog = catalogItems.filter(item => {
    const matchesType = catalogFilter === "ALL" || item.type === catalogFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase()) || item.kok.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "10px", color: "#fff" }}>
      
      {/* 1. ÜST HEADER */}
      <header style={{ border: "1.5px solid #d4af37", borderRadius: "10px", padding: "10px 20px 8px 20px", backgroundColor: "#0a0a0a", marginBottom: "12px", boxShadow: "0 0 15px rgba(212, 175, 55, 0.1)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", marginBottom: "10px" }}>
          <div></div>

          <div onClick={handleResetToHome} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "3px", cursor: "pointer", userSelect: "none" }}>
            <div style={{ border: "1.5px solid #d4af37", borderRadius: "50%", padding: "4px 12px", fontSize: "12px", fontWeight: "bold", color: "#d4af37", backgroundColor: "#0f0d08", boxShadow: "0 0 10px rgba(212, 175, 55, 0.3)" }}>YKOS</div>
            <div>
              <h1 style={{ margin: 0, fontSize: "20px", color: "#d4af37", letterSpacing: "1.5px", fontWeight: "900", lineHeight: "1.1" }}>{t.title}</h1>
              <p style={{ margin: "2px 0 0 0", fontSize: "10px", color: "#aaa", letterSpacing: "0.5px" }}>{t.subtitle}</p>
            </div>
          </div>

          <div style={{ textAlign: "right", position: "relative" }}>
            <button onClick={() => setShowLangMenu(!showLangMenu)} style={{ backgroundColor: "#110f0a", border: "1.5px solid #d4af37", color: "#d4af37", padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontSize: "11px", fontWeight: "bold", letterSpacing: "0.8px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>🇹🇷</span>
              <span>TR</span>
              <span style={{ fontSize: "8px" }}>▼</span>
            </button>
          </div>
        </div>

        <nav style={{ display: "flex", justifyContent: "center", gap: "6px", borderTop: "1px solid #332a15", paddingTop: "8px", flexWrap: "wrap" }}>
          {navMenuItems.map((item) => (
            <button key={item.id} onClick={() => setActiveMatrix(activeMatrix === item.id ? null : item.id)} style={{ background: activeMatrix === item.id ? "#2a220d" : "#110f0a", border: activeMatrix === item.id ? "1.5px solid #d4af37" : "1px solid #332a15", color: activeMatrix === item.id ? "#d4af37" : "#bbb", padding: "6px 12px", borderRadius: "5px", cursor: "pointer", fontSize: "10.5px", fontWeight: "bold", letterSpacing: "0.6px" }}>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* 2. CANLI ARAMA BARI */}
      <div style={{ marginBottom: "12px", position: "relative" }}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={t.searchPlaceholder} style={{ width: "100%", padding: "12px 20px", borderRadius: "30px", border: "1.5px solid #d4af37", backgroundColor: "#0d0d0d", color: "#fff", fontSize: "13.5px", outline: "none", boxSizing: "border-box" }} />
      </div>

      {/* 3. İSTATİSTİK KARTLARI */}
      <div style={{ border: "1.5px solid #8c7126", borderRadius: "10px", backgroundColor: "#0a0a0a", padding: "14px", marginBottom: "12px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <div style={{ border: "1.5px solid #d4af37", borderRadius: "8px", padding: "5px 12px", backgroundColor: "#0f0d08", textAlign: "center", minWidth: "110px" }}>
            <div style={{ fontSize: "8.5px", color: "#aaa", textTransform: "uppercase" }}>{t.systemStatus}</div>
            <div style={{ fontSize: "13px", fontWeight: "bold", color: "#d4af37", margin: "1px 0" }}>{t.statusActive}</div>
            <div style={{ fontSize: "8.5px", color: "#777" }}>YKOS v1.0 Beta</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "6px" }}>
          {rawStats.map((s, idx) => (
            <div key={s.id} style={{ border: "1px solid #554218", borderRadius: "6px", padding: "8px 6px", backgroundColor: "#111", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "16px" }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#fff" }}>{s.count}</div>
                <div style={{ fontSize: "8.5px", color: "#aaa" }}>{t.stats[idx]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. AÇILIR MODÜL PANELİ (BUBBLE / YKOS 100 - YKOS 200) */}
      {activeMatrix && (
        <div style={{ border: "2px solid #d4af37", borderRadius: "10px", backgroundColor: "#0d0c08", padding: "18px", boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)", marginBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1.5px solid #554218", paddingBottom: "10px" }}>
            <h2 style={{ margin: 0, color: "#d4af37", fontSize: "16px", letterSpacing: "1px" }}>📂 YKOS MODÜLÜ: <span style={{ color: "#fff" }}>{activeMatrix}</span></h2>
            <button onClick={() => setActiveMatrix(null)} style={{ padding: "5px 12px", borderRadius: "5px", border: "1px solid #d4af37", backgroundColor: "#1f190a", color: "#d4af37", fontWeight: "bold", cursor: "pointer", fontSize: "11px" }}>✖ Ana Sayfaya Dön</button>
          </div>

          {activeMatrix === "BUBBLE" && (
            <div>
              <div style={{ fontSize: "14px", color: "#d4af37", fontWeight: "bold", marginBottom: "15px" }}>
                🔮 YKOS KÖK HECE VE SEMBOL BALONCUK MATRİSİ
              </div>

              {/* SEVİYE BUTONLARI (YKOS 100 / YKOS 200) */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <button onClick={() => setMatrixLevel("YKOS_100")} style={{ padding: "6px 14px", backgroundColor: matrixLevel === "YKOS_100" ? "#2a220d" : "#111", border: matrixLevel === "YKOS_100" ? "1.5px solid #d4af37" : "1px solid #332a15", color: matrixLevel === "YKOS_100" ? "#d4af37" : "#aaa", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
                  ⚡ YKOS 100: Kök Hece Matrisi
                </button>
                <button onClick={() => setMatrixLevel("YKOS_200")} style={{ padding: "6px 14px", backgroundColor: matrixLevel === "YKOS_200" ? "#2a220d" : "#111", border: matrixLevel === "YKOS_200" ? "1.5px solid #d4af37" : "1px solid #332a15", color: matrixLevel === "YKOS_200" ? "#d4af37" : "#aaa", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
                  🌐 YKOS 200: Vektör & Akış Matrisi
                </button>
              </div>

              {/* İKİLİ IZGARA: BALONCUKLAR | ÇÖZÜMLEME */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "start" }}>
                
                {/* SOL BALONCUKLAR */}
                <div style={{ backgroundColor: "#050505", border: "1.5px solid #d4af37", borderRadius: "10px", padding: "20px", minHeight: "280px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                  <div onClick={() => setSelectedHece("OK")} style={{ width: "90px", height: "90px", borderRadius: "50%", background: "radial-gradient(circle, #ffd700 0%, #3a2e05 100%)", border: selectedHece === "OK" ? "3px solid #fff" : "2px solid #ffd700", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" }}>
                    <span style={{ fontSize: "26px" }}>🏹</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>OK [𐰸]</span>
                  </div>

                  <div onClick={() => setSelectedHece("AT")} style={{ width: "90px", height: "90px", borderRadius: "50%", background: "radial-gradient(circle, #60a5fa 0%, #0a192f 100%)", border: selectedHece === "AT" ? "3px solid #fff" : "2px solid #60a5fa", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)" }}>
                    <span style={{ fontSize: "26px" }}>🐎</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>AT [𐰡]</span>
                  </div>

                  <div onClick={() => setSelectedHece("ER")} style={{ width: "90px", height: "90px", borderRadius: "50%", background: "radial-gradient(circle, #a855f7 0%, #1e102a 100%)", border: selectedHece === "ER" ? "3px solid #fff" : "2px solid #a855f7", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}>
                    <span style={{ fontSize: "26px" }}>🧍</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>ER [𐰼]</span>
                  </div>

                  <div onClick={() => setSelectedHece("EL")} style={{ width: "90px", height: "90px", borderRadius: "50%", background: "radial-gradient(circle, #34d399 0%, #064e3b 100%)", border: selectedHece === "EL" ? "3px solid #fff" : "2px solid #34d399", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0 0 20px rgba(52, 211, 153, 0.4)" }}>
                    <span style={{ fontSize: "26px" }}>🖐️</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold", color: "#fff" }}>EL [𐰠]</span>
                  </div>
                </div>

                {/* SAĞ ÇÖZÜM PANELİ */}
                <div style={{ backgroundColor: "#0f0d08", border: "1.5px solid #d4af37", borderRadius: "10px", padding: "18px", minHeight: "280px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px dashed #332a15", paddingBottom: "10px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "32px" }}>{currentHece.damgaGorsel.split(" / ")[0]}</span>
                    <div>
                      <h3 style={{ margin: 0, color: "#d4af37", fontSize: "16px" }}>{selectedHece} KÖK HECESİ ({matrixLevel})</h3>
                      <span style={{ fontSize: "11px", color: "#0f0" }}>YKOS Uyum Derinliği: {currentHece.coherence}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
                    <div><strong style={{ color: "#d4af37" }}>{t.labels.phonetic}:</strong> <span style={{ color: "#fff" }}>{currentHece.fonetikKok}</span></div>
                    <div><strong style={{ color: "#d4af37" }}>{t.labels.semantic}:</strong> <span style={{ color: "#ddd" }}>{currentHeceDetail.meaning}</span></div>
                    <div><strong style={{ color: "#d4af37" }}>{t.labels.anatolian}:</strong> <span style={{ color: "#60a5fa" }}>{currentHeceDetail.anadolu}</span></div>
                    <div><strong style={{ color: "#d4af37" }}>{t.labels.asian}:</strong> <span style={{ color: "#a855f7" }}>{currentHeceDetail.asya}</span></div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeMatrix === "METODOLOJI" && (
            <div style={{ padding: "10px", color: "#ddd", fontSize: "13px" }}>
              <h3 style={{ color: "#d4af37" }}>YKOS Metodolojisi ve Okuma Sistematiği</h3>
              <p>Yaşar Kaba Okuma Sistemi (YKOS); kadim yazıtlardaki sembol, damga ve petroglifleri kök hece matrisleri üzerinden çözümleyen disiplinler arası bir analiz modelidir.</p>
            </div>
          )}
        </div>
      )}

      {/* 5. ALT PANEL */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div style={{ border: "1.5px solid #8c7126", borderRadius: "10px", backgroundColor: "#0a0a0a", padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <h3 style={{ margin: 0, color: "#d4af37", fontSize: "15px" }}>{t.matricesTitle}</h3>
          <div onClick={() => setActiveMatrix(activeMatrix === "KOK_HECE" ? null : "KOK_HECE")} style={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>▶ 🔤 {t.nav.kokHece}</div>
          <div onClick={() => setActiveMatrix(activeMatrix === "DAMGA_ATLASI" ? null : "DAMGA_ATLASI")} style={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>▶ 🗺️ {t.nav.damgaAtlasi}</div>
          <div onClick={() => setActiveMatrix(activeMatrix === "ANALIZ_ENGINE" ? null : "ANALIZ_ENGINE")} style={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>▶ 🔬 {t.nav.analizEngine}</div>
          <div onClick={() => setActiveMatrix(activeMatrix === "FLOW_MAP" ? null : "FLOW_MAP")} style={{ color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>▶ 🌍 {t.nav.flowMap}</div>
        </div>

        <div style={{ border: "1.5px solid #8c7126", borderRadius: "10px", backgroundColor: "#0a0a0a", padding: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <h3 style={{ margin: 0, color: "#d4af37", fontSize: "13.5px" }}>{t.rightPanelTitle}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <button onClick={() => { setSelectedSolution("YAZIT_01"); setActiveMatrix("ANALIZ_ENGINE"); }} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #554218", backgroundColor: "#12100b", color: "#d4af37", fontWeight: "bold", cursor: "pointer", textAlign: "left", fontSize: "11px" }}>{t.solutions.gobeklitepe}</button>
            <button onClick={() => { setSelectedSolution("YAZIT_02"); setActiveMatrix("ANALIZ_ENGINE"); }} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #554218", backgroundColor: "#12100b", color: "#d4af37", fontWeight: "bold", cursor: "pointer", textAlign: "left", fontSize: "11px" }}>{t.solutions.etrusk}</button>
          </div>

          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <button
              onClick={() => setActiveMatrix("BUBBLE")}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)",
                color: "#000",
                border: "none",
                padding: "10px",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.82rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <span>🔮</span> BALONCUK MATRİSİNİ GÖRSELLEŞTİR ➔
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default YKOSAnadoluEvrenselPano;