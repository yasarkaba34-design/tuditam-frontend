import { useEffect } from "react";

export default function YKOSLiveStream({ fetchAnalysis, setAnalysisData }) {
  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchAnalysis();   // Analiz Engine’den yeni veri çek
      setAnalysisData(newData);                // Sync Layer’a gönder
    }, 3000); // 3 saniyede bir güncelleme

    return () => clearInterval(interval);
  }, [fetchAnalysis, setAnalysisData]);

  return null;
}
