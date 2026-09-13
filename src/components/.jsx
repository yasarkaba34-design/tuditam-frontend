//import TehnikPanel from "./components/TehnikPanel";
import AtlasMap from "./AtlasMap";
import DetailView from "./DetailView";
import SemanticEngine from "./SemanticEngine";
import LayerSystem from "./LayerSystem";
import GraphMatrix from "./GraphMatrix";

import React, { useState } from "react";

function TehnikPanel() {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="panel-container">

      {/* Sol Menü */}
      <div className="panel-menu">
        <div 
// components/SemanticEngine.jsx

import React from "react";

export default function SemanticEngine() {
  return (
    <div>
      <h2>Semantik Motor</h2>
      <p>YKOS Semantik Zinciri Çalışıyor...</p>
    </div>
  );
}

          className={activeTab === "map" ? "menu-item active" : "menu-item"}
          onClick={() => setActiveTab("map")}
        >
          Harita
        </div>

        <div 
          className={activeTab === "detail" ? "menu-item active" : "menu-item"}
          onClick={() => setActiveTab("detail")}
        >
          Detay
        </div>

        <div 
          className={activeTab === "semantic" ? "menu-item active" : "menu-item"}
          onClick={() => setActiveTab("semantic")}
        >
          Semantik
        </div>

        <div 
          className={activeTab === "layer" ? "menu-item active" : "menu-item"}
          onClick={() => setActiveTab("layer")}
        >
          Katmanlar
        </div>

        <div 
          className={activeTab === "graph" ? "menu-item active" : "menu-item"}
          onClick={() => setActiveTab("graph")}
        >
          Grafik
        </div>
      </div>

      {/* Sağ İçerik */}
      <div className="panel-content">
        {activeTab === "map" && <div>Atlas Haritası Açık</div>}
        {activeTab === "detail" && <div>Detay Modülü Açık</div>}
        {activeTab === "semantic" && <div>Semantik Motor Açık</div>}
        {activeTab === "layer" && <div>Katman Sistemi Açık</div>}
        {activeTab === "graph" && <div>Matris Grafiği Açık</div>}
      </div>

    </div>
  );
}

export default TehnikPanel;

import React from "react";

function TehnikPanel() {
  return (
    <div>
      {/* Panel içeriği */}
    </div>
  );
}

export default TehnikPanel;

const calculateSingularity = (energy, multiverse) => {
  const universeEnergyAvg = multiverse.reduce((acc, u) => acc + u.energy, 0) / multiverse.length;
  const forceAvg = multiverse.reduce((acc, u) => acc + u.force[0].field, 0) / multiverse.length;
  const spaceAvg = multiverse.reduce((acc, u) => acc + u.space[0].coords.x, 0) / multiverse.length;

  return Math.round(
    energy * 0.4 +
    universeEnergyAvg * 0.3 +
    (100 - spaceAvg * 20) * 0.3
  );
};
const singularity = calculateSingularity(energy, multiverse);

const universeLayers = [
  { name: "Proto Evren", color: "#00aaff" },
  { name: "Orta Evren", color: "#ffaa00" },
  { name: "Geç Evren", color: "#ff4444" },
  { name: "Sembol Evreni", color: "#888" },
  { name: "Atlas Evreni", color: "#0f0" },
  { name: "Akış Evreni", color: "#fff" },
  { name: "Zaman Evreni", color: "#ff00ff" },
  { name: "Enerji Evreni", color: "#ff0088" },
  { name: "Kuvvet Evreni", color: "#00ffcc" },
  { name: "Uzay Evreni", color: "#cccccc" }
];
const calculateUniverseEnergy = (energy, forceField, space) => {
  const forceAvg = forceField.reduce((acc, f) => acc + f.field, 0) / forceField.length;
  const spaceAvg = space.reduce((acc, s) => acc + semanticDistance(s.coords, {x:0,y:0,z:0}), 0) / space.length;

  return Math.round(
    energy * 0.4 +
    forceAvg * 0.3 +
    (100 - spaceAvg * 20) * 0.3
  );
};
const buildUniverseVariant = (rootMatch, cluster, density, energy, forceField, space, variant) => {
  const energyFactor = variant === 1 ? 1.0 : variant === 2 ? 0.8 : 1.2;
  const forceFactor  = variant === 1 ? 1.0 : variant === 2 ? 1.3 : 0.9;
  const spaceFactor  = variant === 1 ? 1.0 : variant === 2 ? 0.7 : 1.4;

  return {
    id: variant,
    energy: Math.round(energy * energyFactor),
    force: forceField.map(f => ({ ...f, field: Math.round(f.field * forceFactor) })),
    space: space.map(s => ({
      ...s,
      coords: {
        x: s.coords.x * spaceFactor,
        y: s.coords.y * spaceFactor,
        z: s.coords.z * spaceFactor
      }
    }))
  };
};
const universeDistance = (u1, u2) => {
  return Math.abs(u1.energy - u2.energy) +
         Math.abs(u1.force[0].field - u2.force[0].field) +
         Math.abs(u1.space[0].coords.x - u2.space[0].coords.x);
};

const calculateForce = (cluster) => {
  return cluster.map(c => {
    const attraction = c.score / 100;        // yakınlık → çekim
    const repulsion = (100 - c.score) / 100; // uzaklık → itme
    const field = Math.round((attraction - repulsion) * 100);

    return {
      root: c.root,
      score: c.score,
      attraction,
      repulsion,
      field
    };
  });
};
const forceColor = (field) => {
  if (field > 40) return "rgba(255, 0, 0, 0.8)";     // güçlü çekim
  if (field > 10) return "rgba(255, 120, 0, 0.7)";   // hafif çekim
  if (field > -10) return "rgba(255, 200, 0, 0.6)";  // nötr alan
  if (field > -40) return "rgba(0, 150, 255, 0.6)";  // hafif itme
  return "rgba(0, 80, 160, 0.6)";                    // güçlü itme
};
const universe1 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 1);
const universe2 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 2);
const universe3 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 3);

const multiverse = [universe1, universe2, universe3];
const IconSingularity = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="12" cy="12" r="10" stroke="#ccc" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="#ccc"/>
  </svg>
);

const energyColor = (score) => {
  if (score > 85) return "rgba(255, 0, 120, 0.85)";     // mor-kırmızı (yüksek enerji)
  if (score > 70) return "rgba(255, 80, 0, 0.75)";      // turuncu-kırmızı
  if (score > 55) return "rgba(255, 200, 0, 0.65)";     // sarı
  if (score > 40) return "rgba(0, 200, 255, 0.55)";     // mavi-sıcak
  return "rgba(0, 80, 160, 0.45)";                      // soğuk mavi
};
onClick={() => {
  const rootMatch = matchRoot(s);
  const cluster = buildSemanticCluster(rootMatch);
  const density = calculateRootDensity(rootMatch, symbolList);
  const energy = calculateEnergy(rootMatch, cluster, density);

  const computed = { 
    ...s,
    semanticScore: calculateSemanticScore(s),
    rootMatch,
    cluster,
    density,
    energy
  };
const forceField = calculateForce(cluster);
const universeEnergy = calculateUniverseEnergy(energy, forceField, space);
singularity

  setSelectedSymbol(computed);
  setActiveTab("detail");
}}
forceField
universeEnergy
singularity: "Tekillik"

const layerTransitions = [
  { from: "Proto", to: "Orta", type: "genişleme" },
  { from: "Orta", to: "Geç", type: "yoğunlaşma" },
  { from: "Geç", to: "Sembol", type: "somutlaşma" },
  { from: "Sembol", to: "Atlas", type: "yerelleşme" },
  { from: "Atlas", to: "Akış", type: "hareket" },
  { from: "Akış", to: "Zaman", type: "süreklilik" }
];

const timelineStages = [
  { stage: "Proto", color: "#00aaff" },
  { stage: "Orta", color: "#ffaa00" },
  { stage: "Geç", color: "#ff4444" },
  { stage: "Sembol", color: "#888" },
  { stage: "Atlas", color: "#0f0" },
  { stage: "Akış", color: "#fff" }
];
const IconMultiverse = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="6" cy="6" r="4" />
    <circle cx="18" cy="6" r="4" />
    <circle cx="12" cy="18" r="4" />
  </svg>
);

const flowLineStyle = {
  width: "2px",
  height: "40px",
  background: "linear-gradient(to bottom, #888, #fff)",
  animation: "flowAnim 1.2s linear infinite"
};
multiverse
multiverse: "Multiverse"

const calculateRootDensity = (rootMatch, symbolList) => {
  return symbolList.map(sym => {
    const core = extractSoundCore(sym.char);
    const phon = phoneticScore(core, rootMatch.sound);
    const lev = 100 - levenshtein(core, rootMatch.sound) * 25;
    const nameHit = sym.name.toLowerCase().includes(rootMatch.root.toLowerCase()) ? 30 : 0;

    const total = Math.round(
      phon * 0.4 +
      lev * 0.3 +
      nameHit * 0.3
    );

    return {
      ...sym,
      densityScore: total
    };
  });
};

const edgeWeight = (score) => {
  if (score > 80) return 4;
  if (score > 60) return 3;
  if (score > 40) return 2;
  return 1;
};
const arrowPulse = {
  animation: "pulseArrow 1.2s infinite",
  color: "#ccc",
  fontSize: "22px",
  margin: "10px 0"
};
const pulseArrowKeyframes = `
@keyframes pulseArrow {
  0% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(4px); }
  100% { opacity: 0.3; transform: translateY(0); }
}
`;

const edgeColor = (score) => {
  if (score > 80) return "#00ff88";
  if (score > 60) return "#00aaff";
  if (score > 40) return "#ffaa00";
  return "#ff4444";
};

const rootList = [
  { root: "A", sound: "a", meaning: "ilk, başlangıç, kaynak" },
  { root: "K", sound: "k", meaning: "kesme, sınır, kenar, ayırma" },
  { root: "O", sound: "o", meaning: "yuvarlak, bütün, çevre, döngü" },
  { root: "B", sound: "b", meaning: "birleşme, bağ, bütünleşme" },
  { root: "R", sound: "r", meaning: "akış, hareket, yön" },
  { root: "M", sound: "m", meaning: "madde, kütle, yoğunluk" },
  { root: "S", sound: "s", meaning: "ses, titreşim, iz" }
];
const meaningSimilarity = (m1, m2) => {
  const words1 = m1.split(/[, ]+/);
  const words2 = m2.split(/[, ]+/);

  let matches = 0;

  words1.forEach(w1 => {
    if (words2.includes(w1)) matches++;
  });

  return Math.round((matches / Math.max(words1.length, words2.length)) * 100);
};
const buildSemanticCluster = (matchedRoot) => {
  const cluster = [];

  rootList.forEach((r) => {
    if (r.root === matchedRoot.root) return;

    const phonScore = phoneticScore(r.sound, matchedRoot.sound);
    const meanScore = meaningSimilarity(r.meaning, matchedRoot.meaning);

    const total = Math.round(phonScore * 0.5 + meanScore * 0.5);

    if (total > 40) {
      cluster.push({
        root: r.root,
        meaning: r.meaning,
        score: total
      });
    }
  });

  return cluster.sort((a, b) => b.score - a.score);
};
onClick={() => {
  const rootMatch = matchRoot(s);
  const cluster = buildSemanticCluster(rootMatch);

  const computed = { 
    ...s, 
    semanticScore: calculateSemanticScore(s),
    rootMatch,
    cluster
  };

  setSelectedSymbol(computed);
  setActiveTab("detail");
}}

const levenshtein = (a, b) => {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
};
const rootList = [
  { root: "A", sound: "a", meaning: "ilk, başlangıç" },
  { root: "K", sound: "k", meaning: "kesme, sınır, kenar" },
  { root: "O", sound: "o", meaning: "yuvarlak, bütün, çevre" },
  { root: "B", sound: "b", meaning: "birleşme, bağ, bütünleşme" },
  { root: "R", sound: "r", meaning: "akış, hareket" }
];
const extractSoundCore = (symbolChar) => {
  return symbolChar
    .toLowerCase()
    .replace(/[^a-zğüşıöç]/g, "")
    .charAt(0);
};
const matchRoot = (symbol) => {
  const core = extractSoundCore(symbol.char);
  let bestMatch = null;
  let bestScore = -1;
const phoneticScore = (core, rootSound) => {
  if (!core || !rootSound) return 0;
  if (core === rootSound) return 100;

  const dist = levenshtein(core, rootSound);
  const maxLen = Math.max(core.length, rootSound.length);
  const ratio = 1 - dist / maxLen;

  return Math.max(0, Math.round(ratio * 100));
};

  rootList.forEach((r) => {
    let score = 0;

    if (r.sound === core) score += 70;
    if (symbol.name.toLowerCase().includes(r.root.toLowerCase())) score += 30;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = r;
    }
  });

  return {
    root: bestMatch.root,
    meaning: bestMatch.meaning,
    score: bestScore
  };
};

const [activeTab, setActiveTab] = useState("map");
const IconMap = () => (
  <svg
  width="100%"
  height="100%"
  style={{ position: "absolute", left: 0, top: 0 }}
><svg
  width="100%"
  height="100%"
  style={{ position: "absolute", left: 0, top: 0 }}
>const flowAnimKeyframes = `
@keyframes flowAnim {
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
}
`;

  <defs>
    <marker
      id="arrow"
      markerWidth="10"
      markerHeight="10"
      refX="6"
      refY="3"
      orient="auto"
      fill="#ccc"
    >
      <path d="M0,0 L0,6 L6,3 z" />
    </marker>
  </defs>

  {selectedSymbol.cluster.map((c, i) => {
    const angle = (i / selectedSymbol.cluster.length) * 2 * Math.PI;
    const radius = 90;

    const x = 150 + radius * Math.cos(angle);
    const y = 150 + radius * Math.sin(angle);

    return (
      <line
        key={i}
        x1="150"
        y1="150"
        x2={x}
        y2={y}
        stroke={edgeColor(c.score)}
        strokeWidth={edgeWeight(c.score)}
        strokeOpacity={0.8}
      />
    );
  })}
</svg>

);
const getFrequencyColor = (freq) => {
  if (freq < 30) return "#1b1b1b";
  if (freq < 70) return "#003366";
  return "#006b6b";
};

const getLayerColor = (layer) => {
  if (layer === "proto") return "#b30000";
  if (layer === "orta") return "#b3a300";
  if (layer === "geç") return "#00b34a";
  return "#333";
};

const getScoreColor = (score) => {
  if (score < 30) return "#b30000";
  if (score < 70) return "#b3a300";
  return "#00b34a";
};

const tabAnimations = `
@keyframes fadeTab {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
const fadeTabStyle = {
  animation: "fadeTab 0.4s ease"
};

const slideTabStyle = {
  animation: "slideTab 0.4s ease"
};

@keyframes slideTab {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
`;
<div style={{ marginTop: "20px" }}>
  <h4>Anlam Kümesi</h4>
  {selectedSymbol.cluster.map((c, i) => (
    <div key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
      <strong>{c.root}</strong> — {c.meaning} 
      <span style={{ color: "#0f0", marginLeft: "10px" }}>
        ({c.score})
      </span>
    </div>
  ))}
</div>
<div style={arrowPulse}>↓</div>
<div style={flowLineStyle}></div>

<div style={solMenuStyle}>const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const IconSymbol = (<div
  style={{<style>{tabAnimations}</style>
const fadeTabStyle = {
  animation: "fadeTab 0.4s ease"
};
const breadcrumbText = `
${selectedAtlas || "Atlas Yok"} / 
${selectedSymbol ? selectedSymbol.char : "Sembol Yok"} / 
${tabTitles[activeTab]}
`;
onClick={() => {
  const computed = { 
    ...s, 
    semanticScore: calculateSemanticScore(s),
    rootMatch: matchRoot(s)
  };

  setSelectedSymbol(computed);
  setActiveTab("detail");
}}
const rootList = [
  { root: "A", sound: "a", meaning: "ilk, başlangıç, kaynak" },
  { root: "O", sound: "o", meaning: "çevre, bütün, döngü" },
  { root: "E", sound: "e", meaning: "yön, hareket, çıkış" },
  { root: "I", sound: "i", meaning: "iz, işaret, belirti" },
  { root: "U", sound: "u", meaning: "yuvarlaklık, bütünlük" },
  { root: "K", sound: "k", meaning: "kesme, sınır, kenar" },
  { root: "G", sound: "g", meaning: "geçiş, dönüşüm" },
  { root: "B", sound: "b", meaning: "birleşme, bağ" },
  { root: "M", sound: "m", meaning: "madde, kütle, yoğunluk" },
  { root: "S", sound: "s", meaning: "ses, titreşim, iz" },

  { root: "T", sound: "t", meaning: "durma, sabitlik, temas" },
  { root: "D", sound: "d", meaning: "devinim, değişim" },
  { root: "R", sound: "r", meaning: "akış, yön, hareket" },
  { root: "L", sound: "l", meaning: "yayılma, genişleme" },
  { root: "N", sound: "n", meaning: "negasyon, yokluk, sınır" },
  { root: "P", sound: "p", meaning: "patlama, çıkış, basınç" },
  { root: "Ç", sound: "ç", meaning: "çıkma, ayrılma" },
  { root: "Ş", sound: "ş", meaning: "şekil, biçim, iz" },
  { root: "H", sound: "h", meaning: "hava, nefes, boşluk" },
  { root: "Y", sound: "y", meaning: "yönelme, eğilim" },

  { root: "F", sound: "f", meaning: "akışkanlık, hafiflik" },
  { root: "V", sound: "v", meaning: "titreşim, geçiş" },
  { root: "Z", sound: "z", meaning: "hız, keskinlik" },
  { root: "C", sound: "c", meaning: "can, canlılık" },
  { root: "J", sound: "j", meaning: "yumuşak akış, geçiş" },
  { root: "Ğ", sound: "ğ", meaning: "uzama, süreklilik" },
  { root: "Ö", sound: "ö", meaning: "özel alan, iç çevre" },
  { root: "Ü", sound: "ü", meaning: "üst, yükseklik" },
  { root: "W", sound: "w", meaning: "dalga, çift akış" },
  { root: "Q", sound: "q", meaning: "derinlik, iç basınç" }
];
const buildYKOSResponse = (symbol, rootMatch, cluster, density, energy, forceField, space, multiverse, singularity) => ({
  symbol: symbol.char,
  name: symbol.name,

  root: rootMatch,
  cluster,
  density,

  energy,
  forceField,
  space,

  multiverse,
  singularity,

  timestamp: Date.now()
});
const YKOS_API = (symbol) => {
  const rootMatch = matchRoot(symbol);
  const cluster = buildSemanticCluster(rootMatch);
  const density = calculateRootDensity(rootMatch, symbolList);
  const energy = calculateEnergy(rootMatch, cluster, density);
  const forceField = calculateForce(cluster);

  const space = cluster.map(c => ({
    ...c,
    coords: semanticCoordinates(c.score, energy, c.score - 50)
  }));

  const universe1 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 1);
  const universe2 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 2);
  const universe3 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 3);

  const multiverse = [universe1, universe2, universe3];
const result = YKOS_API({ char: "A", name: "Ana", sound: "a" });
console.log(result);

  const singularity = calculateSingularity(energy, multiverse);

  return buildYKOSResponse(
    symbol,
    rootMatch,
    cluster,
    density,
    energy,
    forceField,
    space,
    multiverse,
    singularity
  );
};

const slideTabStyle = {
  animation: "slideTab 0.4s ease"
};

    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
) => (
  <svg width="22" height="22">
    <circle cx="11" cy="11" r="9" stroke="#888" strokeWidth="2" fill="none" />
    <circle cx="11" cy="11" r="3" fill="#888" />
  </svg>
);
const fadeTabStyle = {
  animation: "fadeTab 0.4s ease"
};
const semanticCoordinates = (score, energy, field) => {
  return {
    x: score / 100,          // anlam yakınlığı
    y: energy / 100,         // enerji yoğunluğu
    z: field / 100           // kuvvet alanı
  };
};
const semanticDistance = (a, b) => {
  return Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2) +
    Math.pow(a.z - b.z, 2)
  );
};
const matchRoot = (symbol) => {
  let best = null;
  let bestScore = -1;

  rootList.forEach(r => {
    const score = r.sound === symbol.sound ? 100 : 100 - Math.abs(r.sound.charCodeAt(0) - symbol.sound.charCodeAt(0));
    if (score > bestScore) {
      bestScore = score;
      best = r;
    }
  });

  return { ...best, score: bestScore };
};
const buildSemanticCluster = (rootMatch) => {
  return rootList
    .map(r => ({
      root: r.root,
      meaning: r.meaning,
      score: 100 - Math.abs(r.root.charCodeAt(0) - rootMatch.root.charCodeAt(0))
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
};
const calculateRootDensity = (rootMatch, symbolList) => {
  return symbolList.map(s => ({
    char: s.char,
    name: s.name,
    densityScore: Math.round(
      100 - Math.abs(s.sound.charCodeAt(0) - rootMatch.sound.charCodeAt(0))
    )
  }));
};
const calculateEnergy = (rootMatch, cluster, density) => {
  const base = rootMatch.score || 50;
  const clusterEnergy = cluster.reduce((acc, c) => acc + c.score, 0) / cluster.length;
  const atlasEnergy = density.reduce((acc, d) => acc + d.densityScore, 0) / density.length;

  return Math.round(
    base * 0.3 +
    clusterEnergy * 0.3 +
    atlasEnergy * 0.4
  );
};
const calculateForce = (cluster) => {
  return cluster.map(c => {
    const attraction = c.score / 100;
    const repulsion = (100 - c.score) / 100;
    const field = Math.round((attraction - repulsion) * 100);

    return { root: c.root, score: c.score, attraction, repulsion, field };
  });
};
const semanticCoordinates = (score, energy, field) => ({
  x: score / 100,
  y: energy / 100,
  z: field / 100
});

const semanticDistance = (a, b) =>
  Math.sqrt(
    Math.pow(a.x - b.x, 2) +
    Math.pow(a.y - b.y, 2) +
    Math.pow(a.z - b.z, 2)
  );
const calculateUniverseEnergy = (energy, forceField, space) => {
  const forceAvg = forceField.reduce((acc, f) => acc + f.field, 0) / forceField.length;
  const spaceAvg = space.reduce((acc, s) => acc + semanticDistance(s.coords, {x:0,y:0,z:0}), 0) / space.length;

  return Math.round(
    energy * 0.4 +
    forceAvg * 0.3 +
    (100 - spaceAvg * 20) * 0.3
  );
};
const buildUniverseVariant = (rootMatch, cluster, density, energy, forceField, space, variant) => {
  const energyFactor = variant === 1 ? 1.0 : variant === 2 ? 0.8 : 1.2;
  const forceFactor  = variant === 1 ? 1.0 : variant === 2 ? 1.3 : 0.9;
  const spaceFactor  = variant === 1 ? 1.0 : variant === 2 ? 0.7 : 1.4;

  return {
    id: variant,
    energy: Math.round(energy * energyFactor),
    force: forceField.map(f => ({ ...f, field: Math.round(f.field * forceFactor) })),
    space: space.map(s => ({
      ...s,
      coords: {
        x: s.coords.x * spaceFactor,
        y: s.coords.y * spaceFactor,
        z: s.coords.z * spaceFactor
      }
    }))
  };
};
const calculateSingularity = (energy, multiverse) => {
  const universeEnergyAvg = multiverse.reduce((acc, u) => acc + u.energy, 0) / multiverse.length;
  const forceAvg = multiverse.reduce((acc, u) => acc + u.force[0].field, 0) / multiverse.length;
  const spaceAvg = multiverse.reduce((acc, u) => acc + u.space[0].coords.x, 0) / multiverse.length;

  return Math.round(
    energy * 0.4 +
    universeEnergyAvg * 0.3 +
    (100 - spaceAvg * 20) * 0.3
  );
};

const slideTabStyle = {
  animation: "slideTab 0.4s ease"
};

   <h2>YKOS Panel</h2>

   <div>Atlas seçimi...</div>
Atlas / Sembol / Modül
TR-Atlas / 𐰀 / Detay Paneli
<div style={breadcrumbBar}>
  {breadcrumbText}
</div>

<div style={{ 
  ...titleBar, 
  display: "flex", 
  alignItems: "center", 
  gap: "12px" 
}}>
  {tabIcons[activeTab]}
  {tabTitles[activeTab]}
</div>


<style>{tabAnimations}</style>
const breadcrumbBar = {
  fontSize: "14px",
  color: "#888",
  marginBottom: "15px",
  paddingBottom: "8px",
  borderBottom: "1px solid #222",
  letterSpacing: "0.4px"
};
<li>Anlam Kümesi:</li>
<ul>
  {selectedSymbol.cluster.map((c, i) => (
    <li key={i}>{c.root} → {c.meaning} ({c.score})</li>
  ))}
</ul>
<div style={{ marginTop: "15px" }}>
  <strong>Anlam Kümesi:</strong>
  {selectedSymbol.cluster.slice(0, 3).map((c, i) => (
    <div key={i}>
      {c.root} — {c.meaning} ({c.score})
    </div>
  ))}
</div>
const space = selectedSymbol.cluster.map(c => {
  const coords = semanticCoordinates(c.score, selectedSymbol.energy, c.score - 50);
  return { ...c, coords };
});
space

      <h4>Modüller</h4>
<ul style={{ listStyle: "none", padding: 0, marginTop: "10px", lineHeight: "2.2" }}>
  <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => setActiveTab("map")}>
    <IconMap /> Sembol Haritası
  </li>
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const breadcrumbBar = {
  fontSize: "14px",
  color: "#888",
  marginBottom: "15px",
  paddingBottom: "8px",
  borderBottom: "1px solid #222",
  letterSpacing: "0.4px"
};

  <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => setActiveTab("detail")}>
    <IconDetail /> Detay Paneli
  </li>

  <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => setActiveTab("chain")}>
    <IconChain /> Semantik Zincir
  </li>
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const breadcrumbBar = {
  fontSize: "14px",
  color: "#888",
  marginBottom: "15px",
  paddingBottom: "8px",
  borderBottom: "1px solid #222",
  letterSpacing: "0.4px"
};
const IconMapBig = () => (
  <svg width="24" height="24" fill="#ccc">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const IconDetailBig = () => (
  <svg width="24" height="24" fill="#ccc">
    <rect x="4" y="4" width="16" height="16" rx="3" />
  </svg>
);

const IconChainBig = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="6" cy="12" r="4" />
    <circle cx="18" cy="12" r="4" />
    <rect x="8" y="11" width="8" height="2" />
  </svg>
);

const IconLayerBig = () => (
  <svg width="24" height="24" fill="none" stroke="#ccc" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const IconGraphBig = () => (
  <svg width="24" height="24" fill="none" stroke="#ccc" strokeWidth="2">
    <polyline points="3,18 8,12 13,14 20,6" />
  </svg>
);
const calculateEnergy = (rootMatch, cluster, density) => {
  const base = rootMatch.score || 50;

  const clusterEnergy = cluster.reduce((acc, c) => acc + c.score, 0) / cluster.length;

  const atlasEnergy = density.reduce((acc, d) => acc + d.densityScore, 0) / density.length;

  const total = Math.round(
    base * 0.3 +
    clusterEnergy * 0.3 +
    atlasEnergy * 0.4
  );

  return total;
};
const IconForce = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="12" cy="12" r="10" stroke="#ccc" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4" fill="#ccc"/>
  </svg>
);

const IconSummaryBig = () => (
  <svg width="24" height="24" fill="#ccc">
    <rect x="4" y="5" width="16" height="3" />
    <rect x="4" y="11" width="16" height="3" />
    <rect x="4" y="17" width="16" height="3" />
  </svg>
);
const tabIcons = {
  map: <IconMapBig />,
  detail: <IconDetailBig />,
  chain: <IconChainBig />,
  layer: <IconLayerBig />,
  graph: <IconGraphBig />,
  summary: <IconSummaryBig />
};

  <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => setActiveTab("layer")}>
    <IconLayer /> Kültürel Katman
  </li>
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const breadcrumbBar = {
  fontSize: "14px",
  color: "#888",
  marginBottom: "15px",
  paddingBottom: "8px",
  borderBottom: "1px solid #222",
  letterSpacing: "0.4px"
};

  <li style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      onClick={() => setActiveTab("graph")}>
    <IconGraph /> Bağlantı Grafiği
  </li>
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};
const breadcrumbBar = {
  fontSize: "14px",
  color: "#888",
  marginBottom: "15px",
  paddingBottom: "8px",
  borderBottom: "1px solid #222",
  letterSpacing: "0.4px"
};
<div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
  <IconSymbol />
</div>

<div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
<div style={{ fontSize: "13px", color: "#ccc" }}>{s.name}</div>

<div
  style={{
    fontSize: "12px",
    color: getScoreColor(s.semanticScore),
    marginBottom: "8px",
    fontWeight: "600"
  }}
>
  Skor: {s.semanticScore}
</div>

<div
  style={{
    padding: "20px",
    background: getFrequencyColor(s.frequency),
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
    borderLeft: `6px solid ${getLayerColor(s.layer)}`
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>

      <ul>
         <li><IconMap /> Sembol Haritası</li>
         <li><IconDetail /> Detay Paneli</li>
         <li><IconChain /> Semantik Zincir</li>
         <li><IconLayer /> Kültürel Katman</li>
         <li><IconGraph /> Bağlantı Grafiği</li>
         <li><IconSummary /> Özet Kartı</li>
      </ul>
   </div>
</div>
const titleBar = {
  fontSize: "26px",
  fontWeight: "600",
  marginBottom: "25px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  color: "#fff",
  letterSpacing: "0.5px"
};

  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <IconChain /> Semantik Zincir
  </li>
  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <IconLayer /> Kültürel Katman
  </li>
  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <IconGraph /> Bağlantı Grafiği
  </li>
  <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <IconSummary /> Özet Kartı
  </li>
</ul>
const tabTitles = {
  map: <div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
"Sembol Haritası",
  detail: "Detay Paneli",
  chain: "Semantik Zincir",
  layer: "Kültürel Katman Haritası",
  graph: "Bağlantı Grafiği",
  summary: "Semantik Özet Kartı"
};

const IconDetail = () => (
  <svg width="18" height="18" fill="#bbb">
    <rect x="3" y="3" width="12" height="12" rx="2" />
  </svg>
);
const tabTitles = {
  map: <div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
"Sembol Haritası",
  detail: "Detay Paneli",
  chain: "Semantik Zincir",
  layer: "Kültürel Katman Haritası",
  graph: "Bağlantı Grafiği",
  summary: "Semantik Özet Kartı"
};

const IconChain = () => (
  <svg width="18" height="18" fill="#bbb">
    <circle cx="4" cy="9" r="3" />
    <circle cx="14" cy="9" r="3" />
    <rect x="6" y="8" width="6" height="2" />
  </svg>
);
const tabTitles = {
  map:<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
 "Sembol Haritası",
  detail: "Detay Paneli",
  chain: "Semantik Zincir",
  layer: "Kültürel Katman Haritası",
  graph: "Bağlantı Grafiği",
  summary: "Semantik Özet Kartı"
};

const IconLayer = () => (
  <svg width="18" height="18" fill="#bbb">
    <circle cx="9" cy="9" r="7" stroke="#bbb" strokeWidth="2" fill="none" />
  </svg>
);
const tabTitles = {
  map:<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
 "Sembol Haritası",
  detail: "Detay Paneli",
  chain: "Semantik Zincir",
  layer: "Kültürel Katman Haritası",
  graph: "Bağlantı Grafiği",
  summary: "Semantik Özet Kartı"
};

const IconGraph = () => (
  <svg width="18" height="18" fill="#bbb">
    <polyline points="2,14 6,10 10,12 14,6" stroke="#bbb" strokeWidth="2" fill="none" />
  </svg>
);
const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
const slideIn = {
  animation: "slideIn 0.5s ease"
};

const globalAnimations = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
`;
const tabTitles = {
  map:<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
  onClick={() => {
    const computed = { ...s, semanticScore: calculateSemanticScore(s) };
    setSelectedSymbol(computed);
    setActiveTab("detail");
  }}
>
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}>
    <IconSymbol />
  </div>
  <div style={{ fontSize: "26px", marginBottom: "5px" }}>{s.char}</div>
  <div style={{ fontSize: "13px", color: "#aaa" }}>{s.name}</div>
</div>
 "Sembol Haritası",
  detail: "Detay Paneli",
  chain: "Semantik Zincir",
  layer: "Kültürel Katman Haritası",
  graph: "Bağlantı Grafiği",
  summary: "Semantik Özet Kartı"
};

const IconSummary = () => (
  <svg width="18" height="18" fill="#bbb">
    <rect x="3" y="3" width="12" height="3" />
    <rect x="3" y="8" width="12" height="3" />
    <rect x="3" y="13" width="12" height="3" />
  </svg>
);
{function calculateSemanticScore(symbol) {
  let score = 0;

  // kök uzunluğu
  if (symbol.root) {
    score += symbol.root.length * 10;
  }

  // anlam var mı
  if (symbol.meaning) {
    score += 20;
  }

  // frekans etkisi
  if (symbol.frequency) {
    score += symbol.frequency * 30;
  }

  // kültürel katman etkisi
  if (symbol.layer) {
    score += 15;
  }

  // eşleşme sayısı
  if (symbol.matches) {
    score += symbol.matches.length * 5;
  }
const fadeIn = {
  animation: "fadeIn 0.6s ease"
};

const globalAnimations = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
<style>{globalAnimations}</style>
const tabAnimations = `
@keyframes fadeTab {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideTab {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
`;

  return Math.round(score);
}

  "name": "Göktürk",
  "symbols": [
    {
      "id": 1,
      "char": "𐰀",
      "name": "A",
      "meaning": "Başlangıç",
      "root": "a-",
      "frequency": 0.82,
      "layer": "Proto-Türk",
      "matches": ["Anadolu A", "Orhun A", "YKOS-A1"],
      "chain": [
        { "step": "damga", "value": "𐰀" },
        { "step": "kök", "value": "a-" },
        { "step": "anlam", "value": "Başlangıç" }
      ],
      "semanticScore": null
    }
  ]
}
onClick={() => {
  const computed = { ...s, semanticScore: calculateSemanticScore(s) };
  setSelectedSymbol(computed);
}}
<p><strong>Semantik Skor:</strong> {selectedSymbol.semanticScore}</p>
{
  "graph": [
    { "from": "𐰀", "to": "a-", "type": "kök" },
    { "from": "a-", "to": "Başlangıç", "type": "anlam" },
    { "from": "Başlangıç", "to": "Proto-Türk", "type": "kültür" },
    { "from": "Proto-Türk", "to": "Skor", "type": "hesap" }
  ]
}
{selectedSymbol.graph && (
  <div
    style={{
      marginTop: "30px",
      padding: "20px",
      background: "#141414",
      borderRadius: "8px",
      border: "1px solid #333"
    }}
  >
    <h3>Semantik Bağlantı Grafiği</h3>
<div style={panelBox}>
  <h3>Atlas Seçimi</h3>
  ...
</div>
<div
  style={{
    width: "260px",
    background: "#111",
    borderRight: "1px solid #222",
    padding: "30px",
    boxSizing: "border-box",
    ...slideIn
  }}
>
<div
  style={{
    width: "260px",
    background: "#111",
    borderRight: "1px solid #222",
    padding: "30px",
    boxSizing: "border-box",
    ...slideIn
  }}
>
<div style={statusBar}><div style={layout}>
   <div style={solMenu}>...</div>
   <div style={sagPanel}>...</div>
</div>
<div style={sagPanel}>
   <div style={breadcrumbBar}>Atlas / Sembol / Modül</div>
   <div style={titleBar}>Modül Başlığı</div>
   {sekme içerikleri}
</div>

<div style={statusBar}>...</div>

  <div>
    Atlas: {selectedAtlas ? selectedAtlas : "Seçilmedi"}
  </div>

  <div>
    Sembol: {selectedSymbol ? selectedSymbol.char : "Yok"}
  </div>

  <div>
    Motor: {selectedSymbol ? "Hesaplandı" : "Beklemede"}
  </div>
</div>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "15px",
    marginTop: "25px"
  }}
>const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.2s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#1b1b1b")}
>
<div
  style={{
    width: "260px",
    background: "#111",
    borderRight: "1px solid #222",
    padding: "30px",
    boxSizing: "border-box",
    ...slideIn
  }}
>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {selectedSymbol.graph.map((g, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#1f1f1f",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444"
          }}
        >
          <div style={{ fontWeight: "bold", color: "#eee" }}>{g.from}</div>
          <div style={{ color: "#888" }}>→</div>
          <div style={{ fontWeight: "bold", color: "#eee" }}>{g.to}</div>
          <div style={{ marginLeft: "auto", color: "#aaa" }}>
            ({g.type})
          </div>
        </div>
      ))}
    </div>
  </div>
)}
{selectedSymbol && (
  <div
    style={{
      marginTop: "30px",
      padding: "25px",
      background: "#101010",
      borderRadius: "10px",
      border: "1px solid #333"
    }}
  >
    <h3>Semantik Özet Kartı</h3>

    <div style={{ marginTop: "15px", lineHeight: "1.6" }}>
      <p><strong>Damga:</strong> {selectedSymbol.char}</p>
      <p><strong>Kök:</strong> {selectedSymbol.root}</p>
      <p><strong>Anlam:</strong> {selectedSymbol.meaning}</p>
      <p><strong>Frekans:</strong> {selectedSymbol.frequency}</p>
      <p><strong>Kültürel Katman:</strong> {selectedSymbol.layer}</p>
      <p><strong>Semantik Skor:</strong> {selectedSymbol.semanticScore}</p>
    </div>
<div style={panelBox}>
  <h3>Atlas Seçimi</h3>
  ...
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "15px",
    marginTop: "25px"
  }}
>
<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.2s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#1b1b1b")}
>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

    <div style={{ marginTop: "20px" }}>
      <strong>Zincir Özeti:</strong>
      <ul>
        {selectedSymbol.chain &&
          selectedSymbol.chain.map((c, i) => (
            <li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>
const statusBar = {
  height: "40px",
  background: "#111",
  borderTop: "1px solid #222",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  fontSize: "13px",
  color: "#aaa",
  letterSpacing: "0.3px"
};

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>
<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

<li<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>
<li
  style={{
    ...tabItem,
    ...(activeTab === "map" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("map")}
>
  <IconMap /> Sembol Haritası
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "detail" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("detail")}
>
  <IconDetail /> Detay Paneli
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "chain" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("chain")}
>
  <IconChain /> Semantik Zincir
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>



<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>
>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>


<li
  style={{
    ...tabItem,
    ...(activeTab === "layer" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("layer")}
>
  <IconLayer /> Kültürel Katman
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "graph" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("graph")}
>
  <IconGraph /> Bağlantı Grafiği
</li>

<li
  style={{
    ...tabItem,
    ...(activeTab === "summary" ? activeTabItem : {})
  }}
  onClick={() => setActiveTab("summary")}
>
  <IconSummary /> Özet Kartı
</li>

          ))}
      </ul>
    </div>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

<div
  style={{
    padding: "40px",
    background: "#0d0d0d",
    color: "#e6e6e6",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.3px"
  }}
>const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};

const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
<div style={panelBox}>
  <h3>Atlas Seçimi</h3>
  ...
</div>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.2s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#222")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#1b1b1b")}
>const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

<div
  style={{
    padding: "20px",
    background: "#1b1b1b",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    cursor: "pointer",
    transition: "0.25s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.background = "#222";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.background = "#1b1b1b";
  }}
>
const tabItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "8px 5px",
  borderRadius: "6px",
  transition: "0.2s"
};

const activeTabItem = {
  background: "#1f1f1f",
  color: "#fff",
  border: "1px solid #444"
};

    <div style={{ marginTop: "20px" }}>
      <strong>Grafik Özeti:</strong>
      <ul>
        {selectedSymbol.graph &&
          selectedSymbol.graph.map((g, i) => (
            <li key={i}>{g.from} → {g.to} ({g.type})</li>
          ))}
      </ul>
    </div>
  </div>
)}const panelBox = {
  marginTop: "30px",
  padding: "25px",
  background: "#141414",
  borderRadius: "12px",
  border: "1px solid #2a2a2a",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)"
};
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "15px",
    marginTop: "25px"
  }}
>
<h3 style={{ marginBottom: "15px", fontSize: "22px", fontWeight: "600" }}>
{activeTab === "map" && (
  <div style={panelBox}>
    <h3>Sembol Haritası</h3>
    {/* mevcut harita kodun */}
  </div>
)}
{activeTab === "detail" && selectedSymbol && (
  <div style={panelBox}>
    <h3>Detay Paneli</h3>
    {/* mevcut detay kodun */}
  </div>
)}
{activeTab === "chain" && selectedSymbol && (
  <div style={panelBox}>
    <h3>Semantik Zincir</h3>
    {/* zincir kodun */}
  </div>
)}
{activeTab === "layer" && (
  <div style={panelBox}>
    <h3>Kültürel Katman Haritası</h3>
    {/* katman kodun */}
  </div>
)}
{activeTab === "graph" && selectedSymbol && (
  <div style={panelBox}>
    <h3>Bağlantı Grafiği</h3>
    {/* grafik kodun */}
  </div>
)}
{activeTab === "summary" && selectedSymbol && (
  <div style={panelBox}>
    <h3>Semantik Özet Kartı</h3>
    {/* özet kartı kodun */}
  </div>
)}
{activeTab === "map" && (
  <div style={{ ...panelBox, ...fadeTabStyle }}>
    <h3>Sembol Haritası</h3>
    {/* harita kodun */}
  </div>
)}
{activeTab === "chain" && selectedSymbol && (
  <div style={{ ...panelBox, ...fadeTabStyle }}>
    <h3>Semantik Zincir</h3>
    {/* zincir kodun */}
  </div>
)}
{activeTab === "chain" && selectedSymbol && (
  <div style={{ ...panelBox, ...fadeTabStyle }}>
    <h3>Semantik Zincir</h3>
    {/* zincir kodun */}
  </div>
)}
{activeTab === "layer" && (
  <div style={{ ...panelBox, ...slideTabStyle }}>
    <h3>Kültürel Katman Haritası</h3>
    {/* katman kodun */}
  </div>
)}
{activeTab === "graph" && selectedSymbol && (
  <div style={{ ...panelBox, ...fadeTabStyle }}>
    <h3>Bağlantı Grafiği</h3>
    {/* grafik kodun */}
  </div>
)}
{activeTab === "summary" && selectedSymbol && (
  <div style={{ ...panelBox, ...slideTabStyle }}>
    <h3>Semantik Özet Kartı</h3>
    {/* özet kartı kodun */}
  </div>
)}
selectedSymbol.rootMatch.root
selectedSymbol.rootMatch.meaning
selectedSymbol.rootMatch.score
<div style={{ marginTop: "15px", fontSize: "15px" }}>
  <strong>Kök:</strong> {selectedSymbol.rootMatch.root}  
  <br />
  <strong>Anlam:</strong> {selectedSymbol.rootMatch.meaning}
  <br />
  <strong>Eşleşme Skoru:</strong> {selectedSymbol.rootMatch.score}
</div>
<li>Kök Eşleşmesi → {selectedSymbol.rootMatch.root}</li>
<li>Kök Anlamı → {selectedSymbol.rootMatch.meaning}</li>
<li>Kök Skoru → {selectedSymbol.rootMatch.score}</li>
<div>
  <strong>Kök:</strong> {selectedSymbol.rootMatch.root}
</div>
<div>
  <strong>Kök Anlamı:</strong> {selectedSymbol.rootMatch.meaning}
</div>
<div>
  <strong>Kök Skoru:</strong> {selectedSymbol.rootMatch.score}
</div>
const matchRoot = (symbol) => {
  const core = extractSoundCore(symbol.char);
  let bestMatch = null;
  let bestScore = -1;

  rootList.forEach((r) => {
    let score = 0;

    // Fonetik yakınlık (0–100)
    const phonScore = phoneticScore(core, r.sound);
    score += phonScore * 0.7; // %70 ağırlık

    // İsim içi eşleşme
    if (symbol.name.toLowerCase().includes(r.root.toLowerCase())) {
      score += 30; // %30 ek
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = r;
    }
  });

  return {
    root: bestMatch.root,
    meaning: bestMatch.meaning,
    score: Math.round(bestScore)
  };
};
{activeTab === "graph" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Harita (Graph)</h3>

    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "260px"
      }}
    >
      {/* Merkez: seçili kök */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "12px 18px",
          borderRadius: "999px",
          background: "#222",
          border: "1px solid #555",
          color: "#fff",
          fontSize: "14px"
        }}
      >
        {selectedSymbol.rootMatch.root} — {selectedSymbol.rootMatch.meaning}
      </div>

      {/* Çevrede: cluster kökleri */}
      {selectedSymbol.cluster.map((c, i) => {
        const angle = (i / selectedSymbol.cluster.length) * 2 * Math.PI;
        const radius = 90;

        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#111",
              border: "1px solid #444",
              color: "#ccc",
              fontSize: "12px"
            }}
          >
            {c.root} ({c.score})
          </div>
        );
      })}
    </div>
  </div>
)}
{activeTab === "graph" && selectedSymbol && (
  <div style={{ ...panelBox, position: "relative" }}>
    <h3>Semantik Harita (Graph)</h3>

    <div
      style={{
        marginTop: "20px",
        position: "relative",
        height: "300px"
      }}
    >
      {/* Çizgi bağlantıları */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        {selectedSymbol.cluster.map((c, i) => {
          const angle = (i / selectedSymbol.cluster.length) * 2 * Math.PI;
          const radius = 90;

          const x = 150 + radius * Math.cos(angle);
          const y = 150 + radius * Math.sin(angle);

          return (
            <line
              key={i}
              x1="150"
              y1="150"
              x2={x}
              y2={y}
              stroke="#333"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      {/* Merkez kök */}
      <div
        style={{
          position: "absolute",
          left: "150px",
          top: "150px",
          transform: "translate(-50%, -50%)",
          padding: "12px 18px",
          borderRadius: "999px",
          background: "#222",
          border: "1px solid #555",
          color: "#fff",
          fontSize: "14px"
        }}
      >
        {selectedSymbol.rootMatch.root}
      </div>

      {/* Komşu kökler */}
      {selectedSymbol.cluster.map((c, i) => {
        const angle = (i / selectedSymbol.cluster.length) * 2 * Math.PI;
        const radius = 90;

        const x = 150 + radius * Math.cos(angle);
        const y = 150 + radius * Math.sin(angle);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#111",
              border: "1px solid #444",
              color: "#ccc",
              fontSize: "12px"
            }}
          >
            {c.root} ({c.score})
          </div>
        );
      })}
    </div>
  </div>
)}
border: `2px solid ${edgeColor(c.score)}`
<line
  key={i}
  x1="150"
  y1="150"
  x2={x}
  y2={y}
  stroke={edgeColor(c.score)}
  strokeWidth={edgeWeight(c.score)}
  strokeOpacity={0.8}
  markerEnd="url(#arrow)"
/>
Ana Kök → Komşu Kök
border: `2px solid ${edgeColor(c.score)}`
onClick={() => {
  const rootMatch = matchRoot(s);
  const cluster = buildSemanticCluster(rootMatch);
  const density = calculateRootDensity(rootMatch, symbolList);
background: densityColor(sym.densityScore)

  const computed = { 
    ...s,
    semanticScore: calculateSemanticScore(s),
    rootMatch,
    cluster,
    density
  };

  setSelectedSymbol(computed);
  setActiveTab("detail");
}}
const densityColor = (score) => {
  if (score > 80) return "#00ff88";
  if (score > 60) return "#00aaff";
  if (score > 40) return "#ffaa00";
  return "#222";
};
atlasDensity: "Atlas Yoğunluk Haritası"
const IconAtlasDensity = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="5" fill="#666" />
  </svg>
);
atlasDensity: <IconAtlasDensity />
{activeTab === "atlasDensity" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Atlas Kök Yoğunluk Haritası</h3>

    {selectedSymbol.density.map((d, i) => (
      <div
        key={i}
        style={{
          padding: "10px",
          marginBottom: "8px",
          background: densityColor(d.densityScore),
          borderRadius: "6px",
          color: "#fff"
        }}
      >
        {d.char} — {d.name} ({d.densityScore})
      </div>
    ))}
  </div>
)}
flow: "Semantik Akış Diyagramı"
const IconFlow = () => (
  <svg width="24" height="24" fill="#ccc">
    <path d="M4 12 L10 12 L14 6 L20 6" stroke="#ccc" strokeWidth="2" fill="none"/>
    <path d="M14 18 L20 18" stroke="#ccc" strokeWidth="2" fill="none"/>
  </svg>
);
flow: <IconFlow />
{activeTab === "flow" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Akış Diyagramı</h3>

    <div style={{ marginTop: "20px", position: "relative" }}>
      
      {/* 1) KÖK */}
      <div style={{
        padding: "12px 18px",
        background: "#222",
        borderRadius: "8px",
        border: "1px solid #555",
        color: "#fff",
        width: "fit-content",
        marginBottom: "20px"
      }}>
        Kök: {selectedSymbol.rootMatch.root}
      </div>

      {/* Ok */}
      <div style={{ marginLeft: "20px", marginBottom: "20px", color: "#888" }}>
        ↓
      </div>

      {/* 2) ANLAM KÜMESİ */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>Anlam Kümesi:</strong>
        {selectedSymbol.cluster.map((c, i) => (
          <div key={i}>
            {c.root} — {c.meaning} ({c.score})
          </div>
        ))}
      </div>

      {/* Ok */}
      <div style={{ marginLeft: "20px", marginBottom: "20px", color: "#888" }}>
        ↓
      </div>

      {/* 3) İLGİLİ SEMBOLLER */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>İlgili Semboller:</strong>
        {selectedSymbol.density
          .filter(d => d.densityScore > 40)
          .slice(0, 6)
          .map((d, i) => (
            <div key={i}>
              {d.char} — {d.name} ({d.densityScore})
            </div>
          ))}
      </div>

      {/* Ok */}
      <div style={{ marginLeft: "20px", marginBottom: "20px", color: "#888" }}>
        ↓
      </div>

      {/* 4) ATLAS YOĞUNLUĞU */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc"
      }}>
        <strong>Atlas Yoğunluk Haritası:</strong>
        {selectedSymbol.density.map((d, i) => (
          <div key={i} style={{
            marginTop: "6px",
            background: densityColor(d.densityScore),
            padding: "6px",
            borderRadius: "6px",
            color: "#fff"
          }}>
            {d.char} — {d.name} ({d.densityScore})
          </div>
        ))}
      </div>

    </div>
  </div>
)}
const rootList = [
  // Proto Kökler
  { root: "A", sound: "a", meaning: "ilk, başlangıç, kaynak" },
  { root: "O", sound: "o", meaning: "çevre, bütün, döngü" },
  { root: "E", sound: "e", meaning: "yön, hareket, çıkış" },
  { root: "I", sound: "i", meaning: "iz, işaret, belirti" },
  { root: "U", sound: "u", meaning: "yuvarlaklık, bütünlük" },
  { root: "K", sound: "k", meaning: "kesme, sınır, kenar" },
  { root: "G", sound: "g", meaning: "geçiş, dönüşüm" },
  { root: "B", sound: "b", meaning: "birleşme, bağ" },
  { root: "M", sound: "m", meaning: "madde, kütle, yoğunluk" },
  { root: "S", sound: "s", meaning: "ses, titreşim, iz" },

  // Orta Kökler
  { root: "T", sound: "t", meaning: "durma, sabitlik, temas" },
  { root: "D", sound: "d", meaning: "devinim, değişim" },
  { root: "R", sound: "r", meaning: "akış, yön, hareket" },
  { root: "L", sound: "l", meaning: "yayılma, genişleme" },
  { root: "N", sound: "n", meaning: "negasyon, yokluk, sınır" },
  { root: "P", sound: "p", meaning: "patlama, çıkış, basınç" },
  { root: "Ç", sound: "ç", meaning: "çıkma, ayrılma" },
  { root: "Ş", sound: "ş", meaning: "şekil, biçim, iz" },
  { root: "H", sound: "h", meaning: "hava, nefes, boşluk" },
  { root: "Y", sound: "y", meaning: "yönelme, eğilim" },

  // Geç Kökler
  { root: "F", sound: "f", meaning: "akışkanlık, hafiflik" },
  { root: "V", sound: "v", meaning: "titreşim, geçiş" },
  { root: "Z", sound: "z", meaning: "hız, keskinlik" },
  { root: "C", sound: "c", meaning: "can, canlılık" },
  { root: "J", sound: "j", meaning: "yumuşak akış, geçiş" },
  { root: "Ğ", sound: "ğ", meaning: "uzama, süreklilik" },
  { root: "Ö", sound: "ö", meaning: "özel alan, iç çevre" },
  { root: "Ü", sound: "ü", meaning: "üst, yükseklik" },
  { root: "W", sound: "w", meaning: "dalga, çift akış" },
  { root: "Q", sound: "q", meaning: "derinlik, iç basınç" }
];
{activeTab === "flow" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Akış Diyagramı (Animasyonlu)</h3>

    <style>
      {flowAnimKeyframes}
      {pulseArrowKeyframes}
    </style>

    <div style={{ marginTop: "20px", position: "relative" }}>
      
      {/* 1) KÖK */}
      <div style={{
        padding: "12px 18px",
        background: "#222",
        borderRadius: "8px",
        border: "1px solid #555",
        color: "#fff",
        width: "fit-content",
        marginBottom: "20px"
      }}>
        Kök: {selectedSymbol.rootMatch.root}
      </div>

      <div style={arrowPulse}>↓</div>
      <div style={flowLineStyle}></div>

      {/* 2) ANLAM KÜMESİ */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>Anlam Kümesi:</strong>
        {selectedSymbol.cluster.map((c, i) => (
          <div key={i}>
            {c.root} — {c.meaning} ({c.score})
          </div>
        ))}
      </div>

      <div style={arrowPulse}>↓</div>
      <div style={flowLineStyle}></div>

      {/* 3) İLGİLİ SEMBOLLER */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>İlgili Semboller:</strong>
        {selectedSymbol.density
          .filter(d => d.densityScore > 40)
          .slice(0, 6)
          .map((d, i) => (
            <div key={i}>
              {d.char} — {d.name} ({d.densityScore})
            </div>
          ))}
      </div>

      <div style={arrowPulse}>↓</div>
      <div style={flowLineStyle}></div>

      {/* 4) ATLAS YOĞUNLUĞU */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc"
      }}>
        <strong>Atlas Yoğunluk Haritası:</strong>
        {selectedSymbol.density.map((d, i) => (
          <div key={i} style={{
            marginTop: "6px",
            background: heatColor(d.densityScore),
            padding: "6px",
            borderRadius: "6px",
            color: "#fff"
          }}>
            {d.char} — {d.name} ({d.densityScore})
          </div>
        ))}
      </div>

    </div>
  </div>
)}
const getRootStage = (root) => {
  const proto = ["A","O","E","I","U","K","G","B","M","S"];
  const orta  = ["T","D","R","L","N","P","Ç","Ş","H","Y"];
  const geç   = ["F","V","Z","C","J","Ğ","Ö","Ü","W","Q"];

  if (proto.includes(root)) return "Proto";
  if (orta.includes(root)) return "Orta";
  if (geç.includes(root)) return "Geç";
  return "Proto";
};
timeline: "Zaman Çizelgesi"
const IconTimeline = () => (
  <svg width="24" height="24" fill="#ccc">
    <rect x="4" y="10" width="16" height="4" />
    <circle cx="4" cy="12" r="3" />
    <circle cx="20" cy="12" r="3" />
  </svg>
);
{activeTab === "timeline" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Zaman Çizelgesi</h3>

    <div style={{ marginTop: "20px" }}>
      
      {/* 1) Proto / Orta / Geç */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>Kök Zaman Katmanı:</strong>
        <div style={{ marginTop: "8px" }}>
          {getRootStage(selectedSymbol.rootMatch.root)}
        </div>
      </div>

      {/* Zaman çizgisi */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        {timelineStages.map((t, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{
              width: "14px",
              height: "14px",
              background: t.color,
              borderRadius: "50%",
              margin: "0 auto"
            }}></div>
            <div style={{ marginTop: "6px", color: "#ccc", fontSize: "12px" }}>
              {t.stage}
            </div>
          </div>
        ))}
      </div>

      {/* 2) Anlam Kümesi */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>Anlam Kümesi (Zaman Etkisi):</strong>
        {selectedSymbol.cluster.map((c, i) => (
          <div key={i}>
            {c.root} — {c.meaning} ({getRootStage(c.root)})
          </div>
        ))}
      </div>

      {/* 3) Semboller */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc",
        marginBottom: "20px"
      }}>
        <strong>Semboller (Zaman Etkisi):</strong>
        {selectedSymbol.density
          .filter(d => d.densityScore > 40)
          .slice(0, 6)
          .map((d, i) => (
            <div key={i}>
              {d.char} — {d.name} (Atlas)
            </div>
          ))}
      </div>

      {/* 4) Akış */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc"
      }}>
        <strong>Akış Zamanı:</strong>
        <div style={{ marginTop: "8px" }}>
          Kök → Anlam → Sembol → Atlas → Akış
        </div>
      </div>

    </div>
  </div>
)}
const transitionAnim = `
@keyframes layerFlow {
  0% { opacity: 0.3; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(10px); }
  100% { opacity: 0.3; transform: translateX(0); }
}
`;
const transitionArrow = {
  animation: "layerFlow 1.4s infinite",
  fontSize: "22px",
  color: "#ccc",
  margin: "10px 0"
};
layer: "Katman Geçişleri"
const IconLayer = () => (
  <svg width="24" height="24" fill="#ccc">
    <rect x="4" y="6" width="16" height="3" />
    <rect x="4" y="11" width="16" height="3" />
    <rect x="4" y="16" width="16" height="3" />
  </svg>
);
{activeTab === "layer" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Katman Geçişleri</h3>

    <style>
      {transitionAnim}
    </style>

    <div style={{ marginTop: "20px" }}>
      
      {/* Kökün başlangıç katmanı */}
      <div style={{
        padding: "12px",
        background: "#222",
        borderRadius: "8px",
        border: "1px solid #555",
        color: "#fff",
        marginBottom: "20px"
      }}>
        <strong>Başlangıç Katmanı:</strong>
        <div style={{ marginTop: "8px" }}>
          {getRootStage(selectedSymbol.rootMatch.root)}
        </div>
      </div>

      {/* Geçiş zinciri */}
      {layerTransitions.map((t, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <div style={{
            padding: "10px",
            background: "#111",
            borderRadius: "6px",
            border: "1px solid #444",
            color: "#ccc"
          }}>
            {t.from} → {t.to}
            <div style={{ fontSize: "12px", marginTop: "6px", color: "#aaa" }}>
              Geçiş tipi: {t.type}
            </div>
          </div>

          <div style={transitionArrow}>→</div>
        </div>
      ))}

      {/* Son katman */}
      <div style={{
        padding: "12px",
        background: "#111",
        borderRadius: "8px",
        border: "1px solid #444",
        color: "#ccc"
      }}>
        <strong>Son Katman:</strong>
        <div style={{ marginTop: "8px" }}>
          Zaman
        </div>
      </div>

    </div>
  </div>
)}
energy: "Enerji Haritası"
const IconEnergy = () => (
  <svg width="24" height="24" fill="#ccc">
    <path d="M12 2 L6 14 L12 14 L8 22 L18 10 L12 10 Z" />
  </svg>
);
{activeTab === "energy" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Enerji Haritası</h3>

    <div style={{
      marginTop: "20px",
      padding: "12px",
      background: energyColor(selectedSymbol.energy),
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      marginBottom: "20px"
    }}>
      Toplam Enerji: {selectedSymbol.energy}
    </div>

    <strong>Kök Enerjisi:</strong>
    <div style={{
      marginTop: "8px",
      padding: "10px",
      background: energyColor(selectedSymbol.rootMatch.score),
      borderRadius: "6px",
      color: "#fff",
      marginBottom: "20px"
    }}>
      {selectedSymbol.rootMatch.root} — {selectedSymbol.rootMatch.score}
    </div>

    <strong>Anlam Kümesi Enerjisi:</strong>
    {selectedSymbol.cluster.map((c, i) => (
      <div key={i} style={{
        marginTop: "6px",
        padding: "8px",
        background: energyColor(c.score),
        borderRadius: "6px",
        color: "#fff"
      }}>
        {c.root} — {c.meaning} ({c.score})
      </div>
    ))}

    <strong style={{ marginTop: "20px", display: "block" }}>Atlas Enerjisi:</strong>
    {selectedSymbol.density.map((d, i) => (
      <div key={i} style={{
        marginTop: "6px",
        padding: "8px",
        background: energyColor(d.densityScore),
        borderRadius: "6px",
        color: "#fff"
      }}>
        {d.char} — {d.name} ({d.densityScore})
      </div>
    ))}

  </div>
)}
force: "Kuvvet Alanı"
{activeTab === "force" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Kuvvet Alanı</h3>

    {selectedSymbol.forceField.map((f, i) => (
      <div
        key={i}
        style={{
          padding: "10px",
          marginBottom: "8px",
          background: forceColor(f.field),
          borderRadius: "6px",
          color: "#fff"
        }}
      >
        {f.root} — Skor: {f.score}  
        <br />
        Çekim: {Math.round(f.attraction * 100)}  
        İtme: {Math.round(f.repulsion * 100)}  
        <br />
        Alan Gücü: {f.field}
      </div>
    ))}
  </div>
)}
space: "Uzay Haritası"
const IconSpace = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="12" cy="12" r="10" stroke="#ccc" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="#ccc"/>
  </svg>
);
{activeTab === "space" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Uzay Haritası</h3>

    {selectedSymbol.space.map((s, i) => (
      <div
        key={i}
        style={{
          padding: "10px",
          marginBottom: "8px",
          background: "#111",
          borderRadius: "6px",
          border: "1px solid #444",
          color: "#ccc"
        }}
      >
        <strong>{s.root}</strong>
        <br />
        x: {s.coords.x.toFixed(2)}  
        y: {s.coords.y.toFixed(2)}  
        z: {s.coords.z.toFixed(2)}
        <br />
        Mesafe (merkeze): {semanticDistance(s.coords, {x:0,y:0,z:0}).toFixed(2)}
      </div>
    ))}
  </div>
)}
universe: "Evren Haritası"
const IconUniverse = () => (
  <svg width="24" height="24" fill="#ccc">
    <circle cx="12" cy="12" r="10" stroke="#ccc" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="#ccc"/>
    <circle cx="6" cy="6" r="2" fill="#ccc"/>
    <circle cx="18" cy="6" r="2" fill="#ccc"/>
    <circle cx="6" cy="18" r="2" fill="#ccc"/>
    <circle cx="18" cy="18" r="2" fill="#ccc"/>
  </svg>
);
{activeTab === "universe" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Evren Haritası</h3>

    <div style={{
      marginTop: "20px",
      padding: "12px",
      background: energyColor(selectedSymbol.universeEnergy),
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      marginBottom: "20px"
    }}>
      Evren Enerjisi: {selectedSymbol.universeEnergy}
    </div>

    <strong>Evren Katmanları:</strong>
    {universeLayers.map((u, i) => (
      <div key={i} style={{
        marginTop: "6px",
        padding: "8px",
        background: u.color,
        borderRadius: "6px",
        color: "#000"
      }}>
        {u.name}
      </div>
    ))}

    <strong style={{ marginTop: "20px", display: "block" }}>Evren Bağlantıları:</strong>
    {selectedSymbol.space.map((s, i) => (
      <div key={i} style={{
        marginTop: "6px",
        padding: "8px",
        background: "#111",
        borderRadius: "6px",
        border: "1px solid #444",
        color: "#ccc"
      }}>
        {s.root} → Mesafe: {semanticDistance(s.coords, {x:0,y:0,z:0}).toFixed(2)}
      </div>
    ))}

  </div>
)}
{activeTab === "multiverse" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Çoklu Evren</h3>

    {selectedSymbol.multiverse.map((u, i) => (
      <div key={i} style={{
        padding: "12px",
        marginBottom: "12px",
        background: energyColor(u.energy),
        borderRadius: "8px",
        color: "#fff"
      }}>
        <strong>Evren {u.id}</strong>
        <br />
        Enerji: {u.energy}
        <br />
        Kuvvet: {u.force[0].field}
        <br />
        Uzay X: {u.space[0].coords.x.toFixed(2)}
      </div>
    ))}

    <strong>Evrenler Arası Mesafeler:</strong>
    <div style={{ marginTop: "10px", color: "#ccc" }}>
      1 ↔ 2 = {universeDistance(selectedSymbol.multiverse[0], selectedSymbol.multiverse[1])}
      <br />
      1 ↔ 3 = {universeDistance(selectedSymbol.multiverse[0], selectedSymbol.multiverse[2])}
      <br />
      2 ↔ 3 = {universeDistance(selectedSymbol.multiverse[1], selectedSymbol.multiverse[2])}
    </div>

  </div>
)}
{activeTab === "singularity" && selectedSymbol && (
  <div style={{ ...panelBox }}>
    <h3>Semantik Tekillik</h3>

    <div style={{
      marginTop: "20px",
      padding: "12px",
      background: energyColor(selectedSymbol.singularity),
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      marginBottom: "20px"
    }}>
      Tekillik Yoğunluğu: {selectedSymbol.singularity}
    </div>

    <strong>Evren Enerjisi Ortalaması:</strong>
    <div style={{ marginTop: "8px", color: "#ccc" }}>
      {Math.round(
        selectedSymbol.multiverse.reduce((acc, u) => acc + u.energy, 0) /
        selectedSymbol.multiverse.length
      )}
    </div>

    <strong style={{ marginTop: "20px", display: "block" }}>Tekillik Çöküşü:</strong>
    <div style={{
      marginTop: "8px",
      padding: "10px",
      background: "#111",
      borderRadius: "6px",
      border: "1px solid #444",
      color: "#ccc"
    }}>
      Tüm katmanlar → tek bir kök-anlam çekirdeğine indirgeniyor.
    </div>

  </div>
)}
export const rootList = [...];
export const matchRoot = (symbol) => { ... };
export const buildSemanticCluster = (rootMatch) => { ... };
export const calculateRootDensity = (rootMatch, symbolList) => { ... };
export const calculateEnergy = (rootMatch, cluster, density) => { ... };
export const calculateForce = (cluster) => { ... };
export const semanticCoordinates = (...) => { ... };
export const semanticDistance = (...) => { ... };
export const calculateUniverseEnergy = (...) => { ... };
export const buildUniverseVariant = (...) => { ... };
export const calculateSingularity = (...) => { ... };
export const YKOS_Analyze = (symbol, symbolList) => {
  const rootMatch = matchRoot(symbol);
  const cluster = buildSemanticCluster(rootMatch);
  const density = calculateRootDensity(rootMatch, symbolList);
  const energy = calculateEnergy(rootMatch, cluster, density);
  const forceField = calculateForce(cluster);

  const space = cluster.map(c => ({
    ...c,
    coords: semanticCoordinates(c.score, energy, c.score - 50)
  }));

  const universe1 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 1);
  const universe2 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 2);
  const universe3 = buildUniverseVariant(rootMatch, cluster, density, energy, forceField, space, 3);

  const multiverse = [universe1, universe2, universe3];

  const singularity = calculateSingularity(energy, multiverse);

  return {
    rootMatch,
    cluster,
    density,
    energy,
    forceField,
    space,
    multiverse,
    singularity
  };
};
export * from "./roots.js";
export * from "./cluster.js";
export * from "./atlas.js";
export * from "./energy.js";
export * from "./force.js";
export * from "./space.js";
export * from "./universe.js";
export * from "./multiverse.js";
export * from "./singularity.js";
export * from "./api.js";
ykos analyze <symbol>
ykos root <symbol>
ykos cluster <symbol>
ykos atlas <symbol>
ykos energy <symbol>
ykos force <symbol>
ykos space <symbol>
ykos universe <symbol>
ykos multiverse <symbol>
ykos singularity <symbol>
#!/usr/bin/env node
import { YKOS_Analyze } from "./ykos-sdk/index.js";

const args = process.argv.slice(2);
const command = args[0];
const symbolChar = args[1];

const symbol = {
  char: symbolChar,
  name: symbolChar,
  sound: symbolChar.toLowerCase()
};

const result = YKOS_Analyze(symbol, symbolList);

const render = (obj) => console.log(JSON.stringify(obj, null, 2));

switch (command) {
  case "analyze":
    render(result);
    break;

  case "root":
    render(result.rootMatch);
    break;

  case "cluster":
    render(result.cluster);
    break;

  case "atlas":
    render(result.density);
    break;

  case "energy":
    console.log("Energy:", result.energy);
    break;

  case "force":
    render(result.forceField);
    break;

  case "space":
    render(result.space);
    break;

  case "universe":
    render(result.multiverse);
    break;

  case "multiverse":
    render(result.multiverse);
    break;

  case "singularity":
    console.log("Singularity:", result.singularity);
    break;

  default:
    console.log(`
YKOS CLI Komutları:

  ykos analyze <symbol>      → Tam analiz
  ykos root <symbol>         → Kök eşleşme
  ykos cluster <symbol>      → Anlam kümesi
  ykos atlas <symbol>        → Atlas yoğunluğu
  ykos energy <symbol>       → Enerji
  ykos force <symbol>        → Kuvvet alanı
  ykos space <symbol>        → Uzay koordinatları
  ykos universe <symbol>     → Evren modeli
  ykos multiverse <symbol>   → Çoklu evren
  ykos singularity <symbol>  → Tekillik
`);
}
import React, { useState } from "react";
import { YKOS_Analyze } from "./engine/ykos-sdk/index.js";
import {
  RootPanel,
  ClusterPanel,
  AtlasPanel,
  EnergyPanel,
  ForcePanel,
  SpacePanel,
  UniversePanel,
  MultiversePanel,
  SingularityPanel
} from "./components";

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [activeTab, setActiveTab] = useState("root");

  const analyzeSymbol = (symbol) => {
    const result = YKOS_Analyze(symbol, symbolList);
    setSelectedSymbol(result);
  };

  return (
    <div className="ykos-app">
      <Sidebar setActiveTab={setActiveTab} />
      <SymbolSelector onSelect={analyzeSymbol} />

      <div className="panel-area">
        {activeTab === "root" && <RootPanel data={selectedSymbol} />}
        {activeTab === "cluster" && <ClusterPanel data={selectedSymbol} />}
        {activeTab === "atlas" && <AtlasPanel data={selectedSymbol} />}
        {activeTab === "energy" && <EnergyPanel data={selectedSymbol} />}
        {activeTab === "force" && <ForcePanel data={selectedSymbol} />}
        {activeTab === "space" && <SpacePanel data={selectedSymbol} />}
        {activeTab === "universe" && <UniversePanel data={selectedSymbol} />}
        {activeTab === "multiverse" && <MultiversePanel data={selectedSymbol} />}
        {activeTab === "singularity" && <SingularityPanel data={selectedSymbol} />}
      </div>
    </div>
  );
};

export default App;
const RootPanel = ({ data }) => {
  if (!data) return <div>Bir sembol seçin.</div>;

  return (
    <div className="panel">
      <h2>Kök Eşleşme</h2>
      <div className="root-box">
        <strong>{data.rootMatch.root}</strong>
        <div>Skor: {data.rootMatch.score}</div>
        <div>Anlam: {data.rootMatch.meaning}</div>
      </div>
    </div>
  );
};

export default RootPanel;
import { useState } from "react";
import { YKOS_Analyze } from "./engine/ykos-sdk/index.js";
import Sidebar from "./ui/Sidebar.jsx";
import SymbolSelector from "./ui/SymbolSelector.jsx";

import RootPanel from "./components/RootPanel.jsx";
import ClusterPanel from "./components/ClusterPanel.jsx";
import AtlasPanel from "./components/AtlasPanel.jsx";
import EnergyPanel from "./components/EnergyPanel.jsx";
import ForcePanel from "./components/ForcePanel.jsx";
import SpacePanel from "./components/SpacePanel.jsx";
import UniversePanel from "./components/UniversePanel.jsx";
import MultiversePanel from "./components/MultiversePanel.jsx";
import SingularityPanel from "./components/SingularityPanel.jsx";

export default function App() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [activeTab, setActiveTab] = useState("root");

  const analyzeSymbol = (symbol) => {
    const result = YKOS_Analyze(symbol, symbolList);
    setSelectedSymbol(result);
  };

  return (
    <div className="flex h-screen bg-[#0d0d0d] text-gray-200">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <SymbolSelector onSelect={analyzeSymbol} />

        <div className="flex-1 overflow-auto p-6">
          {activeTab === "root" && <RootPanel data={selectedSymbol} />}
          {activeTab === "cluster" && <ClusterPanel data={selectedSymbol} />}
          {activeTab === "atlas" && <AtlasPanel data={selectedSymbol} />}
          {activeTab === "energy" && <EnergyPanel data={selectedSymbol} />}
          {activeTab === "force" && <ForcePanel data={selectedSymbol} />}
          {activeTab === "space" && <SpacePanel data={selectedSymbol} />}
          {activeTab === "universe" && <UniversePanel data={selectedSymbol} />}
          {activeTab === "multiverse" && <MultiversePanel data={selectedSymbol} />}
          {activeTab === "singularity" && <SingularityPanel data={selectedSymbol} />}
        </div>
      </div>
    </div>
  );
}
export default function EnergyPanel({ data }) {
  if (!data) return <div>Bir sembol seçin.</div>;

  return (
    <div className="bg-[#111] p-6 rounded-xl border border-gray-700">
      <h2 className="text-xl mb-4">Enerji Haritası</h2>

      <div className="p-4 rounded-lg mb-4"
           style={{ background: `rgba(255,0,120,${data.energy/120})` }}>
        Toplam Enerji: {data.energy}
      </div>

      <h3 className="mb-2">Kök Enerjisi</h3>
      <div className="p-3 rounded-lg mb-4 bg-[#222] border border-gray-600">
        {data.rootMatch.root} — {data.rootMatch.score}
      </div>

      <h3 className="mb-2">Anlam Kümesi Enerjisi</h3>
      {data.cluster.map((c, i) => (
        <div key={i} className="p-3 mb-2 rounded-lg bg-[#222] border border-gray-600">
          {c.root} — {c.meaning} ({c.score})
        </div>
      ))}
    </div>
  );
}
import express from "express";
import { YKOS_Analyze } from "../engine/ykos-sdk/index.js";

const router = express.Router();

router.get("/analyze/:symbol", (req, res) => {
  const char = req.params.symbol;
  const symbol = { char, name: char, sound: char.toLowerCase() };

  const result = YKOS_Analyze(symbol, symbolList);
  res.json(result);
});

export default router;
import express from "express";
import api from "./routes/index.js";

const app = express();
app.use("/ykos", api);

app.listen(8080, () => {
  console.log("YKOS Cloud API aktif: 8080");
});
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "api/index.js"]
service: ykos-cloud
runtime: node18
autoscale:
  min: 2
  max: 20
steps:
  - build
  - test
  - deploy
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { YKOS_Analyze } from "./engine/ykos-sdk";
import TabBar from "./ui/TabBar";
import SymbolSelector from "./ui/SymbolSelector";

import RootPanel from "./components/RootPanel";
import ClusterPanel from "./components/ClusterPanel";
import AtlasPanel from "./components/AtlasPanel";
import EnergyPanel from "./components/EnergyPanel";
import ForcePanel from "./components/ForcePanel";
import SpacePanel from "./components/SpacePanel";
import UniversePanel from "./components/UniversePanel";
import MultiversePanel from "./components/MultiversePanel";
import SingularityPanel from "./components/SingularityPanel";

export default function App() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [activeTab, setActiveTab] = useState("root");

  const analyzeSymbol = (symbol) => {
    const result = YKOS_Analyze(symbol, symbolList);
    setSelectedSymbol(result);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0d0d0d" }}>
      <SymbolSelector onSelect={analyzeSymbol} />

      <ScrollView style={{ flex: 1 }}>
        {activeTab === "root" && <RootPanel data={selectedSymbol} />}
        {activeTab === "cluster" && <ClusterPanel data={selectedSymbol} />}
        {activeTab === "atlas" && <AtlasPanel data={selectedSymbol} />}
        {activeTab === "energy" && <EnergyPanel data={selectedSymbol} />}
        {activeTab === "force" && <ForcePanel data={selectedSymbol} />}
        {activeTab === "space" && <SpacePanel data={selectedSymbol} />}
        {activeTab === "universe" && <UniversePanel data={selectedSymbol} />}
        {activeTab === "multiverse" && <MultiversePanel data={selectedSymbol} />}
        {activeTab === "singularity" && <SingularityPanel data={selectedSymbol} />}
      </ScrollView>

      <TabBar setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}
import { View, TouchableOpacity, Text } from "react-native";

export default function TabBar({ setActiveTab }) {
  const tabs = [
    { key: "root", label: "Kök" },
    { key: "cluster", label: "Küme" },
    { key: "atlas", label: "Atlas" },
    { key: "energy", label: "Enerji" },
    { key: "force", label: "Kuvvet" },
    { key: "space", label: "Uzay" },
    { key: "universe", label: "Evren" },
    { key: "multiverse", label: "Multiverse" },
    { key: "singularity", label: "Tekillik" }
  ];

  return (
    <View style={{
      flexDirection: "row",
      backgroundColor: "#111",
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: "#333",
      justifyContent: "space-around"
    }}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => setActiveTab(tab.key)}
        >
          <Text style={{ color: "#fff", fontSize: 12 }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
import { View, TextInput, Text } from "react-native";
import { useState } from "react";

export default function SymbolSelector({ onSelect }) {
  const [value, setValue] = useState("");

  const handleSelect = () => {
    if (value.trim() === "") return;

    const symbol = {
      char: value,
      name: value,
      sound: value.toLowerCase()
    };

    onSelect(symbol);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: "#fff", marginBottom: 10, fontSize: 16 }}>
        Sembol Gir
      </Text>

      <TextInput
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10
        }}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSelect}
        placeholder="A, B, K, L..."
        placeholderTextColor="#666"
      />

      <Text style={{ color: "#aaa", fontSize: 12 }}>
        Enter’a basınca analiz başlar.
      </Text>
    </View>
  );
}
import { View, TextInput, Text } from "react-native";
import { useState } from "react";

export default function SymbolSelector({ onSelect }) {
  const [value, setValue] = useState("");

  const handleSelect = () => {
    if (value.trim() === "") return;

    const symbol = {
      char: value,
      name: value,
      sound: value.toLowerCase()
    };

    onSelect(symbol);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: "#fff", marginBottom: 10, fontSize: 16 }}>
        Sembol Gir
      </Text>

      <TextInput
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10
        }}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleSelect}
        placeholder="A, B, K, L..."
        placeholderTextColor="#666"
      />

      <Text style={{ color: "#aaa", fontSize: 12 }}>
        Enter’a basınca analiz başlar.
      </Text>
    </View>
  );
}
import { YKOS_Analyze } from "../engine/ykos-sdk/index.js";

setInterval(() => {
  console.log("YKOS OS Service çalışıyor...");
}, 5000);
@objc(YKOSBridge)
class YKOSBridge: NSObject {
  @objc
  func analyze(_ symbol: String) -> String {
    return "YKOS sonucu: \(symbol)"
  }
}
@objc(YKOSBridge)
class YKOSBridge: NSObject {
  @objc
  func analyze(_ symbol: String) -> String {
    return "YKOS sonucu: \(symbol)"
  }
}
class YKOSBridge {
    fun analyze(symbol: String): String {
        return "YKOS sonucu: $symbol"
    }
}
import fs from "fs";

fs.writeFileSync("ykos-cache/atlas.json", JSON.stringify(atlasData));
new Notification("YKOS Analiz", {
  body: "Sembol analizi tamamlandı."
});
new Notification("YKOS Analiz", {
  body: "Sembol analizi tamamlandı."
});
val builder = NotificationCompat.Builder(context, "ykos")
    .setContentTitle("YKOS Analiz")
    .setContentText("Sembol analizi tamamlandı.")
Authorization: Bearer <ykos-token>
