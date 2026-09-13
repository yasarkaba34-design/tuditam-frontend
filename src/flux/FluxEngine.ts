// src/flux/FluxEngine.ts

import { LinguisticSpiralLayer, SpiralAnchors } from '@/ykos-linguistic-spiral';

const FluxEngine = {
  layers: [],
  anchors: [],
  tickCallbacks: [],
  running: false,
  lastTime: 0,

  attachLayer(layer) {
    this.layers.push(layer);
  },

  bindAnchors(anchors) {
    this.anchors = anchors;
  },

  onTick(cb) {
    this.tickCallbacks.push(cb);
  },
FluxEngine.onTick((dt) => {
  t += dt;
// 🌍 Coğrafi rezonans: Atlas koordinatlarına göre renk dalgası
LinguisticSpiralLayer.bubbles.forEach(b => {
  const { lat, lon } = b.atlasCoords; // her balonun atlas konumu
  const geoPhase = Math.sin((lat + lon) * 0.01 + t * 0.3);
  const geoHue = (geoPhase * 180 + b.ring * 45) % 360;

  b.color = `hsl(${geoHue}, 85%, ${50 + b.similarity * 25}%)`;
});

  LinguisticSpiralLayer.bubbles.forEach(b => {
    const offset = Math.sin(t * (0.5 + b.similarity) + b.ring) * (5 + b.ring * 2);
    b.coords.x = b.radius + offset;

    // 🔥 Renk rezonansı
    const hue = (t * 40 + b.ring * 60) % 360;
    b.color = `hsl(${hue}, 80%, ${50 + b.similarity * 30}%)`;
  });

  FluxEngine.render();
});

  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(this.loop.bind(this));
  },

  stop() {
    this.running = false;
  },

  loop(now) {
    if (!this.running) return;

    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;

    this.tickCallbacks.forEach(cb => cb(dt));

    this.render();
    requestAnimationFrame(this.loop.bind(this));
  },

  render() {
    // BubbleMatrix veya Spiral SVG yeniden çizimi burada tetiklenir.
    // Eğer BubbleMatrixRenderer kullanıyorsan, buraya onun render() çağrısı gelecek.
  }
};

// 🔗 Spiral modülünü Flux motoruna bağla
FluxEngine.attachLayer(LinguisticSpiralLayer);
FluxEngine.bindAnchors(SpiralAnchors);

// 🔥 Optik titreşim animasyonu
let t = 0;

FluxEngine.onTick((dt) => {
  t += dt;

  LinguisticSpiralLayer.bubbles.forEach(b => {
    const offset =
      Math.sin(t * (0.5 + b.similarity) + b.ring) *
      (5 + b.ring * 2);

    b.coords.x = b.radius + offset;
  });
});

// 📤 Motoru dışa aktar
export default FluxEngine;
