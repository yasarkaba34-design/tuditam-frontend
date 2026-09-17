import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase";

export default function AdminLogin({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    await signInWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );
  } catch (err) {
    console.error("Yönetici giriş hatası:", err);
    setError(`Firebase hatası: ${err.code || err.message}`);
  } finally {
    setLoading(false);
  }
};
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#030712",
        color: "#fff",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "24px",
          background: "#070b16",
          border: "1.5px solid #ffd700",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            color: "#ffd700",
            textAlign: "center",
            marginTop: 0,
          }}
        >
          YKOS YÖNETİCİ GİRİŞİ
        </h2>

        <label style={{ color: "#ffd700", fontSize: "0.85rem" }}>
          E-posta
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            margin: "6px 0 14px",
            padding: "10px",
            color: "#fff",
            background: "#030712",
            border: "1px solid #475569",
            borderRadius: "6px",
          }}
        />

        <label style={{ color: "#ffd700", fontSize: "0.85rem" }}>
          Şifre
        </label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            margin: "6px 0 14px",
            padding: "10px",
            color: "#fff",
            background: "#030712",
            border: "1px solid #475569",
            borderRadius: "6px",
          }}
        />

        {error && (
          <div
            style={{
              color: "#f87171",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            background: "#ffd700",
            color: "#000",
            border: "none",
            borderRadius: "6px",
            fontWeight: "900",
            cursor: "pointer",
          }}
        >
          {loading ? "GİRİŞ YAPILIYOR..." : "GİRİŞ YAP"}
        </button>

        <button
          type="button"
          onClick={onBack}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "9px",
            background: "#334155",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Ana Sayfaya Dön
        </button>
      </form>
    </div>
  );
}