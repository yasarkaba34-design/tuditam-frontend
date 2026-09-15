// ===============================
// YKOS Public Interface (Modern)
// ===============================

import { runFluxEngine } from "./runFluxEngine";
import { semiyotikParser } from "./semiyotikParser";
import { ykosPipeline } from "./ykosPipeline";

export const YKOS = {
  flux: null,
  parser: null,
  pipeline: null,

  // -------------------------------
  // Başlatma
  // -------------------------------
  init() {
    this.flux = runFluxEngine;
    this.parser = semiyotikParser;
    this.pipeline = ykosPipeline;
    console.log("YKOS çekirdeği başlatıldı.");
  },

  // -------------------------------
  // Döngü kontrolü
  // -------------------------------
  startLoop() {
    if (!this.flux) this.init();
    console.log("YKOS döngüsü çalışıyor.");
  },

  stopLoop() {
    console.log("YKOS döngüsü durduruldu.");
  },

  // -------------------------------
  // Mod kontrolü
  // -------------------------------
  setMode(mode) {
    console.log("YKOS modu değişti:", mode);
  }
};
