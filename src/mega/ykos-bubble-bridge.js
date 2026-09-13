// BubbleMatrix DataBridge — Evaluator + Atlas + Flux → Baloncuk üretimi

export function createBubble(evaluated, atlasData, fluxValue) {
  return {
    label: evaluated.name,
    semantic: evaluated.semantic,
    chain: evaluated.chain,
    atlasRegion: atlasData.region,
    x: atlasData.coordinates.x,
    y: atlasData.coordinates.y,
    size: calculateBubbleSize(evaluated.resonance, fluxValue),
    color: calculateBubbleColor(fluxValue),
    resonance: evaluated.resonance,
    flux: fluxValue
  };
}

function calculateBubbleSize(resonance, flux) {
  return Math.round((resonance + flux) * 20);
}

function calculateBubbleColor(flux) {
  if (flux > 3.5) return "#ff5500";   // yüksek rezonans
  if (flux > 2.0) return "#00aaff";   // aktif
  if (flux > 1.0) return "#66cc66";   // düşük rezonans
  return "#999999";                   // durağan
}
