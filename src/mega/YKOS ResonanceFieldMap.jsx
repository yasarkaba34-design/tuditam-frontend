import { useEffect, useRef } from "react";

export default function YKOSResonanceFieldMap({ bubbles }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        const { x, y, resonance, atlasColor } = b;

        // Mini harita ölçekleme
        const mapX = (x / window.innerWidth) * canvas.width;
        const mapY = (y / window.innerHeight) * canvas.height;

        const fieldRadius = 8 + resonance * 20;

        // Rezonans alanı (soft glow)
        const gradient = ctx.createRadialGradient(
          mapX,
          mapY,
          0,
          mapX,
          mapY,
          fieldRadius
        );

        gradient.addColorStop(
          0,
          `rgba(${atlasColor.r}, ${atlasColor.g}, ${atlasColor.b}, 0.55)`
        );
        gradient.addColorStop(
          1,
          `rgba(${atlasColor.r}, ${atlasColor.g}, ${atlasColor.b}, 0)`
        );

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(mapX, mapY, fieldRadius, 0, Math.PI * 2);
        ctx.fill();

        // Balon noktası
        ctx.beginPath();
        ctx.fillStyle = `rgba(${atlasColor.r}, ${atlasColor.g}, ${atlasColor.b}, 1)`;
        ctx.arc(mapX, mapY, 3, 0, Math.PI * 2);
        ctx.fill();
      });

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
        right: 20,
        width: "300px",
        height: "300px",
        background: "rgba(0,0,0,0.7)",
        border: "2px solid gold",
        borderRadius: "12px",
      }}
    />
  );
}
