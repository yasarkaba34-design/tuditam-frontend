import React from "react";
import "./motion.css";

export default function MotionEngine({ selectedRoot }) {
  return (
    <div className="motion-container">
      <div className="chain-motion">TUT → KUR → BA → YOL → BİR → KAL</div>
      <div className="geo-pulse"></div>
      <div className="layer-fade"></div>
      <div className="graph-flow"></div>
    </div>
  );
}
