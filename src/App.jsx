// src/App.jsx
import React, { useState } from "react";
import YKOSDashboard from "./layouts/YKOSDashboard";
import AdminPanel from "./layouts/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import YalinVeriGirisi from "./pages/YalinVeriGirisi";
import OpsCenter from "./layouts/OpsCenter";
import BubbleMatrix from "./mega/BubbleMatrix.jsx";
import AtlasMap from "./mega/AtlasMap";
import Hakkimizda from "./pages/Hakkimizda";
import ContentDetail from "./layouts/ContentDetail";
import "./index.css";

export default function App() {
  const [currentLang, setCurrentLang] = useState("TR");
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handleNavigateRead = (id) => {
    setSelectedContentId(id);
    setActiveView("detail");
    window.scrollTo(0, 0);
  };

  return (
    <div
      style={{
        backgroundColor: "#030712",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* ANA SAYFA */}
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

      {/* İÇERİK DETAY */}
      {activeView === "detail" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>

          <ContentDetail
            selectedId={selectedContentId}
            currentLang={currentLang}
          />
        </div>
      )}

      {/* BALONCUK MATRİSİ */}
      {activeView === "matrix" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>

          <BubbleMatrix currentLang={currentLang} />
        </div>
      )}

      {/* ATLAS */}
      {activeView === "atlas" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "#ffd700",
                color: "#000",
                border: "1px solid #ffd700",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>

          <AtlasMap currentLang={currentLang} />
        </div>
      )}

      {/* YÖNTEM / HAKKIMIZDA */}
      {activeView === "method" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>

          <Hakkimizda currentLang={currentLang} />
        </div>
      )}

      {/* AÇIK VERİ / KONUK GİRİŞİ */}
      {activeView === "acikveri" && (
        <YalinVeriGirisi
          currentLang={currentLang}
          onGoHome={() => setActiveView("dashboard")}
        />
      )}

      {/* OPERASYON MERKEZİ */}
      {activeView === "ops" && (
        <div>
          <div style={{ padding: "10px 20px" }}>
            <button
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "#ffd700",
                color: "#000",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ⬅ Ana Sayfaya Dön
            </button>
          </div>

          <OpsCenter currentLang={currentLang} />
        </div>
      )}

      {/* YÖNETİCİ GİRİŞİ */}
      {activeView === "login" && (
        <AdminLogin
          onSuccess={() => setActiveView("admin")}
          onCancel={() => setActiveView("dashboard")}
        />
      )}

      {/* YÖNETİCİ PANELİ */}
      {activeView === "admin" && (
        <AdminPanel
          currentLang={currentLang}
          onLogout={() => setActiveView("dashboard")}
        />
      )}
    </div>
  );
}