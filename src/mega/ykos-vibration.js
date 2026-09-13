export function getVibrationVector(region) {
  const map = {
    "Anadolu Dil Katmanı": { x: 1, y: 0 },      // yatay titreşim
    "Orta Asya – Altay": { x: 0, y: 1 },        // dikey titreşim
    "Mezopotamya – Yukarı Dicle": { x: 1, y: 1 }, // çapraz titreşim
    "Göktürk – Orhun": { x: -1, y: 1 }         // ters çapraz titreşim
  };

  return map[region] || { x: 0, y: 0 };
}
