export function getGlowStrength(resonance) {
  // Rezonans arttıkça glow artar
  const base = resonance * 12;

  // Üst sınır
  return Math.min(base, 40);
}
