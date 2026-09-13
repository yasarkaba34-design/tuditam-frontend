export function getFadeRate(flux, resonance) {
  // flux arttıkça iz daha hızlı kaybolur
  // resonance arttıkça iz daha yavaş kaybolur (hafıza derinliği)
  const rate = flux * 0.03 - resonance * 0.01;

  // minimum ve maksimum sınırlar
  return Math.min(Math.max(rate, 0.005), 0.05);
}
