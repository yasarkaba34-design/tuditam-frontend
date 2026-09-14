// ---------------------------------------------------------
// MATRIX BUBBLE VISUAL BEHAVIOR
// ---------------------------------------------------------

export function getBubbleStyle(bubble) {
  return {
    transform: `translate(${bubble.position.x * 20}px, ${bubble.position.y * 20}px)`,

    // Entropy → renk yoğunluğu
    backgroundColor: `rgba(255, 215, 0, ${bubble.colorEntropy})`,

    // Halo → glow efekti
    boxShadow: `0 0 ${bubble.haloIntensity * 25}px rgba(255, 215, 0, 0.8)`,

    // Rezonans → çizgi parlaklığı (çizgiler ayrı fonksiyonda)
    border: `1px solid rgba(255, 255, 255, ${bubble.resonance})`,

    width: "40px",
    height: "40px",
    borderRadius: "50%",
    position: "absolute",
    transition: "all 0.4s ease-out"
  };
}

// ---------------------------------------------------------
// REZONANS ÇİZGİLERİ (Baloncuklar arası bağlantılar)
// ---------------------------------------------------------

export function getResonanceLineStyle(b1, b2) {
  const dx = (b2.position.x - b1.position.x) * 20;
  const dy = (b2.position.y - b1.position.y) * 20;
  const length = Math.sqrt(dx * dx + dy * dy);

  return {
    position: "absolute",
    width: `${length}px`,
    height: "2px",
    backgroundColor: `rgba(255, 255, 255, ${((b1.resonance + b2.resonance) / 2).toFixed(2)})`,
    transformOrigin: "0 0",
    transform: `rotate(${Math.atan2(dy, dx)}rad)`,
    transition: "all 0.4s ease-out"
  };
}
