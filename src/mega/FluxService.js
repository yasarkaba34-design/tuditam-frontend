// mega/FluxService.js
export function getFluxIntensity(rmv) {
  // RMV değerine göre titreşim yoğunluğu hesaplama
  if (rmv < 10) return 0.5;
  if (rmv < 30) return 1;
  if (rmv < 60) return 1.5;
  if (rmv < 100) return 2;
  return 3; // yüksek semantik enerji
}
