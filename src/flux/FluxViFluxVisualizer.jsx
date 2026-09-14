import { useEffect, useState } from "react";
import "./fluxVisualizer.css";

export default function FluxVisualizer({ pipeline }) {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    if (!pipeline) return;

    const flux = pipeline.pipeline?.flux;
    const atlas = pipeline.pipeline?.atlas;

    if (!flux || !atlas) return;

    const enrichedNodes = atlas.coordinates.map((coord, index) => {
      const score = pipeline.pipeline.evaluator.score;

      return {
        id: coord.id,
        label: flux.chain[index]?.concept || coord.id,
        score,
        x: 120 + index * 140,
        y: 180 + Math.sin(index * 0.8) * 60
      };
    });

    setNodes(enrichedNodes);
  }, [pipeline]);

  const getColor = (score) => {
    if (score >= 99.9) return "#FFD700"; // altın sarısı
    if (score >= 98) return "#00E5FF";   // turkuaz
    if (score >= 95) return "#9C27B0";   // mor
    return "#FF1744";                    // kırmızı
  };

  return (
    <div className="flux-container">
      <svg width="900" height="500">
        {nodes.map((node, i) => {
          const next = nodes[i + 1];
          if (!next) return null;

          return (
            <line
              key={`line-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="#888"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill={getColor(node.score)}
              className="flux-node"
            />
            <text
              x={node.x}
              y={node.y + 45}
              textAnchor="middle"
              fontSize="14"
              fill="#fff"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
