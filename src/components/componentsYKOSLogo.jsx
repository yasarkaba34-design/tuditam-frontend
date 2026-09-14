// src/components/YKOSLogo.jsx
import React from "react";

export default function YKOSLogo({ size = 48, showText = true }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", verticalAlign: "middle" }}>
      {/* VEKTÖREL GÖBEKLİTEPE T-SÜTUNU VE HALO MÜHRÜ */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))" }}
      >
        {/* Dış Enerji Çemberi */}
        <circle cx="50" cy="50" r="46" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.8" />
        
        {/* İç Dolgu Diski */}
        <circle cx="50" cy="50" r="40" fill="url(#ykosGrad)" stroke="#ffd700" strokeWidth="1.5" />
        
        {/* Göbeklitepe T-Sütun Başı (Yatay Blok) */}
        <rect x="28" y="24" width="44" height="14" rx="2" fill="#f8fafc" />
        
        {/* Göbeklitepe T-Sütun Gövdesi (Dikey Blok) */}
        <rect x="42" y="38" width="16" height="38" rx="2" fill="#f8fafc" />
        
        {/* Merkez Enerji Noktası / Rezonans */}
        <circle cx="50" cy="52" r="3.5" fill="#ea580c" />

        <defs>
          <radialGradient id="ykosGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#03060f" />
          </radialGradient>
        </defs>
      </svg>

      {showText && (
        <div style={{ textAlign: "left", lineHeight: 1.1 }}>
          <div style={{ color: "#f59e0b", fontWeight: "900", fontSize: `${size * 0.38}px`, letterSpacing: "2.5px" }}>
            YKOS
          </div>
          <div style={{ color: "#94a3b8", fontSize: `${size * 0.18}px`, letterSpacing: "1px", textTransform: "uppercase" }}>
            Semiyotik Dil Sistemi
          </div>
        </div>
      )}
    </div>
  );
}
