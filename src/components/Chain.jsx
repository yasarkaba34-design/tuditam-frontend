import React, { useState, useEffect } from "react";

const ZINCIR = ["TUT", "KUR", "BA", "YOL", "BİR", "KAL"];

export default function Chain() {
  const [step, setStep] = useState(0);
  const [flow, setFlow] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % ZINCIR.length;
        setFlow((f) => [...f, ZINCIR[next]]);
        return next;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "30px", marginTop: "40px" }}>
      <h2>YKOS CosmicChain – Davranış Zinciri</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {ZINCIR.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              background: step === index ? "#0a0" : "#222",
              color: "#fff",
              transition: "0.3s",
              fontWeight: step === index ? "bold" : "normal",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "30px" }}>Akış</h3>
      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "8px",
          color: "#0f0",
          minHeight: "80px",
        }}
      >
        {flow.join(" → ")}
      </div>
    </div>
  );
}
