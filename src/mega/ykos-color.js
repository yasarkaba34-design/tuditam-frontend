export function getAtlasColor(region) {
  const atlasColors = {
    "Anadolu Dil Katmanı": "#ffcc00",
    "Orta Asya – Altay": "#00aaff",
    "Mezopotamya – Yukarı Dicle": "#ff6600",
    "Göktürk – Orhun": "#6699ff"
  };

  return atlasColors[region] || "#999999";
}

export function applyFluxTone(baseColor, flux) {
  // flux arttıkça renk parlaklaşır
  const factor = Math.min(1, flux / 4);

  const r = Math.floor(parseInt(baseColor.slice(1, 3), 16) * (1 + factor));
  const g = Math.floor(parseInt(baseColor.slice(3, 5), 16) * (1 + factor));
  const b = Math.floor(parseInt(baseColor.slice(5, 7), 16) * (1 + factor));

  return `rgb(${Math.min(r,255)}, ${Math.min(g,255)}, ${Math.min(b,255)})`;
}
