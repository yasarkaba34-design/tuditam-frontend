export const YCOS_GEO = {
  TUT: {
    kökler: ["tut", "tutmak", "tutucu"],
    anlam: "tutma, kavrama, başlangıç",
    kategori: "başlangıç eylemi"
  },
  KUR: {
    kökler: ["kur", "kurmak", "kurucu"],
    anlam: "kurma, yapı oluşturma",
    kategori: "oluşum eylemi"
  },
  BA: {
    kökler: ["ba", "bağ", "bağla"],
    anlam: "bağlama, ilişki kurma",
    kategori: "ilişki eylemi"
  },
  YOL: {
    kökler: ["yol", "yolcu", "yolmak"],
    anlam: "yol alma, yön belirleme",
    kategori: "hareket eylemi"
  },
  BİR: {
    kökler: ["bir", "birlik", "birleş"],
    anlam: "birleştirme, bütünleme",
    kategori: "birlik eylemi"
  },
  KAL: {
    kökler: ["kal", "kalmak", "kalıcı"],
    anlam: "kalma, süreklilik",
    kategori: "süreklilik eylemi"
  },
  YIL: {
    kök: "yıl",
    varyantlar: ["yıl", "yıllık", "yılı", "yılın"],
    anlam: "zaman, dönem, çevrim",
    kategori: "zaman eylemi",
    fonetik: "Y-J",
    geo: "Anadolu",
    kültür: "yıl kültürü",
    zincir: {
      TUT: "zamana temas",
      KUR: "temasın döneme dönüşmesi",
      BA: "dönemin ilişki kurması",
      YOL: "ilişkinin yön kazanması",
      BİR: "dönemin birlik oluşturması",
      KAL: "dönemin kalıcılığı"
    }
  },
  OK: {
    kök: "ok",
    varyantlar: ["ok", "okumak", "okçu", "okluk"],
    anlam: "yön, işaret, okuma",
    kategori: "yön eylemi",
    fonetik: "O",
    geo: "Orta Asya",
    kültür: "ok-yay kültürü",
    zincir: {
      TUT: "yöne temas",
      KUR: "temasın işarete dönüşmesi",
      BA: "işaretin ilişki kurması",
      YOL: "ilişkinin yön kazanması",
      BİR: "yönün birlik oluşturması",
      KAL: "yönün kalıcılığı"
    }
  },
  YÜK: {
    kök: "yük",
    varyantlar: ["yük", "yüksek", "yüklemek", "yüklem"],
    anlam: "ağırlık, taşıma, yüklenme",
    kategori: "doğa eylemi",
    fonetik: "Y-J",
    geo: "Anadolu",
    kültür: "yük kültürü",
    zincir: {
      TUT: "yükle temas",
      KUR: "temasın yüklenmeye dönüşmesi",
      BA: "yükün ilişki kurması",
      YOL: "ilişkinin yön kazanması",
      BİR: "yükün birlik oluşturması",
      KAL: "yükün kalıcılığı"
    }
  }
};

// src/data/ykos_geo.js

export const YKOS_GEO = {
  ATLAS: { lat: 41.0, lon: 29.0 },
  MATRIS: { lat: 39.9, lon: 32.8 },
  CHAIN: { lat: 38.4, lon: 27.1 },
  QUANTUM: { lat: 36.8, lon: 34.6 }
};

export default YKOS_GEO;
const ykos_geo = {
  regions: [
    { id: 1, name: "Anadolu", type: "bölge" },
    { id: 2, name: "Mezopotamya", type: "bölge" }
  ],
  coordinates: {
    Anadolu: { lat: 39.0, lng: 35.0 },
    Mezopotamya: { lat: 33.0, lng: 44.0 }
  }
};

export default ykos_geo;
