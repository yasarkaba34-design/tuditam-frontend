export function emitRezonanceWave(lat: number, lon: number) {
  const wave = {
    lat,
    lon,
    radius: 0,
    opacity: 1,
  };

  AtlasRezonanceWaves.push(wave);

  const animate = () => {
    wave.radius += 0.8;
    wave.opacity -= 0.015;

    if (wave.opacity <= 0) {
      AtlasRezonanceWaves = AtlasRezonanceWaves.filter(w => w !== wave);
      return;
    }

    requestAnimationFrame(animate);
  };

  animate();
}
export let AtlasRezonanceWaves = [];

export function emitRezonanceWave(lat: number, lon: number) {
  const wave = {
    lat,
    lon,
    radius: 0,
    opacity: 1,
  };

  AtlasRezonanceWaves.push(wave);

  const animate = () => {
    wave.radius += 0.8;
    wave.opacity -= 0.015;

    if (wave.opacity <= 0) {
      AtlasRezonanceWaves = AtlasRezonanceWaves.filter(w => w !== wave);
      return;
    }

    requestAnimationFrame(animate);
  };

  animate();
}
