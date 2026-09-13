// FILE: src/engine/cosmicEntropy.js

export function cosmicEntropy() {
  // Evrensel entropi ve kaos/düzen dengesi hesaplaması
  const entropyIndex = (Math.random() * (0.85 - 0.15) + 0.15).toFixed(4);
  const stabilityIndex = (1 - parseFloat(entropyIndex)).toFixed(4);

  return {
    entropy: parseFloat(entropyIndex),
    stability: parseFloat(stabilityIndex),
    orderRate: `${(parseFloat(stabilityIndex) * 100).toFixed(1)}%`,
    equilibrium: entropyIndex < 0.6 ? "BALANCED" : "DISPERSING"
  };
}
