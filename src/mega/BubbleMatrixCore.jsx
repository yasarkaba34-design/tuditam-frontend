import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { evaluateBubble } from "./EvaluatorService";
import "./bubblematrix.css";
import "./tooltip.css";

export default function BubbleMatrixCore({ bubbles }) {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    title: "",
    description: "",
    rmv: "",
    atlas: "",
    flux: ""
  });

  const handleBubbleClick = async (e, bubble) => {
    const rect = e.target.getBoundingClientRect();

    // 🔥 CANLI SEMANTİK OKUMA
    const result = await evaluateBubble(bubble);

    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top,
      title: bubble.label,
      description: result.semantic,
      rmv: result.rmv,
      atlas: `${result.atlas.region} (${result.atlas.x}, ${result.atlas.y})`,
      flux: result.flux
    });
  };

  const closeTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="bubble-matrix" onClick={closeTooltip}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`bubble ${bubble.active ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleBubbleClick(e, bubble);
          }}
          style={{
            transform: `translate(${bubble.x}px, ${bubble.y}px)`,
            animationDuration: `${2 + bubble.label.length * 0.1}s`
          }}
        >
          <span className="bubble-label">{bubble.label}</span>
        </div>
      ))}

      <Tooltip
        visible={tooltip.visible}
        x={tooltip.x}
        y={tooltip.y}
        title={tooltip.title}
        description={tooltip.description}
        rmv={tooltip.rmv}
        atlas={tooltip.atlas}
        flux={tooltip.flux}
      />
    </div>
  );
}
import { getAtlasCoordinates } from "./AtlasPositioner";

const handleBubbleClick = async (e, bubble) => {
  const rect = e.target.getBoundingClientRect();
  const atlas = getAtlasCoordinates(bubble.label);
  const result = await evaluateBubble(bubble);

  setTooltip({
    visible: true,
    x: rect.left + rect.width / 2,
    y: rect.top,
    title: bubble.label,
    description: result.semantic,
    rmv: result.rmv,
    atlas: `${atlas.region} (${atlas.x}, ${atlas.y})`,
    flux: result.flux
  });
};
import { getFluxIntensity } from "./FluxService";

const handleBubbleClick = async (e, bubble) => {
  const rect = e.target.getBoundingClientRect();
  const result = await evaluateBubble(bubble);
  const fluxIntensity = getFluxIntensity(result.rmv);

  setTooltip({
    visible: true,
    x: rect.left + rect.width / 2,
    y: rect.top,
    title: bubble.label,
    description: result.semantic,
    rmv: result.rmv,
    atlas: `${result.atlas.region} (${result.atlas.x}, ${result.atlas.y})`,
    flux: fluxIntensity
  });
};
