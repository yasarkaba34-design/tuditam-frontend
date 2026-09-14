import AnadoluShieldInteractive from "../modules/AnadoluShieldInteractive";
import CosmicAtlasMap from "../components/CosmicAtlasMap";
import CosmicMigrationFlow from "../components/CosmicMigrationFlow";

export default function MegaHarita() {
  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #000010, #000000)",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        display: "grid",
        gridTemplateRows: "420px 420px",
        gap: "20px"
      }}
    >
      {/* Üst: Atlas Gezegen Haritası + Göç Akışı */}
      <div
        style={{
          position: "relative",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <CosmicAtlasMap />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none"
          }}
        >
          <CosmicMigrationFlow />
        </div>
      </div>

      {/* Alt: Anadolu Kalkanı İnteraktif Modülü */}
      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <AnadoluShieldInteractive />
      </div>
    </div>
  );
}
