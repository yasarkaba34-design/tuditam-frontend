import { useEffect } from "react";

export default function YKOSFeedbackLoop({ bubbles, sendFeedback }) {
  useEffect(() => {
    if (!bubbles || bubbles.length === 0) return;

    const feedbackPacket = bubbles.map((b) => ({
      flux: b.flux,
      resonance: b.resonance,
      semanticLast: b.semanticChain.at(-1),
      atlasColor: b.atlasColor,
    }));

    sendFeedback(feedbackPacket); // Analiz Engine’e geri gönder
  }, [bubbles, sendFeedback]);

  return null;
}
