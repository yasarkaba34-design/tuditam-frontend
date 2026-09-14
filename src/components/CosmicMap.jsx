import { useEffect, useState } from "react";
import { startCosmicUniverse } from "../engine/CosmicUniverseEngine";

export default function CosmicMap() {
  const [universe, setUniverse] = useState(null);

  useEffect(() => {
    startCosmicUniverse((packet) => setUniverse(packet));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        color: "#fff",
        background: "#000",
        padding: "20px"
      }}
    >
      <h2>YKOS Kozmik Evren Haritası</h2>

      {universe && (
        <div>
          <p>🌌 Kozmik Dalga: {universe.cosmicWave ?? 0}</p>
          <p>🪐 Genişleme: {universe.expansion ?? 0}</p>
          <p>🔮 Davranış Akışı: {universe.behaviorFlow ?? "N/A"}</p>
          <p>💫 Katman: {universe.cosmicLayer?.name ?? "N/A"}</p>
        </div>
      )}

      <div style={{ marginTop: "30px" }}>
        <img
          src="/cosmicwave.png"
          alt="Kozmik Dalga"
          style={{ width: "80%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}
