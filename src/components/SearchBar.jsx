import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setTerm(val);
    if (onSearch) {
      onSearch(val);
    }
  };

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#000000",
          border: "1px solid #ffd700",
          borderRadius: "8px",
          padding: "8px 14px",
          boxShadow: "0 0 10px rgba(255, 215, 0, 0.2)"
        }}
      >
        <span style={{ color: "#ffd700", marginRight: "10px", fontSize: "1.1rem" }}>🔍</span>
        <input 
          type="text" 
          value={term}
          onChange={handleChange}
          placeholder="Arşivde veya Matriste Ara... (Örn: Göbeklitepe, YOL, ÇEV, Etrüsk, Cilt 4, YKOS-DMG-01)"
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            color: "#ffffff",
            fontSize: "0.85rem",
            outline: "none",
            fontFamily: "Segoe UI, sans-serif"
          }}
        />
        {term && (
          <button 
            onClick={() => { setTerm(""); if(onSearch) onSearch(""); }}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffd700",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.9rem"
            }}
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}
