// FILE: src/matrices/m8.jsx

export default function M8({ meta }) {
  return (
    <div style={{ padding: "10px", border: "1px solid gold", marginTop: "10px" }}>
      <h4>M8 Matrisi</h4>

      {/* MetaLayer’dan gelen çekirdek meta veriler */}
      <p><strong>Origin:</strong> {meta.metaSchema.origin}</p>
      <p><strong>Semantic Field:</strong> {meta.metaSchema.semantic_field}</p>
      <p><strong>Frequency:</strong> {meta.metaSchema.frequency}</p>

      {/* Atlas bağlantısı */}
      <p><strong>Atlas Coord:</strong> {meta.metaSchema.atlas_coord}</p>

      {/* BubbleMatrix görsel profili */}
      <p><strong>Bubble Profile:</strong> {meta.metaSchema.bubble_profile}</p>

      {/* Flux motoru */}
      <p><strong>Flux Vector:</strong> {meta.metaSchema.flux_vector}</p>

      {/* RMV */}
      <p><strong>RMV Weight:</strong> {meta.metaSchema.rmv_weight}</p>

      {/* Evaluator */}
      <p><strong>Evaluator Hint:</strong> {meta.metaSchema.evaluator_hint}</p>

      {/* Çoklu dil desteği */}
      <p><strong>Diller:</strong> {meta.languages.join(", ")}</p>
    </div>
  );
}
import React from "react";

export default function M8() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>M8 Matrisi</h2>
      <p style={styles.text}>
        Bu bileşen YKOS sisteminde M8 matrisini temsil eder.
      </p>
    </div>
  );
}

const styles = {
  container: { backgroundColor: "#222", color: "#fff", padding: "20px", borderRadius: "8px", border: "1px solid #444" },
  title: { fontSize: "24px", fontWeight: "bold", marginBottom: "10px" },
  text: { fontSize: "16px", opacity: 0.8 },
};
// FILE: src/matrices/m8.jsx

export default function M8({ meta }) {
  return (
    <div style={{ padding: "10px", border: "1px solid gold" }}>
      <h4>M8 Matrisi</h4>

      <p>Meta Origin: {meta.metaSchema.origin}</p>
      <p>Semantic Field: {meta.metaSchema.semantic_field}</p>
      <p>Languages: {meta.languages.join(", ")}</p>
    </div>
  );
}
