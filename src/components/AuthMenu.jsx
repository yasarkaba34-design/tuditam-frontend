import React from 'react';

export default function AuthMenu({ onNavigateLogin }) {
  return (
    <div style={{
      marginTop: "auto", 
      paddingTop: "15px",
      borderTop: "1px solid rgba(255, 215, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <h5 style={{ color: "rgba(255, 215, 0, 0.7)", fontSize: "11px", margin: "0 0 5px 0", letterSpacing: "1px" }}>
        SİSTEM ERİŞİMİ
      </h5>
      
      <button 
        style={buttonStyles.admin}
        onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 215, 0, 0.15)"}
        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
        onClick={() => onNavigateLogin && onNavigateLogin("admin")}
      >
        <span style={{ fontSize: "14px" }}>🔒</span> Yönetici Girişi
      </button>
    </div>
  );
}

const buttonStyles = {
  admin: {
    backgroundColor: "transparent",
    color: "#ffd700",
    border: "1px solid rgba(255, 215, 0, 0.4)",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background-color 0.3s"
  }
};
