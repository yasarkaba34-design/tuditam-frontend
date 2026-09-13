import { useState } from "react";
import { ykosPipeline } from "../ykos-core/ykosPipeline";

export function useBubblePipeline() {
  const [pipelineResult, setPipelineResult] = useState(null);

  const triggerPipeline = (selectedBubble) => {
    const input = {
      chain: [
        {
          id: selectedBubble.id,
          concept: selectedBubble.concept,
          raw: selectedBubble.raw
        }
      ]
    };

    const result = ykosPipeline.run(input);
    setPipelineResult(result);
  };

  return {
    pipelineResult,
    triggerPipeline
  };
}
