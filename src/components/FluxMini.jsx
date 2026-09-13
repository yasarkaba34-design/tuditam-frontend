// FILE: src/components/FluxMini.jsx
import { useEffect, useRef } from "react";

export default function FluxMini() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 120;

    let tick = 0;
    let flux = 0;

    async function fetchFlux() {
      try {
        const res = await fetch("/api/ykos-flux");
        const data = await res.json();
        tick = data.tick;
        flux = parseFloat(data.flux);
      } catch (e) {
        console.log("Flux API bağlantı hatası");
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Arka plan
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dalga rengi (flux pozitif → altın, negatif → mor)
      ctx.strokeStyle = flux >= 0 ? "#FFD700" : "#A020F0";
      ctx.lineWidth = 2;

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y =
          60 +
          Math.sin((x + tick) * 0.03) * (flux * 40); // flux dalga yüksekliği
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Tick–Flux metni
      ctx.fillStyle = "#FFD700";
      ctx.font = "14px Segoe UI";
      ctx.fillText(`Tick: ${tick}`, 10, 20);
      ctx.fillText(`Flux: ${flux.toFixed(4)}`, 10, 40);

      requestAnimationFrame(draw);
    }

    const interval = setInterval(fetchFlux, 500);
    draw();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flux-mini-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
