import React, { useState } from "react";

const PASSWORD_KEY = "tuditam_admin_password";
const DEFAULT_PASSWORD = "YKOS2026";

export default function AdminLogin({ onSuccess, onCancel }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const savedPassword = localStorage.getItem(PASSWORD_KEY);

  const currentPassword = savedPassword
    ? savedPassword.trim()
    : DEFAULT_PASSWORD;

  if (password.trim() === currentPassword) {
    setError("");
    setPassword("");
    onSuccess();
  } else {
    setError("Şifre hatalı.");
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#070b14",
          border: "1.5px solid #ffd700",
          borderRadius: "10px",
          padding: "24px",
        }}
      >
        <h2
          style={{
            color: "#ffd700",
            textAlign: "center",
            marginTop: 0,
          }}
        >
          ⚙️ YÖNETİCİ GİRİŞİ
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          TÜDİTAM Yönetim Merkezi
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Yönetici şifresi"
          autoFocus
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "12px",
            marginTop: "12px",
            background: "#030712",
            border: "1px solid #475569",
            borderRadius: "6px",
            color: "#fff",
            fontSize: "14px",
          }}
        />

        {error && (
          <div
            style={{
              color: "#ef4444",
              marginTop: "8px",
              fontSize: "13px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "16px",
            padding: "11px",
            background: "#ffd700",
            color: "#000",
            border: "none",
            borderRadius: "6px",
            fontWeight: "900",
            cursor: "pointer",
          }}
        >
          🔐 GİRİŞ YAP
        </button>

        <button
          type="button"
          onClick={onCancel}
          style={{
            width: "100%",
            marginTop: "8px",
            padding: "10px",
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #475569",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ← ANA SAYFAYA DÖN
        </button>
      </form>
    </div>
  );
}