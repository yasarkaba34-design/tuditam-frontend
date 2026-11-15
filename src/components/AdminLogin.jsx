import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../data/firebase";
import { isAdminUser } from "../data/adminAccess";

export default function AdminLogin({ onSuccess, onCancel }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setBusy(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password);
      if (!isAdminUser(result.user)) {
        await signOut(auth);
        setError("Bu hesap TÜDİTAM yönetici yetkisine sahip değil.");
        return;
      }
      setPassword("");
      onSuccess();
    } catch (authError) {
      setError(`Giriş yapılamadı: ${authError.code || "bilinmeyen-hata"}`);
    } finally {
      setBusy(false);
    }
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    marginTop: "8px",
    background: "#030712",
    border: "1px solid #475569",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "16px",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#030712",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box",
    }}>
      <form onSubmit={handleSubmit} style={{
        width: "100%",
        maxWidth: "420px",
        background: "#070b14",
        border: "1.5px solid #ffd700",
        borderRadius: "10px",
        padding: "24px",
        boxSizing: "border-box",
      }}>
        <h2 style={{ color: "#ffd700", textAlign: "center", marginTop: 0 }}>
          ⚙️ TÜDİTAM YÖNETİCİ GİRİŞİ
        </h2>
        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "13px" }}>
          Firebase hesabınızla giriş yapın.
        </p>

        <label htmlFor="tuditam-admin-email">E-posta</label>
        <input
          id="tuditam-admin-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="username"
          required
          disabled={busy}
          style={inputStyle}
        />

        <label htmlFor="tuditam-admin-password" style={{ display: "block", marginTop: "16px" }}>
          Şifre
        </label>
        <input
          id="tuditam-admin-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          disabled={busy}
          style={inputStyle}
        />

        {error && <p role="alert" style={{ color: "#f87171" }}>{error}</p>}

        <button type="submit" disabled={busy} style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "#ffd700",
          color: "#000",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: busy ? "wait" : "pointer",
        }}>
          {busy ? "Giriş yapılıyor…" : "GİRİŞ YAP"}
        </button>
        <button type="button" onClick={onCancel} disabled={busy} style={{
          width: "100%",
          marginTop: "8px",
          padding: "10px",
          background: "#1e293b",
          color: "#fff",
          border: "1px solid #475569",
          borderRadius: "6px",
          cursor: "pointer",
        }}>
          ← ANA SAYFAYA DÖN
        </button>
      </form>
    </div>
  );
}
