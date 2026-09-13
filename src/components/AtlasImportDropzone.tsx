import React, { useState, useCallback } from "react";
import { YKOSImportRAW } from "@/ykos-core/Core";

export default function AtlasImportDropzone({ onLoad }) {
  const [isDragging, setDragging] = useState(false);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file || !file.name.endsWith(".ykos")) return;

    const payload = await YKOSImportRAW(file);
    if (payload) onLoad(payload);
  }, [onLoad]);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: isDragging ? "3px dashed #ffaa00" : "3px dashed transparent",
        borderRadius: "12px",
        background: isDragging ? "rgba(255, 200, 0, 0.15)" : "transparent",
        transition: "0.2s",
        zIndex: 999,
      }}
    >
      {isDragging && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#ffaa00",
            background: "rgba(0,0,0,0.6)",
            padding: "20px 40px",
            borderRadius: "12px",
          }}
        >
          .ykos dosyasını AtlasMap üzerine bırak
        </div>
      )}
    </div>
  );
}
