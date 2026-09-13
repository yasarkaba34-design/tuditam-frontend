import { useEffect, useState, useRef } from "react";

export default function YKOSLogPanel() {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("all");
  const logRef = useRef(null);

  useEffect(() => {
    const eventSource = new EventSource("/api/ykos-log");

    eventSource.onmessage = (event) => {
      const line = event.data;

      setLogs((prev) => [...prev, line]);

      // Auto-scroll
      if (logRef.current) {
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    };

    return () => eventSource.close();
  }, []);

  const filteredLogs = logs.filter((line) => {
    if (filter === "all") return true;
    if (filter === "success") return line.includes("Güncellendi");
    if (filter === "warning") return line.includes("Sembol bulunamadı");
    if (filter === "error") return line.includes("HATA");
    return true;
  });

  return (
    <div style={{ fontFamily: "Inter, monospace", color: "#e6e6e6" }}>
      
      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <button onClick={() => setFilter("all")} style={btnStyle}>Tümü</button>
        <button onClick={() => setFilter("success")} style={btnStyle}>Başarılı</button>
        <button onClick={() => setFilter("warning")} style={btnStyle}>Uyarı</button>
        <button onClick={() => setFilter("error")} style={btnStyle}>Hata</button>
      </div>

      {/* TERMINAL BOX */}
      <div
        ref={logRef}
        style={{
          background: "#0d0d0d",
          border: "1px solid #333",
          borderRadius: "10px",
          padding: "20px",
          height: "450px",
          overflowY: "scroll",
          boxShadow: "0 0 25px rgba(0,0,0,0.45)",
          fontSize: "14px",
          lineHeight: "1.5"
        }}
      >
        {filteredLogs.map((line, i) => (
          <div key={i} style={getLineStyle(line)}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

// BUTTON STYLE
const btnStyle = {
  background: "#222",
  color: "#eee",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "1px solid #444",
  cursor: "pointer",
  fontSize: "13px"
};

// LINE COLORING
function getLineStyle(line) {
  if (line.includes("Güncellendi")) {
    return { color: "#4ade80" }; // green
  }
  if (line.includes("Sembol bulunamadı")) {
    return { color: "#facc15" }; // yellow
  }
  if (line.includes("HATA")) {
    return { color: "#f87171" }; // red
  }
  return { color: "#e6e6e6" }; // default
}
