import { startYKOSLiveEngine } from "../modules/YKOSLiveSemanticEngine/YKOSLiveSemanticEngine";

useEffect(() => {
  startYKOSLiveEngine((liveData) => {
    setMotor(liveData.motorState);
    setMatrix(liveData.matrixState);
    setAnalysis(liveData.analysisTable);
  });
}, []);
