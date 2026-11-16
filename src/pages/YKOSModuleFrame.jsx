import React from "react";

const MODULES = {
  test: { path: "/test", title: "YKOS Test" },
  analysis: { path: "/analiz", title: "YKOS Okuma ve Analiz" },
  matrix: { path: "/matrix", title: "YKOS Matrisi" },
  "matrix-3d": { path: "/matrix-3d", title: "YKOS 3D Matrisi" },
};

export default function YKOSModuleFrame({ module, onHome }) {
  const selected = MODULES[module];

  if (!selected) {
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#030712", color: "#fff" }}>
        <p>Bu YKOS aracı bulunamadı.</p>
      </main>
    );
  }

  return (
    <main style={{ position: "fixed", inset: 0, zIndex: 1000, background: "#030712" }}>
      <header
        style={{
          position: "absolute",
          inset: "0 0 auto 0",
          zIndex: 2,
          height: "56px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "8px 16px",
          background: "#050811",
          borderBottom: "1px solid #f59e0b",
          boxShadow: "0 4px 18px rgba(0,0,0,.55)",
        }}
      >
        <button
          type="button"
          onClick={onHome}
          style={{
            minHeight: "38px",
            padding: "8px 14px",
            border: "1px solid #f59e0b",
            borderRadius: "7px",
            background: "rgba(245,158,11,.1)",
            color: "#fbbf24",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          ← TÜDİTAM ana sayfasına dön
        </button>
        <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{selected.title}</span>
      </header>
      <iframe
        title={selected.title}
        src={`https://www.ykos.org${selected.path}`}
        style={{
          position: "absolute",
          inset: "56px 0 0",
          width: "100%",
          height: "calc(100% - 56px)",
          border: 0,
          background: "#030712",
        }}
        allow="fullscreen"
      />
    </main>
  );
}
