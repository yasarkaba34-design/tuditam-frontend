// Örnek veri kaynağı (API veya backend'den gelebilir)
const data = {
  QuantumFlux: null,   // henüz veri yok
  OmniField: "Aktif",  // örnek veri
  CosmicField: null    // henüz veri yok
};

// Kart durumlarını güncelleyen fonksiyon
function updateStatus() {
  // QuantumFlux
  const qf = document.querySelector(".card:nth-child(1) .status");
  qf.textContent = data.QuantumFlux || "Bekleniyor";
  qf.className = data.QuantumFlux ? "status" : "status waiting";

  // OmniField
  const of = document.querySelector(".card:nth-child(2) .status");
  of.textContent = data.OmniField || "Bekleniyor";
  of.className = data.OmniField ? "status" : "status waiting";

  // CosmicField
  const cf = document.querySelector(".card:nth-child(3) .status");
  cf.textContent = data.CosmicField || "Bekleniyor";
  cf.className = data.CosmicField ? "status" : "status waiting";

  // Atlas Kartı (opsiyonel)
  const atlas = document.querySelector(".card.atlas .status");
  atlas.textContent = "Bekleniyor"; // Atlas için özel durum
  atlas.className = "status waiting";
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", updateStatus);
