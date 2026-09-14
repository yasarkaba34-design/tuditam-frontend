// YKOS Core — Global Copy Utility

export function YKOSCopyAll(results: string[] | Record<string, any>) {
  let text = "";

  if (Array.isArray(results)) {
    text = results.join("\n");
  } else {
    text = Object.entries(results)
      .map(([key, value]) => `${key}: ${JSON.stringify(value, null, 2)}`)
      .join("\n\n");
  }

  navigator.clipboard.writeText(text);
}


// YKOS Export Pipeline — çok formatlı dışa aktarım

export function YKOSExport(data: any, format: 'json' | 'txt' | 'csv' | 'ykos') {
  let blob;
  let filename = `ykos_export_${Date.now()}`;

  switch (format) {
    case 'json':
      blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      filename += '.json';
      break;

    case 'txt':
      blob = new Blob([Array.isArray(data) ? data.join('\n') : String(data)], { type: 'text/plain' });
      filename += '.txt';
      break;

    case 'csv':
      const keys = Object.keys(data[0] || {});
      const csv = [
        keys.join(','),
        ...data.map((row: any) => keys.map(k => row[k]).join(','))
      ].join('\n');

      blob = new Blob([csv], { type: 'text/csv' });
      filename += '.csv';
      break;

    case 'ykos':
      blob = new Blob(
        [JSON.stringify({ meta: 'YKOS‑RAW', payload: data })],
        { type: 'application/octet-stream' }
      );
      filename += '.ykos';
      break;
  }

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}


// Örnek: Dil Testi Modülü (isteğe bağlı)
export function runAllTests() {
  const results = [
    `Kök Heceler: ${rootHeces.join(', ')}`,
    `Semantik Zincir: ${semanticChain}`,
    `Benzerlik Skoru: ${similarityScore}`,
    `Spiral Rezonans: ${spiralState}`,
  ];

  YKOSCopyAll(results);
}
export function YKOSExportRAW(payload: any) {
  const raw = {
    meta: {
      type: "YKOS-RAW",
      version: "1.0.0",
      timestamp: Date.now(),
      modules: {
        spiral: !!payload.spiral,
        atlas: !!payload.atlas,
        tests: !!payload.tests,
        bubbleMatrix: !!payload.bubbleMatrix,
        flux: !!payload.flux,
      }
    },
    payload
  };

  const blob = new Blob(
    [JSON.stringify(raw, null, 2)],
    { type: "application/octet-stream" }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `ykos_raw_${Date.now()}.ykos`;
  link.click();
}
// YKOS Import Pipeline — .ykos dosyalarını içeri alır
export async function YKOSImportRAW(file: File) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);

    if (data.meta?.type !== "YKOS-RAW") {
      throw new Error("Geçersiz dosya formatı: YKOS-RAW bekleniyor.");
    }

    console.log("YKOS RAW dosyası başarıyla yüklendi:", data.meta);
    return data.payload; // modüllere aktarılacak ham veri
  } catch (err) {
    console.error("YKOS RAW import hatası:", err);
    return null;
  }
}
export function YKOSDetectRegion(payload: any) {
  // Spiral baloncuklarından ortalama koordinat alıyoruz
  if (payload.spiral && payload.spiral.length > 0) {
    const avgLat =
      payload.spiral.reduce((sum: number, b: any) => sum + (b.atlasCoords?.lat || 0), 0) /
      payload.spiral.length;

    const avgLon =
      payload.spiral.reduce((sum: number, b: any) => sum + (b.atlasCoords?.lon || 0), 0) /
      payload.spiral.length;

    return { lat: avgLat, lon: avgLon };
  }

  // Atlas verisi varsa onu kullan
  if (payload.atlas && payload.atlas.length > 0) {
    return payload.atlas[0]; // ilk nokta bile yeterli
  }

  return null;
}
export function YKOSDetectRegion(payload: any) {
  if (payload.spiral && payload.spiral.length > 0) {
    const avgLat =
      payload.spiral.reduce((sum: number, b: any) => sum + (b.atlasCoords?.lat || 0), 0) /
      payload.spiral.length;

    const avgLon =
      payload.spiral.reduce((sum: number, b: any) => sum + (b.atlasCoords?.lon || 0), 0) /
      payload.spiral.length;

    return { lat: avgLat, lon: avgLon };
  }

  if (payload.atlas && payload.atlas.length > 0) {
    return payload.atlas[0];
  }

  return null;
}
export function YKOSRegionLabel(region: { lat: number; lon: number }) {
  const { lat, lon } = region;

  if (lat > 30 && lat < 45 && lon > 25 && lon < 45)
    return "Anadolu Rezonansı Aktif";

  if (lat > 35 && lat < 45 && lon > -10 && lon < 10)
    return "Avrupa Dil Alanı Yüklendi";

  if (lat > 45 && lat < 65 && lon > 5 && lon < 25)
    return "İskandinav Semiyotik Alanı Restore Edildi";

  if (lat > 30 && lat < 40 && lon > 120 && lon < 150)
    return "Japonya Semiyotik Alanı Aktif";

  if (lat > 20 && lat < 35 && lon > 40 && lon < 60)
    return "Orta Doğu Dil Alanı Yüklendi";

  return "Semiyotik Bölge Yüklendi";
}
export function YKOSRegionIcon(region: { lat: number; lon: number }) {
  const { lat, lon } = region;

  if (lat > 30 && lat < 45 && lon > 25 && lon < 45)
    return "☀️"; // Anadolu – güneş sembolü

  if (lat > 35 && lat < 45 && lon > -10 && lon < 10)
    return "⭐"; // Avrupa – yıldız

  if (lat > 45 && lat < 65 && lon > 5 && lon < 25)
    return "ᚠ"; // İskandinav – runik sembol

  if (lat > 30 && lat < 40 && lon > 120 && lon < 150)
    return "🔴"; // Japonya – hinomaru

  if (lat > 20 && lat < 35 && lon > 40 && lon < 60)
    return "🌙"; // Orta Doğu – hilal

  return "◯"; // Genel semiyotik sembol
}
