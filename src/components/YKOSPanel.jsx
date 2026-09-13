import React, { useState } from "react";
import SearchBox from "./SearchBox";
import VeriGirisi from "./VeriGirisi";
import DamgaAtlas from "./AtlasMap";
import OkumaAnalizMotoru from "./OkumaAnalizMotoru";
import GocHaritasi from "./GocHaritasi";
import YKOSLogPanel from "./YKOSLogPanel";
import SolutionsPanel from "./SolutionsPanel"; // Çözüm paneli entegrasyonu
import "./ykospanel.css";

export default function YKOSPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("AnaSayfa");

  // Çözüm paneli için örnek canlı arşiv verileri
  const sampleSolutions = [
    {
      id: "SOL-01",
      title: "Anadolu Türkleşmesinde Hilal-Yıldız Damgası",
      summary: "Bu dosya, Hilal-Yıldız damgasının Anadolu kültür tarihindeki erken kök safhasını inceler."
    },
    {
      id: "SOL-02",
      title: "Anadolu Damgaları Kapsamında Değerli Formlar",
      summary: "Anadolu damgaları kronolojisi, arkeolojik bağlam, geometrik yapı ve kökensel analiz."
    }
  ];

  const handleNavigateMatrix = (id) => {
    console.log("Matris yönlendirmesi:", id);
    // İlgili analize veya kayda geçiş mantığı
  };

  return (
    <div className="ykos-panel" style={{ background: "#060913", color: "#fff", minHeight: "100vh", padding: "20px" }}>

      {/* ÜST-ORTA BAŞLIK (Siyah & Altın Kurumsal Konsept) */}
      <div className="ykos-title" style={{ textAlign: "center", marginBottom: "24px", borderBottom: "1.5px solid #ffd700", paddingBottom: "16px" }}>
        <h1 style={{ color: "#ffd700", fontSize: "1.8rem", letterSpacing: "2px", fontWeight: "900", margin: "0 0 6px 0" }}>
          YKOS BİLGİ SİSTEMİ
        </h1>
        <h2 style={{ color: "#94a3b8", fontSize: "0.95rem", fontWeight: "400", margin: 0, letterSpacing: "0.5px" }}>
          Disiplinler Arası Algoritmik Kültür ve Dil Veri Tabanı
        </h2>
      </div>

      {/* ARAMA ALANI */}
      <div style={{ maxWidth: "800px", margin: "0 auto 20px auto" }}>
        <SearchBox onSearch={(q) => setSearchQuery(q)} />
      </div>

      {/* KURUMSAL MENÜ - Tıklanabilir Modül Sekmeleri */}
      <div className="ykos-menu" style={{ textAlign: "center", marginBottom: "30px", fontSize: "0.85rem", color: "#ffd700", wordSpacing: "6px", borderBottom: "1px solid #1e293b", paddingBottom: "12px", cursor: "pointer" }}>
        <span 
          onClick={() => setActiveTab("AnaSayfa")} 
          style={{ fontWeight: activeTab === "AnaSayfa" ? "bold" : "normal", textDecoration: activeTab === "AnaSayfa" ? "underline" : "none" }}
        >
          Ana Sayfa & Veri Girişi
        </span> |{" "}
        <span 
          onClick={() => setActiveTab("DamgaAtlas")} 
          style={{ fontWeight: activeTab === "DamgaAtlas" ? "bold" : "normal", textDecoration: activeTab === "DamgaAtlas" ? "underline" : "none" }}
        >
          Damga Atlası
        </span> |{" "}
        <span 
          onClick={() => setActiveTab("AnalizMotoru")} 
          style={{ fontWeight: activeTab === "AnalizMotoru" ? "bold" : "normal", textDecoration: activeTab === "AnalizMotoru" ? "underline" : "none" }}
        >
          Okuma & Analiz Motoru
        </span> |{" "}
        <span 
          onClick={() => setActiveTab("GocHaritasi")} 
          style={{ fontWeight: activeTab === "GocHaritasi" ? "bold" : "normal", textDecoration: activeTab === "GocHaritasi" ? "underline" : "none" }}
        >
          Göç & Akış Haritası
        </span> |{" "}
        <span 
          onClick={() => setActiveTab("LogPanel")} 
          style={{ fontWeight: activeTab === "LogPanel" ? "bold" : "normal", textDecoration: activeTab === "LogPanel" ? "underline" : "none" }}
        >
          Sistem Logları
        </span>
      </div>

      {/* ANA İÇERİK LAYOUT (Sol Ana Modül, Sağ Çözüm Paneli) */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: "20px" }}>
        
        {/* Sol Alan: Aktif Sekme İçeriği */}
        <div>
          {activeTab === "AnaSayfa" && <VeriGirisi searchQuery={searchQuery} />}
          {activeTab === "DamgaAtlas" && <DamgaAtlas />}
          {activeTab === "AnalizMotoru" && <OkumaAnalizMotoru />}
          {activeTab === "GocHaritasi" && <GocHaritasi />}
          {activeTab === "LogPanel" && <YKOSLogPanel />}
        </div>

        {/* Sağ Alan: Çözümler ve Canlı Arşiv Paneli */}
        <div>
          <SolutionsPanel 
            solutions={sampleSolutions} 
            onNavigateMatrix={handleNavigateMatrix} 
          />
        </div>

      </div>

    </div>
  );
}