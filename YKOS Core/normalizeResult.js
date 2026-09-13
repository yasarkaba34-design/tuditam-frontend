export function normalizeResult(raw) {
  return {
    title: raw.title || raw.root || "YKOS Çözümlemesi",
    analysis: {
      root: raw.root || "Bilinmiyor",
      phonetic: raw.phonetic || [],
      semantic: raw.semantic || "Semantik veri bulunamadı.",
      cultureLinks: raw.cultureLinks || []
    },
    flow: {
      origin: raw.origin || "Anadolu",
      routes: raw.routes || [],
      intensity: raw.intensity || 0.5,
      notes: raw.notes || "Akış notu bulunamadı."
    }
  };
}
