export function getTrailDirection(chain) {
  if (!chain || chain.length === 0) return { x: 0, y: 0 };

  // Zincirin son hecesi yön belirler
  const last = chain[chain.length - 1];

  if (last.endsWith("A")) return { x: 1, y: 0 };     // sağa
  if (last.endsWith("E")) return { x: -1, y: 0 };    // sola
  if (last.endsWith("I") || last.endsWith("İ")) return { x: 0, y: -1 }; // yukarı
  if (last.endsWith("U") || last.endsWith("Ü")) return { x: 0, y: 1 };  // aşağı

  return { x: 0.5, y: 0.5 }; // nötr çapraz
}
