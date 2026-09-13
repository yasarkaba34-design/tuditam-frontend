// FILE: src/bubblematrix/BubbleMatrixViewer.jsx

import React from "react";
import BP07 from "./profiles/BP-07.json";
import BP12 from "./profiles/BP-12.json";

export default function BubbleMatrixViewer() {
  const profiles = [BP07, BP12];

  return (
    <div style={{ background: "#111", color: "gold", padding: "20px", border: "1px solid gold" }}>
      <h3>BubbleMatrix Görsel Profil Görüntüleyici</h3>

      {profiles.map((p) => (
        <div
          key={p.id}
          style={{
            marginBottom: "25px",
            padding: "15px",
            border: "1px solid gold",
            background: "#222",
          }}
        >
          <h4>{p.root} — {p.id}</h4>
          <p><strong>Tema:</strong> {p.theme}</p>
          <p><strong>Renk:</strong> {p.color}</p>
          <p><strong>Şekil:</strong> {p.shape}</p>
          <p><strong>Glow:</strong> {p.glow}</p>
          <p><strong>Shadow:</strong> {p.shadow}</p>
          <p><strong>Tilt:</strong> {p.tilt}</p>
          <p><strong>Vibration:</strong> {p.vibration}</p>
          <p><strong>Trail:</strong> {p.trail}</p>
          <p><strong>Fade:</strong> {p.fade}</p>

          {/* Animasyon bilgisi */}
          {p.animation && (
            <div style={{ marginTop: "10px" }}>
              <p><strong>Animasyon:</strong></p>
              {Object.entries(p.animation).map(([key, value]) => (
                <p key={key}>{key}: {String(value)}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
