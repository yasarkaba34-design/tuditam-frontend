export function getShapeByType(type) {
  const map = {
    "kök hece": "circle",
    "damga": "square",
    "petroglif": "triangle",
    "kültürel merkez": "hexagon"
  };

  return map[type] || "circle";
}
