export function animateSpiralFlow(targetLat: number, targetLon: number) {
  const duration = 120; // animasyon uzunluğu (frame sayısı)
  let frame = 0;

  const animate = () => {
    frame++;

    LinguisticSpiralLayer.bubbles.forEach(b => {
      if (!b.coords) return;

      // hedefe doğru küçük bir adım
      b.coords.x += (targetLon - b.coords.x) * 0.03;
      b.coords.y += (targetLat - b.coords.y) * 0.03;

      // renk hafifçe altın tonuna yaklaşsın
      b.color = {
        r: b.color.r + (255 - b.color.r) * 0.05,
        g: b.color.g + (200 - b.color.g) * 0.05,
        b: b.color.b + (0 - b.color.b) * 0.05,
      };
    });

    if (frame < duration) {
      requestAnimationFrame(animate);
    }
  };

  animate();
}
export function animateSpiralFlow(targetLat: number, targetLon: number) {
  const duration = 120;
  let frame = 0;

  const animate = () => {
    frame++;

    LinguisticSpiralLayer.bubbles.forEach(b => {
      if (!b.coords) return;

      b.coords.x += (targetLon - b.coords.x) * 0.03;
      b.coords.y += (targetLat - b.coords.y) * 0.03;

      b.color = {
        r: b.color.r + (255 - b.color.r) * 0.05,
        g: b.color.g + (200 - b.color.g) * 0.05,
        b: b.color.b + (0 - b.color.b) * 0.05,
      };
    });

    if (frame < duration) {
      requestAnimationFrame(animate);
    }
  };

  animate();
}
