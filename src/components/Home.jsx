import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MatrixToggle from "./MatrixToggle";
import "./Home.css";

import archive from "../api/archive.json";
import ArchiveList from "../components/ArchiveList";

import { runFluxEngine } from "../ykos-core/runFluxEngine";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) return;

    // YKOS Motorunu çalıştır
    const result = runFluxEngine({
      chain: [{ id: search }]
    });

    // Sonuç sayfasına gönder
    navigate("/result", { state: { result } });
  };

  // Arşiv filtreleme
  const filteredArchive = archive.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-wrapper">

      {/* --- ÜST BAŞLIK ALANI --- */}
      <div className="home-header">
        <h1>YKOS Bilgi Sistemi</h1>
        <p className="home-subtitle">
          Kadim kök-hece, damga ve atlas verilerini inceleyin.
        </p>
      </div>

      {/* --- ARAMA MOTORU --- */}
      <div className="home-search">
        <input
          type="text"
          placeholder="🔍 Damga, kök hece, ülke, il veya kadim merkez ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Ara
        </button>
      </div>

      {/* --- ARŞİV LİSTESİ --- */}
      <ArchiveList items={filteredArchive} />

      {/* --- MATRİSLERİ TEK TUŞLA AÇAN SİSTEM --- */}
      <MatrixToggle data={[]} />

    </div>
  );
}
