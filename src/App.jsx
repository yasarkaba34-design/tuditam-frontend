// src/App.jsx
import React, { useState, useEffect } from "react";
import YKOSDashboard from "./layouts/YKOSDashboard";
import AdminPanel from "./layouts/AdminPanel";
import YalinVeriGirisi from './pages/YalinVeriGirisi';
import OpsCenter from "./layouts/OpsCenter";
import BubbleMatrix from "./mega/BubbleMatrix.jsx";
import AtlasMap from "./mega/AtlasMap";
import Hakkimizda from "./pages/Hakkimizda";
import ReadingPanel from "./components/ReadingPanel";
import './index.css';

const VIEW_PATHS = {
  dashboard: "/",
  matrix: "/matrix",
  atlas: "/atlas",
  method: "/method",
  acikveri: "/open-data",
  ops: "/ops",
  login: "/admin-login",
};

function getViewFromLocation() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const readMatch = pathname.match(/^\/read\/(.+)$/);

  if (readMatch) {
    let contentId = readMatch[1];
    try {
      contentId = decodeURIComponent(contentId);
    } catch {
      // Keep the raw route segment if a malformed encoded URL is shared.
    }
    return { view: "detail", contentId };
  }

  const pathToView = Object.entries(VIEW_PATHS).find(([, path]) => path === pathname);
  return { view: pathToView?.[0] || "dashboard", contentId: null };
}

export default function App() {
  const [currentLang, setCurrentLang] = useState("TR");
  const [initialRoute] = useState(getViewFromLocation);
  const [activeView, setActiveView] = useState(initialRoute.view);
  const [selectedContentId, setSelectedContentId] = useState(initialRoute.contentId);

  const navigate = (view, contentId = null, { replace = false } = {}) => {
    const path = view === "detail" && contentId != null
      ? `/read/${encodeURIComponent(String(contentId))}`
      : (VIEW_PATHS[view] || "/");
    if (window.location.pathname !== path) {
      window.history[replace ? "replaceState" : "pushState"]({}, "", path);
    }
    setSelectedContentId(contentId);
    setActiveView(view);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handlePopState = () => {
      const route = getViewFromLocation();
      setActiveView(route.view);
      setSelectedContentId(route.contentId);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigateRead = (id) => navigate("detail", id);

  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh", color: "#fff" }}>
      {activeView === "dashboard" && (
        <YKOSDashboard
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          onVisualize={() => navigate("matrix")}
          onNavigateRead={handleNavigateRead}
          onNavigateLogin={() => navigate("login")}
          onNavigateAtlas={() => navigate("atlas")}
          onNavigateEngine={() => navigate("dashboard")}
          onNavigateFlow={() => navigate("dashboard")}
          onNavigateMethod={() => navigate("method")}
          onNavigateAcikVeri={() => navigate("acikveri")}
          onNavigateOpsCenter={() => navigate("ops")}
        />
      )}

      {activeView === "detail" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => navigate("dashboard")}
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
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <BubbleMatrix currentLang={currentLang} />
        </div>
      )}

      {activeView === "atlas" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "1px solid #ffd700", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <AtlasMap currentLang={currentLang} />
        </div>
      )}

      {activeView === "method" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <Hakkimizda currentLang={currentLang} />
        </div>
      )}

      {activeView === "acikveri" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <YalinVeriGirisi currentLang={currentLang} />
        </div>
      )}

      {activeView === "ops" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <OpsCenter currentLang={currentLang} />
        </div>
      )}

      {activeView === "login" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button onClick={() => navigate("dashboard")} style={{ background: "#ffd700", color: "#000", border: "none", padding: "8px 16px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              ⬅ Ana Sayfaya Dön
            </button>
          </div>
          <AdminPanel currentLang={currentLang} />
        </div>
      )}
    </div>
  );
}
