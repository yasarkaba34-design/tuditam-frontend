// YKOS Motoru → Normalize → ResultPage
import { normalizeResult } from "./normalizeResult";

export function runFluxEngine(input) {
  const raw = ykosPipeline.run(input);

  return normalizeResult({
    title: raw.output || "YKOS Çözümlemesi",
    root: raw.pipeline.evaluator.type || "semantic_chain",
    phonetic: (raw.pipeline.evaluator.chain || []).map(c => c.id || c),
    semantic: raw.pipeline.evaluator.message || "Semantik zincir doğrulandı.",
    cultureLinks: raw.pipeline.flux.connections || [],
    origin: "Anadolu",
    routes: raw.pipeline.flux.connections || [],
    intensity: 0.9,
    notes: raw.pipeline.atlas.message || "Atlas koordinatları eşlendi."
  });
}
