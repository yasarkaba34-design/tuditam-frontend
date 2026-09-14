import { useEffect, useRef } from "react";

export default function YKOSHeatmap({ bubbles }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Heatmap grid
      const gridSize = 20;
      const cols = canvas.width / gridSize;
      const rows = canvas.height / gridSize;

      const heat = Array.from({ length: rows }, () =>
        Array(cols).fill(0)
      );

      // Rezonans alanlarını grid'e dağıt
      bubbles.forEach((b) => {
        const { x, y, resonance } = b;

        const mapX = (x / window.innerWidth) * canvas.width;
        const mapY = (y / window.innerHeight) * canvas.height;

        const radius = resonance * 40;

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const cellX = j * gridSize + gridSize / 2;
            const cellY = i * gridSize + gridSize / 2;

            const dx = cellX - mapX;
            const dy = cellY - mapY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < radius) {
              heat[i][j] += (radius - dist) / radius;
            }
          }
        }
      });

      // Heatmap çizimi
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const intensity = heat[i][j];

          let color = "rgba(0,0,255,0.3)"; // düşük yoğunluk (mavi)

          if (intensity > 0.6) {
            color = "rgba(255,0,0,0.7)"; // yüksek yoğunluk (kırmızı)
          } else if (intensity > 0.3) {
            color = "rgba(255,165,0,0.6)"; // orta yoğunluk (turuncu)
          } else if (intensity > 0.1) {
            color = "rgba(0,255,255,0.4)"; // düşük-orta (cyan)
          }

          ctx.fillStyle = color;
          ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [bubbles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        width: "300px",
        height: "300px",
        background: "rgba(0,0,0,0.7)",
        border: "2px solid red",
        borderRadius: "12px",
      }}
    />
  );
}
