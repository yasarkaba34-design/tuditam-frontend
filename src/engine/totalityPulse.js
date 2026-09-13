// FILE: src/engine/totalityPulse.js

export function totalityPulse(t) {
  // Zaman parametresine (t) bağlı bütünsel nabız ve harmonik frekans hesabı
  const pulseFrequency = (Math.sin(t * 0.08) * 50 + 50).toFixed(2);
  const resonance = (Math.cos(t * 0.12) * 0.5 + 0.5).toFixed(4);

  return {
    frequency: parseFloat(pulseFrequency),
    resonance: parseFloat(resonance),
    phase: t % 360,
    isHarmonic: resonance > 0.3
  };
}
