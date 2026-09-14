// FILE: src/os/WindowManager.jsx

import React, { useState } from "react";

export default function WindowManager({ children }) {
  const [windows, setWindows] = useState(
    React.Children.map(children, (child, index) => ({
      id: index,
      title: child.props.title || `Window ${index + 1}`,
      x: 80 + index * 40,
      y: 80 + index * 40,
      visible: true,
      content: child
    }))
  );

  const toggleWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, visible: !w.visible } : w
      )
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Üst menü */}
      <div
        style={{
          background: "#111",
          color: "gold",
          padding: "10px",
          borderBottom: "1px solid gold",
          display: "flex",
          gap: "20px"
        }}
      >
        {windows.map((w) => (
          <button
            key={w.id}
            onClick={() => toggleWindow(w.id)}
            style={{
              background: w.visible ? "gold" : "#333",
              color: w.visible ? "#000" : "gold",
              border: "none",
              padding: "8px 12px"
            }}
          >
            {w.title}
          </button>
        ))}
      </div>

      {/* Pencereler */}
      {windows.map(
        (w) =>
          w.visible && (
            <div
              key={w.id}
              style={{
                position: "absolute",
                left: w.x,
                top: w.y,
                width: "420px",
                background: "#000",
                color: "gold",
                border: "1px solid gold",
                boxShadow: "0 0 20px gold",
                padding: "10px"
              }}
            >
              <h3>{w.title}</h3>
              <div>{w.content}</div>
            </div>
          )
      )}
    </div>
  );
}
