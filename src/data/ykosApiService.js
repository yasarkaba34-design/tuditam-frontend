import { getArchiveSynthesis } from "./ykosArchiveSynthesis";

// 1. Canlı JSON Matris Verisini Çeken Servis (ykos_core)
export async function fetchYkosCoreMatrix() {
  try {
    const response = await fetch("https://www.ykos.com.tr/api/ykos-core", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      const data = await response.json();
      return data.ykos_core || data;
    }
  } catch (error) {
    console.log("Canlı JSON matrisi yüklenemedi, yerel dinamik katman kullanılıyor.");
  }
  return null;
}

// 2. Arama Motoru ve Canlı API Servisi (Tek Tanım)
export async function searchYkosApi(query) {
  if (!query || query.trim().length < 2) return null;

  try {
    const response = await fetch(`https://www.ykos.com.tr/api/search?q=${encodeURIComponent(query)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("Dış API yanıt vermedi, YKOS 1000 Yerel Külliyat Katmanı devreye girdi.");
  }

  // API Bağlantısı olmadığında yerel 11 Ciltlik Külliyat verisinden sentez üretir
  return getArchiveSynthesis(query);
}

export default {
  fetchYkosCoreMatrix,
  searchYkosApi
};