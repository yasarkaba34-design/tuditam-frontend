// FILE: src/engine/omniField.js

export function omniField(t) {
  const amplitude = Math.sin(t / 15) * 0.8 + 0.2;
  const resonance = Math.cos(t / 25) * 0.5 + 0.5;
  const fieldState = amplitude > 0.5 ? "aktif" : "durağan";

  return {
    amplitude: amplitude.toFixed(4),
    resonance: resonance.toFixed(4),
    fieldState
  };
}
