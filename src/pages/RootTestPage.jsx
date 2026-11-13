import React, { useMemo, useState } from "react";
import rootData from "../data/protoRoots100.json";

const records = Array.isArray(rootData?.records) ? rootData.records : [];

export default function RootTestPage({ onGoHome = () => {} }) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("tr");
    if (!term) return records;
    return records.filter((record) =>
      [record.id, record.label, record.proto_hece, record.ritim, record.semiyotik, record.geo]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("tr")
        .includes(term)
    );
  }, [query]);

  const selected = records.find((record) => record.id === selectedId) || null;

  return (
    <main style={{ minHeight: "100vh", padding: "20px", background: "#030712", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif", boxSizing: "border-box" }}>
      <div style={{ width: "min(100%, 1120px)", margin: "0 auto" }}>
        <button type="button" onClick={onGoHome} style={{ marginBottom: "16px", padding: "9px 14px", border: "1px solid #f59e0b", borderRadius: "8px", background: "#111827", color: "#fbbf24", fontWeight: 800, cursor: "pointer" }}>
          ← Ana sayfaya dön
        </button>

        <section style={{ padding: "clamp(18px, 3vw, 30px)", border: "1px solid #0e7490", borderRadius: "16px", background: "linear-gradient(145deg, #0b1020, #050811)" }}>
          <p style={{ margin: "0 0 6px", color: "#22d3ee", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "1.5px" }}>YKOS • TEST KAYITLARI</p>
          <h1 style={{ margin: "0 0 8px", color: "#fbbf24", fontSize: "clamp(1.5rem, 4vw, 2.1rem)" }}>Kök-Hece Adaylarını Ara</h1>
          <p style={{ maxWidth: "820px", color: "#cbd5e1", lineHeight: 1.6 }}>
            Bu sayfa, 100 prototip aday kaydı içinde terim, prototip hece, ritim, semiyotik not ve coğrafi nota göre arama yapar. Kayıtlar kaynak ve tarih doğrulaması bekleyen adaylardır.
          </p>

          <label htmlFor="root-test-search" style={{ display: "block", margin: "16px 0 6px", color: "#94a3b8", fontSize: "0.85rem" }}>Test edilecek terim veya hece</label>
          <input
            id="root-test-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Örn. yol, I-ŠA, Hattuşa"
            style={{ boxSizing: "border-box", width: "100%", padding: "12px 14px", border: "1px solid #0e7490", borderRadius: "8px", background: "#030712", color: "#f8fafc", outlineColor: "#22d3ee" }}
          />
          <p role="status" style={{ margin: "8px 0 14px", color: "#fbbf24", fontSize: "0.82rem" }}>{filtered.length} / {records.length} aday kayıt eşleşti</p>

          {selected && (
            <article style={{ marginBottom: "14px", padding: "14px 16px", border: "1px solid #f59e0b", borderRadius: "10px", background: "rgba(245,158,11,.08)" }}>
              <h2 style={{ margin: "0 0 8px", color: "#fbbf24", fontSize: "1.1rem" }}>Seçili kayıt #{selected.id}: {selected.label}</h2>
              <p style={{ margin: "4px 0", color: "#67e8f9" }}>Prototip hece: <strong>{selected.proto_hece}</strong> · Ritim: {selected.ritim}</p>
              <p style={{ margin: "4px 0", color: "#cbd5e1" }}>Semiyotik not: {selected.semiyotik}</p>
              <p style={{ margin: "4px 0", color: "#94a3b8" }}>Coğrafi not: {selected.geo}</p>
            </article>
          )}

          <div style={{ maxHeight: "62vh", overflow: "auto", border: "1px solid #1e293b", borderRadius: "8px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "680px", fontSize: "0.85rem" }}>
              <thead style={{ position: "sticky", top: 0, background: "#111827", color: "#fbbf24", textAlign: "left" }}>
                <tr>{["No", "Kavram", "Prototip hece", "Ritim", "Semiyotik not", "Coğrafi not"].map((heading) => <th key={heading} style={{ padding: "10px", borderBottom: "1px solid #334155" }}>{heading}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map((record) => {
                  const active = record.id === selectedId;
                  return (
                    <tr key={record.id} tabIndex={0} onClick={() => setSelectedId(record.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSelectedId(record.id); }} style={{ cursor: "pointer", background: active ? "rgba(14,116,144,.22)" : "transparent", outline: "none" }}>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b", color: "#94a3b8" }}>{record.id}</td>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b" }}>{record.label}</td>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b", color: "#67e8f9", fontWeight: 700 }}>{record.proto_hece}</td>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b", color: "#cbd5e1" }}>{record.ritim}</td>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b", color: "#cbd5e1" }}>{record.semiyotik}</td>
                      <td style={{ padding: "9px 10px", borderBottom: "1px solid #1e293b", color: "#94a3b8" }}>{record.geo}</td>
                    </tr>
                  );
                })}
                {!filtered.length && <tr><td colSpan="6" style={{ padding: "18px", textAlign: "center", color: "#94a3b8" }}>Eşleşen aday kayıt yok.</td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
