export function getChainFrequency(chain) {
  if (!chain || chain.length === 0) return 0.5;

  // Zincir uzunluğu arttıkça frekans artar
  const base = chain.length * 0.4;

  // Üst sınır
  return Math.min(base, 4.0);
}
