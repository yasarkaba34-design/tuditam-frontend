export function atlasToBubbleMapper(node) {
  return {
    id: node.id,
    atlasRef: node.id,
    position: {
      x: normalizeLon(node.lon),
      y: normalizeLat(node.lat),
      layer: node.layer || "semantic"
    },
    resonance: {
      intensity: node.weight || 0.5,
      frequency: node.depth || 1.0,
      color: pickColor(node.type)
    }
  };
}
