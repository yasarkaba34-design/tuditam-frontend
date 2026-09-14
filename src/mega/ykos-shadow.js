export function getShadowDirection(region) {
  const map = {
    "Anadolu Dil Katmanı": { x: -1, y: 1 },     // güneybatı
    "Orta Asya – Altay": { x: 1, y: -1 },       // kuzeydoğu
    "Mezopotamya – Yukarı Dicle": { x: -1, y: -1 }, // kuzeybatı
    "Göktürk – Orhun": { x: 1, y: 1 }           // güneydoğu
  };

  return map[region] || { x: 0, y: 0 };
}
