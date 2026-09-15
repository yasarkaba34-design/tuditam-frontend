// src/mega/BubbleMatrixView.jsx
import React, { useEffect } from "react";
import { useYKOS } from "../../hooks/useYKOS";

export const BubbleMatrixView = () => {
  const ykos = useYKOS();

  useEffect(() => {
    if (!ykos) return;

    // YKOS çekirdeğini başlat
    ykos.startLoop();

    // Canvas referansı
    const canvas = document.getElementById("bubble-matrix");
    const ctx = canvas.getContext("2d");

    // Pipeline verisini al
    const pipeline = ykos.pipeline;
    if (!pipeline || !pipeline.atlas) return;

    const coords = pipeline.atlas.coordinates || [];
    const phonetic = pipeline.evaluator.chain || [];

    // Çizim fonksiyonu
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Arka plan
      ctx.fillStyle = "#050811";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Baloncuklar (fonetik zincir)
      coords.forEach((coord, index) => {
        const x = 100 + index * 120;
        const y = 300 + Math.sin(index) * 40;

        ctx.beginPath();
        ctx.arc(x, y, 35, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 215, 0, 0.25)";
        ctx.fill();
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#ffd700";
        ctx.font = "16px Segoe UI";
        ctx.textAlign = "center";
        ctx.fillText(phonetic[index] || coord.id, x, y + 5);
      });

      // Flux çizgileri
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;

      coords.forEach((coord, index) => {
        if (index === 0) return;
        const x1 = 100 + (index - 1) * 120;
        const y1 = 300 + Math.sin(index - 1) * 40;

        const x2 = 100 + index * 120;
        const y2 = 300 + Math.sin(index) * 40;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
    }

    draw();

    return () => {
      ykos.stopLoop();
    };
  }, [ykos]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10px"
      }}
    >
      <canvas
        id="bubble-matrix"
        width={800}
        height={600}
        style={{
          maxWidth: "100%",
          height: "auto",
          border: "1px solid #ffd700",
          borderRadius: "8px",
          background: "#050811"
        }}
      />
    </div>
  );
};
