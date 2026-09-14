// YKOS Çekirdek — Evaluator çıktısını işleyen merkez modül

export const ykosCore = {
  lastEvaluation: null,

  receiveEvaluation(evaluated) {
    this.lastEvaluation = evaluated;

    // 1) Atlas tetikleme
    this.triggerAtlas(evaluated.atlas);

    // 2) Flux güncelleme
    this.updateFlux(evaluated.fluxImpact);

    // 3) Baloncuk matrisi
    this.updateBubbleMatrix(evaluated);

    // 4) UI güncelleme
    console.log("YKOS Çekirdek Değerlendirme:", evaluated);
  },

  triggerAtlas(atlasRegion) {
    console.log("Atlas bölgesi aktif:", atlasRegion);
  },

  updateFlux(amount) {
    console.log("Flux güncellendi:", amount);
  },

  updateBubbleMatrix(evaluated) {
    console.log("Baloncuk matrisi güncellendi:", evaluated.name);
  }
};
