import React from "react";
import "./tooltip.css";

export default function Tooltip({ visible, x, y, title, description, rmv, atlas, flux }) {
  if (!visible) return null;

  return (
    <div className="ykos-tooltip" style={{ top: y, left: x }}>
      <h4>{title}</h4>
      <p>{description}</p>

      <div className="tooltip-meta">
        <p><strong>RMV:</strong> {rmv}</p>
        <p><strong>Atlas:</strong> {atlas}</p>
        <p><strong>Flux Frekansı:</strong> {flux}</p>
      </div>
    </div>
  );
}
