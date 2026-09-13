// 1. Rezonans Dalgası Arayüzü (Tip Tanımı)
interface ResonanceWave {
  lat: number;
  lon: number;
  radius: number;
  opacity: number;
}

// Aktif dalgaların tutulduğu dizi (Bileşeninizin durumunda veya globalde tanımlı)
let AtlasRezonanceWaves: ResonanceWave[] = [];

// 2. Rezonans Dalgalarını Çizen Fonksiyon
function drawRezonanceWaves(ctx: CanvasRenderingContext2D) {
  if (!AtlasRezonanceWaves || AtlasRezonanceWaves.length === 0) return;

  AtlasRezonanceWaves.forEach(wave => {
    ctx.beginPath();
    ctx.arc(
      projectX(wave.lat, wave.lon),
      projectY(wave.lat, wave.lon),
      wave.radius,
      0,
      Math.PI * 2
    );
    // Altın sarısı rezonans halkası
    ctx.strokeStyle = `rgba(255, 200, 0, ${wave.opacity})`;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Animasyon adımı: Halka genişler, parlaklığı azalır
    wave.radius += 1.5;
    wave.opacity -= 0.01;
  });

  // Tamamen sönen (saydamlaşan) dalgaları bellekten temizle
  AtlasRezonanceWaves = AtlasRezonanceWaves.filter(wave => wave.opacity > 0);
}

// 3. AtlasCanvas Ana Çizim / Render Döngüsü
function renderAtlas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // A. Tuvali temizle
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // B. Arka plan / Harita çizgilerini çiz
  // drawMap(ctx);

  // C. Rezonans dalgalarını çiz (Haritanın üstü, noktaların altı)
  drawRezonanceWaves(ctx);

  // D. Üst katman dil noktalarını ve etiketleri çiz
  // drawLanguageNodes(ctx);

  // E. Sonraki kare için döngüyü sürdür
  requestAnimationFrame(() => renderAtlas(ctx, canvas));
}
