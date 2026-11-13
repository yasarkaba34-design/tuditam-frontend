import React, { useState } from "react";
import rootData from "../data/protoRoots100.json";

const records = Array.isArray(rootData?.records) ? rootData.records : [];

export default function ProtoRoots3DMatrix({ onGoHome = () => {} }) {
  const [selectedId, setSelectedId] = useState(records[0]?.id ?? null);
  const selected = records.find((record) => record.id === selectedId) || null;

  return (
    <main style={{ minHeight: "100vh", padding: "20px", background: "#030712", color: "#f8fafc", fontFamily: "Segoe UI, sans-serif", boxSizing: "border-box" }}>
      <div style={{ width: "min(100%, 1180px)", margin: "0 auto" }}>
        <button type="button" onClick={onGoHome} style={{ marginBottom: "16px", padding: "9px 14px", border: "1px solid #f59e0b", borderRadius: "8px", background: "#111827", color: "#fbbf24", fontWeight: 800, cursor: "pointer" }}>
          ← Ana sayfaya dön
        </button>

        <section style={{ padding: "clamp(18px, 3vw, 30px)", border: "1px solid #806414", borderRadius: "16px", background: "linear-gradient(145deg, #0b1020, #050811)" }}>
          <p style={{ margin: "0 0 6px", color: "#22d3ee", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "1.5px" }}>YKOS • 3D KÖK-HECE MATRİSİ</p>
          <h1 style={{ margin: "0 0 8px", color: "#fbbf24", fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>100 Prototip Aday Kaydı</h1>
          <p style={{ maxWidth: "850px", color: "#cbd5e1", lineHeight: 1.6 }}>
            Bu görünüm, prototip envanterindeki kayıtları üç boyut hissi veren bir düzlemde gösterir. Kayıtlar araştırma adayıdır; görünüm tarihsel doğrulama veya etimolojik sonuç üretmez.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(240px, 0.7fr)", gap: "24px", alignItems: "center" }}>
            <div style={{ overflow: "auto", padding: "24px 12px 50px" }}>
              <div style={{ perspective: "1100px", minWidth: "640px", minHeight: "420px", display: "grid", placeItems: "center" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(10, minmax(48px, 1fr))", gap: "8px", width: "min(100%, 680px)", padding: "16px", border: "1px solid rgba(34,211,238,.45)", borderRadius: "14px", background: "radial-gradient(ellipse at center, rgba(14,116,144,.22), rgba(3,7,18,.92))", boxShadow: "0 25px 55px rgba(0,0,0,.55)", transform: "rotateX(48deg) rotateZ(-8deg)", transformStyle: "preserve-3d" }}>
                  {records.map((record) => {
                    const active = record.id === selectedId;
                    return (
                      <button
                        key={record.id}
                        type="button"
                        onClick={() => setSelectedId(record.id)}
                        aria-label={`Kayıt ${record.id}: ${record.label}, prototip hece ${record.proto_hece}`}
                        title={`${record.label} · ${record.proto_hece}`}
                        style={{
                          minHeight: "48px",
                          padding: "4px",
                          border: active ? "2px solid #fbbf24" : "1px solid rgba(34,211,238,.55)",
                          borderRadius: "7px",
                          background: active ? "rgba(180,83,9,.88)" : "rgba(8,47,73,.82)",
                          color: active ? "#fff7ed" : "#cffafe",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          cursor: "pointer",
                          transform: `translateZ(${(record.id % 5) * 3}px)`,
                          boxShadow: active ? "0 0 18px rgba(251,191,36,.65)" : "0 5px 10px rgba(0,0,0,.35)"
                        }}
                      >
                        <span style={{ display: "block" }}>{record.label}</span>
                        <span style={{ display: "block", marginTop: "3px", opacity: 0.8 }}>{record.proto_hece}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside style={{ minHeight: "210px", padding: "18px", border: "1px solid rgba(245,158,11,.5)", borderRadius: "12px", background: "#090d17" }}>
              <div style={{ color: "#94a3b8", fontSize: "0.78rem" }}>Seçili kayıt {selected ? `#${selected.id}` : ""}</div>
              <h2 style={{ margin: "8px 0", color: "#fbbf24", fontSize: "1.6rem" }}>{selected?.label || "Kayıt yok"}</h2>
              <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 12px", margin: 0, lineHeight: 1.45 }}>
                <dt style={{ color: "#94a3b8" }}>Prototip hece</dt><dd style={{ margin: 0, color: "#67e8f9", fontWeight: 800 }}>{selected?.proto_hece || "—"}</dd>
                <dt style={{ color: "#94a3b8" }}>Ritim</dt><dd style={{ margin: 0 }}>{selected?.ritim || "—"}</dd>
                <dt style={{ color: "#94a3b8" }}>Semiyotik not</dt><dd style={{ margin: 0 }}>{selected?.semiyotik || "—"}</dd>
                <dt style={{ color: "#94a3b8" }}>Coğrafi not</dt><dd style={{ margin: 0 }}>{selected?.geo || "—"}</dd>
              </dl>
              <p style={{ margin: "16px 0 0", color: "#fcd34d", fontSize: "0.78rem", lineHeight: 1.5 }}>Aday veri: kaynak ve ilk tanıklık bilgileri bu envanterde yer almıyor.</p>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
