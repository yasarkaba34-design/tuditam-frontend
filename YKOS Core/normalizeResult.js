export function normalizeResult(raw) {
  return {
    title: raw.title || raw.root || "YKOS Çözümlemesi",

    analysis: {
      root: raw.root || "Bilinmiyor",
      phonetic: raw.phonetic || [],
      semantic: raw.semantic || "Semantik veri bulunamadı.",
      cultureLinks: raw.cultureLinks || [],
      score: raw.score || 0.9, // Evaluator’dan gelen skor
      validated: raw.validated ?? true
    },

    flow: {
      origin: raw.origin || "Anadolu",
      routes: raw.routes || [],
      intensity: raw.intensity || 0.5,
      notes: raw.notes || "Akış notu bulunamadı.",
      timestamp: raw.timestamp || new Date().toISOString()
    },

    atlas: {
      coordinates: raw.coordinates || [],
      message: raw.atlasMessage || "Atlas verisi bulunamadı."
    }
  };
}
