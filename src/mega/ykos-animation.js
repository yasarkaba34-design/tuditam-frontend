export function getSemanticAnimation(semantic) {
  const map = {
    "yön, doğrultu, hareket": "forward",
    "güç, hız, taşıyıcı": "accelerate",
    "insan, yiğit, öz": "pulse",
    "yükselme, ışık, yukarı": "rise",
    "kimlik, işaret, aidiyet": "anchor",
    "hafıza, iz, tarih": "drift"
  };

  return map[semantic] || "idle";
}
