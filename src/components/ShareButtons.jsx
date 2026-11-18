import React, { useState } from "react";

const iconButtonStyle = {
  width: "38px",
  height: "38px",
  borderRadius: "6px",
  display: "inline-grid",
  placeItems: "center",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 900,
  cursor: "pointer",
  boxSizing: "border-box"
};

export default function ShareButtons({ title = "" }) {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(title || "YKOS yayını");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      const input = document.createElement("textarea");
      input.value = pageUrl;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const directShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: title || "YKOS yayını", url: pageUrl });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    await copyLink();
  };

  return (
    <div
      aria-label="İçeriği sosyal medyada paylaş"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        margin: "0 0 20px"
      }}
    >
      <span style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: 800, marginRight: "2px" }}>
        PAYLAŞ
      </span>
      <button
        type="button"
        onClick={directShare}
        aria-label="Doğrudan paylaş"
        title="Doğrudan paylaş"
        style={{
          minHeight: "38px",
          padding: "0 13px",
          borderRadius: "19px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "#b8860b",
          border: "1px solid #ffd700",
          color: "#fff",
          fontSize: "0.78rem",
          fontWeight: 900,
          cursor: "pointer"
        }}
      >
        📤 Direkt Paylaş
      </button>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook'ta paylaş"
        title="Facebook'ta paylaş"
        style={{ ...iconButtonStyle, background: "#1877f2", border: "1px solid #60a5fa" }}
      >
        f
      </a>
      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'ta paylaş"
        title="WhatsApp'ta paylaş"
        style={{ ...iconButtonStyle, background: "#25d366", border: "1px solid #86efac" }}
      >
        ◉
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X'te paylaş"
        title="X'te paylaş"
        style={{ ...iconButtonStyle, background: "#111827", border: "1px solid #64748b" }}
      >
        X
      </a>
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram'da paylaş"
        title="Telegram'da paylaş"
        style={{ ...iconButtonStyle, background: "#229ed9", border: "1px solid #7dd3fc" }}
      >
        ➤
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn'de paylaş"
        title="LinkedIn'de paylaş"
        style={{ ...iconButtonStyle, background: "#0a66c2", border: "1px solid #60a5fa", fontSize: "0.82rem" }}
      >
        in
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Bağlantıyı kopyala"
        title="Bağlantıyı kopyala"
        style={{ ...iconButtonStyle, background: "#0e7490", border: "1px solid #22d3ee" }}
      >
        🔗
      </button>
      <span role="status" aria-live="polite" style={{ color: copied ? "#86efac" : "transparent", fontSize: "0.75rem", fontWeight: 700 }}>
        {copied ? "Bağlantı kopyalandı" : "."}
      </span>
    </div>
  );
}
