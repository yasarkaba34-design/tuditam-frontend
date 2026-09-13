// src/App.jsx
import React, { useState, useEffect } from "react";
import { nodeAnalysisData } from "./nodeAnalysisData";
import YKOSDashboard from "./layouts/YKOSDashboard";
import { defaultArchiveArticles } from "./data/ykosDataService";
import AdminPanel from "./layouts/AdminPanel";
import YalinVeriGirisi from './pages/YalinVeriGirisi';
import OpsCenter from "./layouts/OpsCenter";
import BubbleMatrix from "./mega/BubbleMatrix.jsx";
import AtlasMap from "./mega/AtlasMap";
import Hakkimizda from "./pages/Hakkimizda";
// App.jsx içinde:
import ReadingPanel from "./components/ReadingPanel";
import './index.css';

export default function App() {
  const [currentLang, setCurrentLang] = useState("TR");
  const [activeView, setActiveView] = useState("dashboard"); // dashboard, detail, matrix, atlas, method, acikveri, ops, login
  const [selectedContentId, setSelectedContentId] = useState(null);

  // Navigasyon yardımcıları
  const handleNavigateRead = (id) => {
    setSelectedContentId(id);
    setActiveView("detail");
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh", color: "#fff" }}>
      {activeView === "dashboard" && (
        <YKOSDashboard
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          onVisualize={() => setActiveView("matrix")}
          onNavigateRead={handleNavigateRead}
          onNavigateLogin={() => setActiveView("login")}
          onNavigateAtlas={() => setActiveView("atlas")}
          onNavigateEngine={() => setActiveView("dashboard")}
          onNavigateFlow={() => setActiveView("dashboard")}
          onNavigateMethod={() => setActiveView("method")}
          onNavigateAcikVeri={() => setActiveView("acikveri")}
          onNavigateOpsCenter={() => setActiveView("ops")}
        />
      )}

      {activeView === "detail" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <ReadingPanel content={selectedContentId} currentLang={currentLang} />
        </div>
      )}

      {activeView === "matrix" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <BubbleMatrix currentLang={currentLang} />
        </div>
      )}

      {activeView === "atlas" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "1px solid #ffd700", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <AtlasMap currentLang={currentLang} />
        </div>
      )}

      {activeView === "method" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <Hakkimizda currentLang={currentLang} />
        </div>
      )}

      {activeView === "acikveri" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <YalinVeriGirisi currentLang={currentLang} />
        </div>
      )}

      {activeView === "ops" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <OpsCenter currentLang={currentLang} />
        </div>
      )}

      {activeView === "login" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <AdminPanel currentLang={currentLang} />
        </div>
      )}
    </div>
  );
}
