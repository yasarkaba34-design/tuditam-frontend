import { YKOS_DATA } from "../data/ykosData";

export function startLiveEngine(callback) {
  let tick = 0;

  setInterval(() => {
    tick++;

    const livePacket = {
      time: Date.now(),
      tick,
      cosmicPulse: Math.sin(tick / 10).toFixed(3),
      semanticShift: YKOS_DATA.semantic[tick % YKOS_DATA.semantic.length],
      activeLayer: YKOS_DATA.layers[tick % YKOS_DATA.layers.length],
      chainFlow: YKOS_DATA.cosmicChain[tick % YKOS_DATA.cosmicChain.length]
    };

    callback(livePacket);
  }, 1000);
}
