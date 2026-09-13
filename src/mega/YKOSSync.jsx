import { useEffect } from "react";

export default function YKOSSync({ analysisData, setBubbles }) {
  useEffect(() => {
    if (!analysisData) return;

    const syncedBubbles = analysisData.map((item, index) => {
      const { vectorAngle, phoneticMatch, atlasColor } = item;

      // Flux ve Resonance senkronizasyonu
      const flux = Math.abs(Math.sin(vectorAngle)) * 0.9;
      const resonance = Math.abs(Math.cos(phoneticMatch)) * 0.8;

      // Hareket yönü vektörü
      const dirX = Math.cos(vectorAngle);
      const dirY = Math.sin(vectorAngle);

      return {
        id: index,
        x: 400 + dirX * 100,
        y: 300 + dirY * 100,
        radius: 12 + resonance * 8,
        flux,
        resonance,
        atlasColor,
        semanticChain: item.semanticChain,
      };
    });

    setBubbles(syncedBubbles);
  }, [analysisData, setBubbles]);

  return null;
}
