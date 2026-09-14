// FILE: src/atlas/AtlasMap.jsx

import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "../data/firebase";
import metaLayer from "../matrices/meta/MetaLayer.json";
import "./AtlasMap.css";

export default function AtlasMap() {
  const entries = Array.isArray(metaLayer?.entries) ? metaLayer.entries : [];
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    const handleAtlasPin = (event) => {
      const { id, title, coordinates } = event.detail || {};
      if (!coordinates) return;

      let lat, lng;
      if (typeof coordinates === "object" && !Array.isArray(coordinates)) {
        lat = Number(coordinates.latitude ?? coordinates.lat);
        lng = Number(coordinates.longitude ?? coordinates.lng ?? coordinates.lon);
      } else if (Array.isArray(coordinates)) {
        lat = Number(coordinates[0]);
        lng = Number(coordinates[1]);
      } else if (typeof coordinates === "string") {
        const parts = coordinates.split(",").map(Number);
        lat = parts[0];
        lng = parts[1];
      }

      if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

      const newPin = {
        id: id ?? `${lat}-${lng}`,
        firestoreId: id !== undefined && id !== null ? String(id) : null,
        title: title || "İsimsiz YKOS kaydı",
        lat, lng, source: "bubble"
      };

      setPins((prev) => {
        const pinExists = prev.some((p) => p.id === newPin.id);
        return pinExists ? prev.map((p) => (p.id === newPin.id ? newPin : p)) : [...prev, newPin];
      });
      setSelectedPin(newPin);
    };

    window.addEventListener("atlas-pin", handleAtlasPin);
    return () => window.removeEventListener("atlas-pin", handleAtlasPin);
  }, []);

  useEffect(() => {
    const firestoreId = selectedPin?.firestoreId;
    if (!firestoreId) return undefined;

    const documentReference = doc(db, "ykos_open_data", firestoreId);
    const unsubscribe = onSnapshot(documentReference, (snapshot) => {
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      const evaluatorResult = data?.evaluator_result;
      if (!evaluatorResult) return;

      const resultText = typeof evaluatorResult === "string" ? evaluatorResult : (evaluatorResult.meaning || "Analiz tamamlandı");

      setSelectedPin((prev) => (prev?.firestoreId !== firestoreId ? prev : { ...prev, result: resultText, evaluator_result: evaluatorResult }));
      setPins((prev) => prev.map((p) => (p.firestoreId === firestoreId ? { ...p, result: resultText, evaluator_result: evaluatorResult } : p)));
    });

    return () => unsubscribe();
  }, [selectedPin?.firestoreId]);

  const projectCoordinates = (lat, lng) => {
    const latitude = Number(lat), longitude = Number(lng);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
    return { x: ((Math.max(-180, Math.min(180, longitude)) + 180) / 360) * 100, y: ((90 - Math.max(-90, Math.min(90, latitude))) / 180) * 100 };
  };

  const handleMetaEntryClick = (entry) => {
    const coords = entry?.atlas_coord;
    if (!Array.isArray(coords) || coords.length < 2) return;
    setSelectedPin({ id: entry.root, title: entry.root, region: entry.atlas_region, lat: coords[0], lng: coords[1], source: "meta" });
  };

  return (
    <section className="atlas-map-panel" style={{ position: "relative", padding: "20px", color: "gold", background: "#111", border: "1px solid gold" }}>
      <h3>AtlasMap — Kültürel Coğrafya Paneli</h3>

      <div className="atlas-map-surface" style={{ position: "relative", width: "100%", height: "400px", marginTop: "20px", overflow: "hidden", background: "#222", border: "1px solid gold" }}>
        {entries.map((entry) => {
          const pos = projectCoordinates(entry.atlas_coord[0], entry.atlas_coord[1]);
          if (!pos) return null;
          return (
            <button key={`meta-${entry.root}`} className="atlas-meta-pin" style={{ position: "absolute", left: `${pos.x}%`, top: `${pos.y}%`, width: "12px", height: "12px", background: "gold", borderRadius: "50%", transform: "translate(-50%, -50%)", cursor: "pointer" }} onClick={() => handleMetaEntryClick(entry)} />
          );
        })}
        {pins.map((pin) => {
          const pos = projectCoordinates(pin.lat, pin.lng);
          if (!pos) return null;
          return (
            <button key={`dynamic-${pin.id}`} className="atlas-dynamic-pin" style={{ position: "absolute", left: `${pos.x}%`, top: `${pos.y}%`, width: "16px", height: "16px", background: "#00e676", borderRadius: "50%", transform: "translate(-50%, -50%)", cursor: "pointer" }} onClick={() => setSelectedPin(pin)} />
          );
        })}
      </div>

      {selectedPin && (
        <aside className="atlas-result-panel semiyotik-panel" style={{ marginTop: "20px", padding: "15px", border: "1px solid gold" }}>
          <button style={{ float: "right", background: "none", border: "none", color: "gold", fontSize: "20px", cursor: "pointer" }} onClick={() => setSelectedPin(null)}>×</button>
          <h4>{selectedPin.title}</h4>
          {selectedPin.region && <p><strong>Bölge:</strong> {selectedPin.region}</p>}
          <p><strong>Koordinatlar:</strong> {selectedPin.lat}, {selectedPin.lng}</p>
          <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255, 215, 0, 0.35)" }}>
            <strong>YKOS değerlendirmesi:</strong>
            <p>{selectedPin.result || (selectedPin.source === "bubble" ? "Değerlendirme sonucu bekleniyor…" : "MetaLayer atlas kaydı")}</p>
          </div>
        </aside>
      )}

      <div style={{ marginTop: "20px" }}>
        {entries.map((entry) => (
          <p key={`list-${entry.root}`}>
            <button type="button" onClick={() => handleMetaEntryClick(entry)} style={{ background: "none", border: "none", color: "gold", cursor: "pointer" }}><strong>{entry.root}:</strong></button>
            {" "}{entry.atlas_region}
          </p>
        ))}
      </div>
    </section>
  );
}
