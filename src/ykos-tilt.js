export function getTiltAngle(region) {
  const map = {
    "Anadolu Dil Katmanı": -8,     // hafif sola eğim
    "Orta Asya – Altay": 12,       // sağa doğru eğim
    "Mezopotamya – Yukarı Dicle": -4, // çok hafif sola
    "Göktürk – Orhun": 15          // belirgin sağa eğim
  };

  return map[region] || 0;
}
