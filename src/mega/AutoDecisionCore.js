// FILE: src/mega/AutoDecisionCore.js

export function autoDecision(flow) {
  if (!flow) return null;

  let decision = {};

  // Layer A çok yükseldiyse Quantum flux azalt
  if (flow.layers.layerA > 50) {
    decision = { target: "goc", payload: -3 };
  }

  // Flux çok yükseldiyse OmniField’i dengele
  if (flow.quantum.flux > 40) {
    decision = { target: "atlas", payload: -2 };
  }

  // OmniField çok düştüyse Layer B’yi artır
  if (flow.quantum.omniField < 20) {
    decision = { target: "kalkan", payload: +4 };
  }

  return decision;
}
// FILE: src/mega/AutoDecisionCore.js

// Genişleme: sistem kendi karar kurallarını artırabilir
export function autoExpand(flow) {
  if (!flow) return null;

  let expansion = {};

  // Layer A ve Layer B birlikte yükseliyorsa sistem genişler
  if (flow.layers.layerA > 40 && flow.layers.layerB > 40) {
    expansion = { target: "quantum", payload: +5 };
  }

  // Flux ve OmniField dengedeyse sistem stabil genişleme yapar
  if (flow.quantum.flux > 20 && flow.quantum.omniField > 20) {
    expansion = { target: "chain", payload: +1 };
  }

  return expansion;
}
// FILE: src/mega/AutoDecisionCore.js

export function autoDecision(flow) {
  if (!flow) return null;

  let decision = {};

  // Spin yüksekse Layer A’yı artır
  if (flow.quantum.spin > 5) {
    decision = { target: "kalkan", payload: +3 };
  }

  // Entropy çok yükseldiyse Flux’ı düşür
  if (flow.quantum.entropy > 15) {
    decision = { target: "goc", payload: -2 };
  }

  // Stability düşükse OmniField’i yükselt
  if (flow.quantum.stability < 40) {
    decision = { target: "atlas", payload: +4 };
  }

  return decision;
}
