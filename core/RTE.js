import Kernel from "./Kernel";

export default class RTE {
  constructor() {
    this.kernel = new Kernel();
    this.interval = null;
  }

  cycle() {
    const matrices = this.kernel.get("matrices");
    const meta = this.kernel.get("meta");

    // MetaLayer → Matrix Engine
    const atlas = matrices.map(m => ({
      id: m.id,
      label: m.id.toUpperCase(),
      coords: meta.coordinates[m.id],
      chain: meta.chain[m.id]
    }));

    this.kernel.update("atlas", atlas);

    // BubbleMatrix → semiyotik çözümleme
    const bubble = atlas.map(a => ({
      id: a.id,
      resonance: Math.random(),
      frequency: a.chain
    }));

    this.kernel.update("bubble", bubble);

    // Evaluator → sonuç
    this.kernel.update("eval", {
      total: bubble.length,
      resonanceAvg: bubble.reduce((t, b) => t + b.resonance, 0) / bubble.length
    });
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => this.cycle(), 200);
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
