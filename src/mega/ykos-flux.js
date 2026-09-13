// Flux Feedback Loop — Sistem enerjisini yöneten modül

export const ykosFlux = {
  value: 1.0, // başlangıç flux değeri

  update(fluxImpact, atlasResonance) {
    // temel hesaplama
    const newValue = this.value + fluxImpact + atlasResonance;

    // sınırlar
    this.value = Math.max(0.1, Math.min(newValue, 5.0));

    return this.value;
  },

  getState() {
    if (this.value > 3.5) return "yüksek rezonans";
    if (this.value > 2.0) return "aktif";
    if (this.value > 1.0) return "düşük rezonans";
    return "durağan";
  }
};
export function getTrailColor(baseColor, flux) {
  // flux arttıkça iz daha parlak olur
  const factor = Math.min(flux / 3, 1);

  const r = Math.floor(parseInt(baseColor.slice(1, 3), 16) * (1 + factor));
  const g = Math.floor(parseInt(baseColor.slice(3, 5), 16) * (1 + factor));
  const b = Math.floor(parseInt(baseColor.slice(5, 7), 16) * (1 + factor));

  return `rgba(${Math.min(r,255)}, ${Math.min(g,255)}, ${Math.min(b,255)}, 0.6)`;
}
