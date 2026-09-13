import { useEffect, useState } from "react";
import { startYKOSLiveEngine } from "../modules/YKOSLiveSemanticEngine/YKOSLiveSemanticEngine";
import { getBubbleStyle, getResonanceLineStyle } from "../modules/YKOSLiveSemanticEngine/MatrixBubbleVisuals";

export default function YKOSLivePanel() {
  const [motor, setMotor] = useState(null);
  const [matrix, setMatrix] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  useEffect(() => {
    startYKOSLiveEngine((liveData) => {
      setMotor(liveData.motorState);
      setMatrix(liveData.matrixState);
      setAnalysis(liveData.analysisTable);
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      {matrix.map((bubble, i) => (
        <div key={i} style={getBubbleStyle(bubble)} />
      ))}
    </div>
  );
}
