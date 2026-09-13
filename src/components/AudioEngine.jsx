import React, { useEffect } from "react";

// Ses dosyalarını doğrudan public/audio klasöründen URL olarak çekiyoruz
const rootSounds = {
  TUT: "/audio/tut.mp3",
  KUR: "/audio/kur.mp3",
  BA:  "/audio/ba.mp3",
  YOL: "/audio/yol.mp3",
  BİR: "/audio/bir.mp3",
  KAL: "/audio/kal.mp3"
};

export default function AudioEngine({ selectedRoot }) {
  useEffect(() => {
    if (!selectedRoot) return;

    const key = selectedRoot.toUpperCase();
    const soundPath = rootSounds[key];

    if (soundPath) {
      const audio = new Audio(soundPath);
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.log("Ses oynatılamadı (Kullanıcı etkileşimi gerekiyor):", err);
      });
    }
  }, [selectedRoot]);

  return (
    <div className="engine-card" style={{ padding: "12px", background: "#151515", borderRadius: "6px", border: "1px solid #222" }}>
      <h4 style={{ color: "#d4af37", margin: "0 0 8px 0", fontSize: "14px" }}>Ses Motoru (Audio)</h4>
      <p style={{ color: "#aaa", margin: 0, fontSize: "12px" }}>
        {selectedRoot ? `Kök Tetiklendi: ${selectedRoot.toUpperCase()}` : "Semantik seçim bekleniyor..."}
      </p>
    </div>
  );
}