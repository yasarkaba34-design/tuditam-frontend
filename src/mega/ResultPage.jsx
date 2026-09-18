// src/mega/ResultPage.jsx
import { useLocation } from "react-router-dom";
import ReadingPanel from "../components/ReadingPanel";
import AnalyzerPanel from "../components/AnalyzerPanel";
import VisualizerPanel from "../components/VisualizerPanel";
import "./ResultPage.css";

export default function ResultPage() {
  const location = useLocation();
  const data = location.state?.result;

  if (!data) {
    return (
      <div className="no-result">
        Veri yüklenemedi veya motor sonucu bulunamadı.
      </div>
    );
  }

  return (
    <div className="result-wrapper">
      <h1 className="result-title">
        {data.title || data.analysis?.root || "Sonuç"}
      </h1>

      {/* OKUMA PANELİ */}
      <ReadingPanel content={data.analysis} />

      {/* ANALİZ PANELİ */}
      <AnalyzerPanel content={data.analysis} />

      {/* GÖÇ & AKIŞ HARİTASI */}
      <VisualizerPanel flow={data.flow} atlas={data.atlas} />
    </div>
  );
}
