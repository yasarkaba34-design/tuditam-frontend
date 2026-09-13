// Backend API'den veri çekme
async function fetchData() {
  try {
    const response = await fetch("https://api.ykos.org/semantic-lab/status"); 
    const data = await response.json();

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

    // Atlas Kartı
    const atlas = document.querySelector(".card.atlas .status");
    atlas.textContent = data.Atlas || "Bekleniyor";
    atlas.className = data.Atlas ? "status" : "status waiting";

  } catch (error) {
    console.error("Veri çekilemedi:", error);
  }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", fetchData);
