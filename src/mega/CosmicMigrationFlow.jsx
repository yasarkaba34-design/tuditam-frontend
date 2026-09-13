export default function CosmicMigrationFlow({ universe, direction }) {
  if (!universe) {
    return <p style={{ color: "#888" }}>Akış başlatılıyor...</p>;
  }

  return (
    <div style={{ color: "#0f0" }}>
      <p>Göç Akışı ({direction}) — OmniField: {universe.omniField?.amplitude}</p>
    </div>
  );
}
