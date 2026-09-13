import React, { useState } from "react";
import { YKOS_ROOTS } from "../data/ykos_roots";
import { YKOS_GEO } from "../data/ycos_geo";
import LayerSystem from "./LayerSystem";
import GraphMatrix from "./GraphMatrix";

export default function SemanticEngine({ onRootSelect }) {
  const [input, setInput] = useState("");
  const [chain, setChain] = useState([]);
  const [selectedRoot, setSelectedRoot] = useState(null);

  // m8 Matris Adımları
  const SEMANTIC_STEPS = ["TUT", "KUR", "BA", "YOL", "BİR", "KAL"];

  const handleAnalyze = () => {
    const cleanedInput = input.trim().toUpperCase();
    if (!cleanedInput) return;

    // Seçili ana kökü LayerSystem ve GraphMatrix için alt bileşenlere gönderiyoruz
    setSelectedRoot(cleanedInput);
    
    if (onRootSelect) {
      onRootSelect(cleanedInput);
    }

    // Zincir akışını oluşturuyoruz
    const result = SEMANTIC_STEPS.map((step) => {
      // Veri dosyasından ilgili adıma ait kök bilgisini çekiyoruz
      const rootData = YKOS_ROOTS[step] || null;
      // Coğrafi veri dosyasından ilgili adıma ait konumu çekiyoruz
      const geoData = YKOS_GEO[step] || null;

      if (!rootData) {
        return {
          step,
          matches: ["Eşleşme yok"],
          anlam: "-",
          kategori: "-",
          geo: geoData || "-"
        };
      }

      // Kullanıcının girdisiyle eşleşen varyantları veya kökleri süzüyoruz
      const currentRoots = rootData.kökler || rootData.varyantlar || [];
      const matches = currentRoots.filter((item) =>
        item.toLowerCase().startsWith(cleanedInput.toLowerCase())
      );

      return {
        step,
        matches: matches.length > 0 ? matches : ["Eşleşme yok"],
        anlam: rootData.anlam || "-",
        kategori: rootData.kategori || "-",
        geo: geoData || "-"
      };
    });

    setChain(result);
  };

  return (
    <div className="semantic-engine-container">
      <h2>YKOS Semantik Motor</h2>

      <div className="search-panel">
        <input
          type="text"
          placeholder="Kök girin (Örn: TUT, KUR...)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAnalyze}>Çözümle</button>
      </div>

      {/* Matris ve Katman Yapıları Görsel Grafik Bileşenleri */}
      {selectedRoot && (
        <div className="visual-matrices">
          <LayerSystem selectedRoot={selectedRoot} />
          <GraphMatrix selectedRoot={selectedRoot} />
        </div>
      )}

      {/* Çözümleme Sonucu Çıkan Zincir Akışı */}
      <div className="semantic-output">
        {chain.map((item) => (
          <div key={item.step} className="semantic-step-card">
            <strong>Adım: {item.step}</strong>
            <br />
            <span>Kök / Varyantlar: {item.matches.join(", ")}</span>
            <br />
            <span>Anlam: {item.anlam}</span>
            <br />
            <span>Kategori: {item.kategori}</span>
            <br />
            <span>Coğrafi Konum (Geo): {item.geo}</span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
