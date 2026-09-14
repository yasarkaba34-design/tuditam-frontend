// Atlas Binding Layer — Evaluator çıktısını Atlas'a bağlar

export function bindAtlas(evaluated) {
  const atlasRegion = evaluated.atlas;

  return {
    region: atlasRegion,
    coordinates: getAtlasCoordinates(atlasRegion),
    resonanceBoost: calculateAtlasResonance(atlasRegion)
  };
}

// Atlas koordinatları (örnek veri)
function getAtlasCoordinates(region) {
  const atlasCoords = {
    "Anadolu Dil Katmanı": { x: 420, y: 310 },
    "Orta Asya – Altay": { x: 680, y: 240 },
    "Mezopotamya – Yukarı Dicle": { x: 450, y: 360 },
    "Göktürk – Orhun": { x: 720, y: 200 }
  };

  return atlasCoords[region] || { x: 0, y: 0 };
}

// Atlas rezonansı
function calculateAtlasResonance(region) {
  const base = region.length / 100;
  return Number((0.3 + base).toFixed(2));
}
