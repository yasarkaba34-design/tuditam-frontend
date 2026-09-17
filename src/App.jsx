// src/App.jsx
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { nodeAnalysisData } from "./nodeAnalysisData";
import { defaultArchiveArticles } from "./data/ykosDataService";
import { auth } from "./data/firebase";

import YKOSDashboard from "./layouts/YKOSDashboard";
import AdminPanel from "./layouts/AdminPanel";
import OpsCenter from "./layouts/OpsCenter";

import AdminLogin from "./pages/AdminLogin";
import YalinVeriGirisi from "./pages/YalinVeriGirisi";
import Hakkimizda from "./pages/Hakkimizda";

import BubbleMatrix from "./mega/BubbleMatrix.jsx";
import AtlasMap from "./mega/AtlasMap";
import ReadingPanel from "./components/ReadingPanel";

import "./index.css";

export default function App() {
  const [currentLang, setCurrentLang] = useState("TR");
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedContentId, setSelectedContentId] = useState(null);

  // Firebase yönetici oturumu
  const [adminUser, setAdminUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Firebase oturum durumunu sürekli takip eder
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdminUser(user);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Gerçek Firebase çıkış işlemi
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAdminUser(null);
      setActiveView("dashboard");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Çıkış işlemi başarısız:", error);
      alert("Çıkış yapılamadı. Lütfen tekrar deneyiniz.");
    }
  };

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

          <ReadingPanel
            content={selectedContentId}
            currentLang={currentLang}
          />
        </div>
      )}

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

      {activeView === "acikveri" && (
        <YalinVeriGirisi
          currentLang={currentLang}
          onLogout={() => setActiveView("dashboard")}
        />
      )}

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

      {activeView === "login" &&
        (authLoading ? (
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffd700",
              fontWeight: "bold",
            }}
          >
            Oturum kontrol ediliyor...
          </div>
        ) : adminUser ? (
          <AdminPanel
            currentLang={currentLang}
            onLogout={handleLogout}
          />
        ) : (
          <AdminLogin
            onBack={() => setActiveView("dashboard")}
          />
        ))}
    </div>
  );
}