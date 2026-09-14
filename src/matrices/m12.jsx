import React from "react";

export default function M12() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>M12 Matrisi</h2>
      <p style={styles.text}>
        Bu bileşen YKOS sisteminde M12 matrisini temsil eder.
      </p>
    </div>
  );
}

const styles = {
  container: { backgroundColor: "#222", color: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #444" },
  title: { fontSize: "24px", fontWeight: "bold", marginBottom: "10px" },
  text: { fontSize: "16px", opacity: 0.8 },
};
// FILE: src/matrices/m12.jsx

export default function M12({ meta }) {
  return (
    <div style={{ padding: "10px", border: "1px solid gold", marginTop: "10px" }}>
      <h4>M12 Matrisi</h4>

      <p><strong>Origin:</strong> {meta.metaSchema.origin}</p>
      <p><strong>Semantic Field:</strong> {meta.metaSchema.semantic_field}</p>
      <p><strong>Frequency:</strong> {meta.metaSchema.frequency}</p>

      <p><strong>Atlas Coord:</strong> {meta.metaSchema.atlas_coord}</p>
      <p><strong>Bubble Profile:</strong> {meta.metaSchema.bubble_profile}</p>
      <p><strong>Flux Vector:</strong> {meta.metaSchema.flux_vector}</p>

      <p><strong>RMV Weight:</strong> {meta.metaSchema.rmv_weight}</p>
      <p><strong>Evaluator Hint:</strong> {meta.metaSchema.evaluator_hint}</p>

      <p><strong>Diller:</strong> {meta.languages.join(", ")}</p>
    </div>
  );
}
