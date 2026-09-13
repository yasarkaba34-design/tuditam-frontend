import React, { useEffect, useState } from "react";

export default function AtlasLabel({ text, icon, duration = 3000 }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fadeIn = setTimeout(() => setOpacity(1), 50);
    const fadeOut = setTimeout(() => setOpacity(0), duration);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [text, duration]);

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 24px",
        background: "rgba(0,0,0,0.65)",
        color: "#ffcc55",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "10px",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity,
        transition: "opacity 0.8s ease-in-out",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ fontSize: "24px" }}>{icon}</span>
      {text}
    </div>
  );
}
