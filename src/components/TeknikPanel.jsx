import { YKOS_DATA } from "../data/ykosData";
import { useEffect, useState } from "react";
import { YKOS_DATA } from "../data/ykosData";
import { startLiveEngine } from "../engine/LiveDataEngine";
import { useEffect, useState } from "react";
import { YKOS_DATA } from "../data/ykosData";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function TehnikPanel({ root }) {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  if (!root)
    return (
      <div>
        <h2>Tehnik Panel</h2>
        <p>Kök seçilmedi.</p>
      </div>
    );

  return (
    <div style={{ padding: "10px" }}>
      <h2>Tehnik Panel (EVREN)</h2>

      {/* Kök Bilgisi */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          marginBottom: "20px"
        }}
      >
        <h3>{root.name}</h3>
        <p>{root.meaning}</p>
      </div>

      {/* EVREN VERİSİ */}
      {universe && (
        <div
          style={{
            padding: "10px",
            border: "1px solid #aaa",
            borderRadius: "6px",
            marginBottom: "20px",
            background: "#eef6ff"
          }}
        >
          <h3>EVREN AKIŞI</h3>
          <p><strong>Zaman:</strong> {new Date(universe.time).toLocaleTimeString()}</p>
          <p><strong>Kozmik Dalga:</strong> {universe.cosmicWave}</p>
          <p><strong>Evren Genişlemesi:</strong> {universe.expansion}</p>
          <p><strong>Davranış Akışı:</strong> {universe.behaviorFlow}</p>
          <p>
            <strong>Kozmik Katman:</strong> {universe.cosmicLayer.name} —{" "}
            {universe.cosmicLayer.desc}
          </p>
          <p>
            <strong>Chain Düğümü:</strong> {universe.chainNode.name} —{" "}
            {universe.chainNode.role}
          </p>
          <p><strong>Kendini Üretme:</strong> {universe.selfGenerate}</p>
        </div>
      )}

      {/* Statik Veriler */}
      <h3>6 Katman</h3>
      <ul>
        {YKOS_DATA.layers.map((l) => (
          <li key={l.id}>
            <strong>{l.name}</strong> — {l.desc}
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>Semantik Alanlar</h3>
      <ul>
        {YKOS_DATA.semantic.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>Kültürel Atlas</h3>
      <ul>
        {YKOS_DATA.atlas.map((a) => (
          <li key={a.region}>
            <strong>{a.region}</strong> — {a.detail}
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>CosmicChain Bağlantısı</h3>
      <ul>
        {YKOS_DATA.cosmicChain.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong> — {c.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TehnikPanel({ root }) {
  const [live, setLive] = useState(null);

  useEffect(() => {
    startLiveEngine((packet) => setLive(packet));
  }, []);

  if (!root)
    return (
      <div>
        <h2>Tehnik Panel</h2>
        <p>Kök seçilmedi.</p>
      </div>
    );

  return (
    <div style={{ padding: "10px" }}>
      <h2>Tehnik Panel (CANLI)</h2>

      {/* Kök Bilgisi */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          marginBottom: "20px"
        }}
      >
        <h3>{root.name}</h3>
        <p>{root.meaning}</p>
      </div>

      {/* CANLI VERİ */}
      {live && (
        <div
          style={{
            padding: "10px",
            border: "1px solid #aaa",
            borderRadius: "6px",
            marginBottom: "20px",
            background: "#f8f8f8"
          }}
        >
          <h3>CANLI VERİ</h3>
          <p><strong>Zaman:</strong> {new Date(live.time).toLocaleTimeString()}</p>
          <p><strong>Tick:</strong> {live.tick}</p>
          <p><strong>Kozmik Titreşim:</strong> {live.cosmicPulse}</p>
          <p><strong>Semantik Kayma:</strong> {live.semanticShift}</p>
          <p>
            <strong>Aktif Katman:</strong> {live.activeLayer.name} —{" "}
            {live.activeLayer.desc}
          </p>
          <p>
            <strong>Chain Akışı:</strong> {live.chainFlow.name} —{" "}
            {live.chainFlow.role}
          </p>
        </div>
      )}

      {/* Statik Veriler */}
      <h3>6 Katman</h3>
      <ul>
        {YKOS_DATA.layers.map((l) => (
          <li key={l.id}>
            <strong>{l.name}</strong> — {l.desc}
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>Semantik Alanlar</h3>
      <ul>
        {YKOS_DATA.semantic.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>Kültürel Atlas</h3>
      <ul>
        {YKOS_DATA.atlas.map((a) => (
          <li key={a.region}>
            <strong>{a.region}</strong> — {a.detail}
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "20px" }}>CosmicChain Bağlantısı</h3>
      <ul>
        {YKOS_DATA.cosmicChain.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong> — {c.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TehnikPanel({ root }) {
  if (!root)
    return (
      <div>
        <h2>Tehnik Panel</h2>
        <p>Kök seçilmedi.</p>
      </div>
    );

  return (
    <div style={{ padding: "10px" }}>
      <h2>Tehnik Panel</h2>

      {/* Kök Bilgisi */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          marginBottom: "20px"
        }}
      >
        <h3>{root.name}</h3>
        <p>{root.meaning}</p>
      </div>

      {/* 6 Katman */}
      <h3>6 Katman</h3>
      <ul>
        {YKOS_DATA.layers.map((l) => (
          <li key={l.id}>
            <strong>{l.name}</strong> — {l.desc}
          </li>
        ))}
      </ul>

      {/* Semantik Alanlar */}
      <h3 style={{ marginTop: "20px" }}>Semantik Alanlar</h3>
      <ul>
        {YKOS_DATA.semantic.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      {/* Kültürel Atlas */}
      <h3 style={{ marginTop: "20px" }}>Kültürel Atlas</h3>
      <ul>
        {YKOS_DATA.atlas.map((a) => (
          <li key={a.region}>
            <strong>{a.region}</strong> — {a.detail}
          </li>
        ))}
      </ul>

      {/* CosmicChain */}
      <h3 style={{ marginTop: "20px" }}>CosmicChain Bağlantısı</h3>
      <ul>
        {YKOS_DATA.cosmicChain.map((c) => (
          <li key={c.name}>
            <strong>{c.name}</strong> — {c.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
export default function TehnikPanel({ root }) {
  if (!root)
    return (
      <div>
        <h2>Tehnik Panel</h2>
        <p>Kök seçilmedi.</p>
      </div>
    );
export default function TehnikPanel({ root }) {
  if (!root)
    return (
      <div>
        <h2>Tehnik Panel</h2>
        <p>Kök seçilmedi.</p>
      </div>
    );

  // 6 Katman – YKOS Standart
  const layers = [
    { id: 1, name: "Origin", desc: "Köken, ilk oluşum, temel çıkış noktası" },
    { id: 2, name: "Creation", desc: "Yaratım, türetim, ilk genişleme" },
    { id: 3, name: "Expansion", desc: "Yayılım, çoğalma, alan açma" },
    { id: 4, name: "Formation", desc: "Biçimlenme, yapı kazanma" },
    { id: 5, name: "Structure", desc: "Sistemleşme, düzen, kurgu" },
    { id: 6, name: "Cosmic", desc: "Kozmik bağ, üst-ölçek davranış" }
  ];

  // Semantik Alanlar – YKOS Semantik Motoru
  const semantic = [
    "Davranış",
    "Eylem",
    "Durum",
    "Süreç",
    "İlişki",
    "Konum",
    "Zaman",
    "Kültür",
    "Kozmik Etki"
  ];

  // Kültürel Atlas – YKOS Atlas Motoru
  const atlas = [
    { region: "Anadolu", detail: "Proto-Türk davranış kökleri" },
    { region: "Orta Asya", detail: "Kök davranış zincirleri" },
    { region: "Mezopotamya", detail: "Erken yapı ve kurgu etkileri" },
    { region: "Balkanlar", detail: "Dil sürekliliği izleri" }
  ];

  // CosmicChain Bağlantısı – YKOS Kozmik Motoru
  const cosmicChain = [
    { name: "TUT", role: "Bağlayıcı davranış" },
    { name: "KUR", role: "Yapı kurucu davranış" },
    { name: "BA", role: "Başlangıç davranışı" },
    { name: "YOL", role: "Akış davranışı" },
    { name: "BİR", role: "Birleştirici davranış" },
    { name: "KAL", role: "Süreklilik davranışı" }
  ];

  return (
    <div style={{ padding: "10px" }}>
      <h2>Tehnik Panel</h2>

      {/* Kök Başlık */}
      <div
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          marginBottom: "20px"
        }}
      >
        <h3>{root.name}</h3>
        <p>{root.meaning}</p>
      </div>

      {/* 6 Katman */}
      <div>
        <h3>6 Katman</h3>
        <ul>
          {layers.map((l) => (
            <li key={l.id}>
              <strong>{l.name}</strong> — {l.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Semantik Alanlar */}
      <div style={{ marginTop: "20px" }}>
        <h3>Semantik Alanlar</h3>
        <ul>
          {semantic.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Kültürel Atlas */}
      <div style={{ marginTop: "20px" }}>
        <h3>Kültürel Atlas</h3>
        <ul>
          {atlas.map((a) => (
            <li key={a.region}>
              <strong>{a.region}</strong> — {a.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* CosmicChain */}
      <div style={{ marginTop: "20px" }}>
        <h3>CosmicChain Bağlantısı</h3>
        <ul>
          {cosmicChain.map((c) => (
            <li key={c.name}>
              <strong>{c.name}</strong> — {c.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

  return (
    <div>
      <h2>Tehnik Panel</h2>
      <h3>{root.name}</h3>
      <p>{root.meaning}</p>
    </div>
  );
}

export default function TehnikPanel() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tehnik Panel</h2>
      <p style={styles.text}>
        Bu panel, YKOS sisteminde teknik modül davranışlarını görüntülemek için kullanılır.
      </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #444",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    opacity: 0.8,
  },
};
