// FILE: src/engine/CosmicUniverseEngine.js

export function startCosmicUniverse(callback) {
  let t = 0;

  const intervalId = setInterval(() => {
    t++;

    const universePacket = {
      time: Date.now(),
      tick: t,
      quantumFlux: (Math.sin(t / 10) * 0.85).toFixed(4),
      omniField: { fieldState: t % 2 === 0 ? "aktif" : "durağan", resonance: (Math.cos(t / 5)).toFixed(4) },
      cosmicEntropy: (0.5 + Math.sin(t / 20) * 0.2).toFixed(4),
      hyperState: { activeState: "SYNAPSE_ACTIVE", coherence: "0.9839" }
    };

    if (typeof callback === "function") {
      callback(universePacket);
    }
  }, 1000);

  // Temizleme fonksiyonu kesinlikle bir Function dönmelidir
  return function stopEngine() {
    clearInterval(intervalId);
  };
}
