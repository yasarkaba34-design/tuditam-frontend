// mega/AtlasPositioner.js
export function getAtlasCoordinates(term) {
  // Kültürel bölge eşleştirme tablosu (örnek)
  const atlasMap = {
    "Göbeklitepe": { x: 120, y: 80, region: "Şanlıurfa" },
    "Çatalhöyük": { x: 90, y: 60, region: "Konya" },
    "Lemnos": { x: 160, y: 40, region: "Ege Adaları" },
    "YOL": { x: 200, y: 100, region: "Kavram Haritası" }
  };

  // Varsayılan konum (bulunamazsa)
  const defaultPosition = { x: 50, y: 50, region: "Bilinmeyen Bölge" };

  return atlasMap[term] || defaultPosition;
}
