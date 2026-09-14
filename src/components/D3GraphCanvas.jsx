import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const D3GraphCanvas = ({ rawData, onNodeClick }) => {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!rawData || !svgRef.current) return;

    const formattedNodes = [...rawData.nodes];
    const formattedLinks = rawData.links.map(link => ({
      source: link.source,
      target: link.target
    }));

    const width = window.innerWidth;
    const height = window.innerHeight;

    const simulation = d3.forceSimulation(formattedNodes)
      .force("link", d3.forceLink(formattedLinks).id(d => d.id).distance(90))
      .force("charge", d3.forceManyBody().strength(-220))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(35));

    simulation.on("tick", () => {
      setNodes([...formattedNodes]);
      setLinks([...formattedLinks]);
    });

    const svg = d3.select(svgRef.current);
    svg.call(d3.zoom().on("zoom", (event) => {
      svg.select("g.ykos-viewport").attr("transform", event.transform);
    }));

    return () => simulation.stop();
  }, [rawData]);

  const getCombinedColor = (node) => {
    if (node.type === 'Matris') {
      if (node.id === 'Y100') return { fill: '#0c1e3a', stroke: '#1d4ed8', text: '#93c5fd' };
      if (node.id === 'Y200') return { fill: '#062e1c', stroke: '#15803d', text: '#86efac' };
      if (node.id === 'Y300') return { fill: '#2a1a04', stroke: '#b45309', text: '#fde047' };
    }
    if (node.type === 'Dosya') return { fill: '#14532d', stroke: '#22c55e', text: '#dcfce7' };
    if (node.type === 'Atlas') return { fill: '#451a03', stroke: '#d97706', text: '#fef3c7' };

    switch (node.cluster) {
      case 'MERKEZ KÜME': return { fill: '#1e1b4b', stroke: '#eab308', text: '#fef08a' };
      case 'SİSTEM KÜMESİ': return { fill: '#2e1007', stroke: '#f97316', text: '#ffedd5' };
      case 'HAREKET KÜMESİ': return { fill: '#0c2340', stroke: '#06b6d4', text: '#e0f7fa' };
      case 'BİLİŞ / DİL KÜMESİ': return { fill: '#022c22', stroke: '#10b981', text: '#d1fae5' };
      case 'AYRIM KÜMESİ': return { fill: '#2e1035', stroke: '#a855f7', text: '#f3e8ff' };
      default: return { fill: '#1f2937', stroke: '#64748b', text: '#e2e8f0' };
    }
  };

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '100vh', backgroundColor: '#020617', overflow: 'hidden' }}>
      <g className="ykos-viewport">
        <g>
          {links.map((link, idx) => (
            <line
              key={idx}
              x1={link.source.x} y1={link.source.y}
              x2={link.target.x} y2={link.target.y}
              stroke="#1e293b"
              strokeWidth={2}
              opacity={0.6}
            />
          ))}
        </g>
        <g>
          {nodes.map((node) => {
            const colors = getCombinedColor(node);
            const isMacro = node.type === 'Matris';

            return (
              <g key={node.id} transform={`translate(${node.x},${node.y})`} onClick={() => onNodeClick(node)} style={{ cursor: 'pointer' }}>
                <circle
                  r={isMacro ? 36 : 24}
                  fill={colors.fill}
                  stroke={colors.stroke}
                  strokeWidth={isMacro ? 3 : 1.5}
                />
                <text dy="4" textAnchor="middle" fill={colors.text} style={{ fontSize: isMacro ? '11px' : '9px', fontWeight: 'bold' }}>
                  {node.name}
                </text>
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
};