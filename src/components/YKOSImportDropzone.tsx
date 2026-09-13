import React, { useState, useCallback } from "react";
import { YKOSImportRAW } from "@/ykos-core/Core";

export default function YKOSImportDropzone({ onLoad }) {
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
        border: "2px dashed #888",
        padding: "40px",
        textAlign: "center",
        borderRadius: "12px",
        background: isDragging ? "#f0f0f0" : "#fff",
        transition: "0.2s",
      }}
    >
      {isDragging
        ? "Bırak yükleyeyim…"
        : ".ykos dosyasını buraya sürükle ve bırak"}
    </div>
  );
}
