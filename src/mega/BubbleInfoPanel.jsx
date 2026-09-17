import "./BubbleInfoPanel.css";

export default function BubbleInfoPanel({ bubble, onClose }) {
  if (!bubble) return null;

  return (
    <div className="bubble-info-panel">
      <button className="close-btn" onClick={onClose}>×</button>

      <h3>{bubble.label}</h3>

      <div className="info-row">
        <strong>Renk:</strong> {bubble.color}
      </div>

      <div className="info-row">
        <strong>Konum:</strong> x={bubble.x}, y={bubble.y}
      </div>

      <div className="info-row">
        <strong>Ağırlık:</strong> {bubble.weight || "—"}
      </div>

      <div className="info-row">
        <strong>Cluster ID:</strong> {bubble.clusterId || "—"}
      </div>
    </div>
  );
}
