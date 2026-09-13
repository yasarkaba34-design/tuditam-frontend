// YKOS Item Evaluator — Çekirdek Modül

export function evaluateItem(item) {
  return {
    id: item.id,
    name: item.name,
    type: detectType(item),
    atlas: detectAtlas(item),
    semantic: detectSemantic(item),
    chain: detectChain(item),
    resonance: calculateResonance(item),
    fluxImpact: calculateFluxImpact(item)
  };
}

// 1) Tür belirleme (kök hece, damga, kültürel merkez)
function detectType(item) {
  if (item.type) return item.type;

  const name = item.name.toLowerCase();

  if (["ok", "at", "er", "el"].includes(name)) return "kök hece";
  if (["tamga", "petroglif"].includes(name)) return "damga";

  return "bilinmeyen";
}

// 2) Atlas konumu belirleme
function detectAtlas(item) {
  const atlasMap = {
    "ok": "Anadolu Dil Katmanı",
    "at": "Orta Asya – Altay",
    "er": "Mezopotamya – Yukarı Dicle",
    "el": "Anadolu – İç Hat",
    "tamga": "Göktürk – Orhun",
    "petroglif": "Sibirya – Altay"
  };

  return atlasMap[item.name.toLowerCase()] || "Atlas dışı";
}

// 3) Semantik anlam çıkarma
function detectSemantic(item) {
  const semanticMap = {
    "ok": "yön, doğrultu, hareket",
    "at": "güç, hız, taşıyıcı",
    "er": "insan, yiğit, öz",
    "el": "yükselme, ışık, yukarı",
    "tamga": "kimlik, işaret, aidiyet",
    "petroglif": "hafıza, iz, tarih"
  };

  return semanticMap[item.name.toLowerCase()] || "semantik bulunamadı";
}

// 4) Kök hece zinciri çıkarma
function detectChain(item) {
  const chainMap = {
    "ok": ["OK", "OĞ", "OKU", "OKA"],
    "at": ["AT", "ATA", "ATU", "TAT"],
    "er": ["ER", "AR", "IR", "UR"],
    "el": ["EL", "AL", "UL", "YEL"]
  };

  return chainMap[item.name.toLowerCase()] || [];
}

// 5) Rezonans hesaplama
function calculateResonance(item) {
  const base = item.name.length / 10;
  return Number((0.5 + base).toFixed(2));
}

// 6) Flux etkisi
function calculateFluxImpact(item) {
  return item.name.length * 0.03;
}
