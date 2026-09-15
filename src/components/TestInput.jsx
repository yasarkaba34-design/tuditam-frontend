import { useState } from "react";

export default function TestInput({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Dil Test Girdisi</label>

      <textarea
        style={styles.textarea}
        placeholder="Hurri kökü, test metni veya analiz girişi..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button style={styles.button} onClick={handleSubmit}>
        Testi Çalıştır
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    background: "#f7f7f7",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },
  label: {
    fontSize: "18px",
    fontWeight: "600",
  },
  textarea: {
    width: "100%",
    height: "140px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "600",
    background: "#222",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
  },
};
