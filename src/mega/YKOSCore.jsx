import { useEffect, useRef, useState } from "react";

export default function YKOSCore({ analysisData }) {
  const canvasRef = useRef(null);
  const heatmapRef = useRef(null);

  const [bubbles, setBubbles] = useState([]);
  const [tempChains, setTempChains] = useState({});

  // -----------------------------
  // 1) ANALYSIS → BUBBLE SYNC
  // -----------------------------
  useEffect(() => {
    if (!analysisData) return;

    const synced = analysisData.map((item, index) => {
      const { vectorAngle, phoneticMatch, atlasColor, semanticChain } = item;

      const flux = Math.abs(Math.sin(vectorAngle)) * 0.9;
      const resonance = Math.abs(Math.cos(phoneticMatch)) * 0.8;

      const dirX = Math.cos(vectorAngle);
      const dirY = Math.sin(vectorAngle);

      return {
        id: index,
        x: 400 + dirX * 100,
        y: 300 + dirY * 100,
        radius: 12 + resonance * 8,
        flux,
        resonance,
        atlasColor,
        semanticChain,
      };
    });

    setBubbles(synced);
  }, [analysisData]);

  // -----------------------------
  // 2) SEMANTIC INTERACTION
  // -----------------------------
  const applySemanticInteraction = (index) => {
    const bubble = bubbles[index];
    const original = bubble.semanticChain.at(-1);

    const next =
      original === "a" ? "e" :
      original === "e" ? "i" :
      original === "i" ? "o" :
      original === "o" ? "u" :
      original === "u" ? "a" : "a";

    setTempChains((prev) => ({ ...prev, [index]: next }));

    setTimeout(() => {
      setTempChains((prev) => ({ ...prev, [index]: original }));
    }, 500);
  };

  // -----------------------------
  // 3) MAIN VISUAL MOTOR
  // -----------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let trails = [];

    const drawEnergyLink = (x1, y1, x2, y2, intensity) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255,215,0,${0.2 + intensity})`;
      ctx.lineWidth = 2 + intensity * 3;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b, index) => {
        const lastSyllable = tempChains[index] ?? b.semanticChain.at(-1);

        const fieldStrength = b.resonance * b.flux;
        ctx.shadowBlur = fieldStrength * 12;
        ctx.shadowColor = `rgba(${b.atlasColor.r},${b.atlasColor.g},${b.atlasColor.b},0.55)`;

        const vibX = b.x + Math.sin(Date.now() * 0.15 * b.resonance) * (b.resonance * 2.2);
        const vibY = b.y + Math.cos(Date.now() * 0.15 * b.resonance) * (b.resonance * 2.2);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${b.atlasColor.r},${b.atlasColor.g},${b.atlasColor.b},0.85)`;
        ctx.arc(vibX, vibY, b.radius, 0, Math.PI * 2);
        ctx.fill();

        let dirX = 0.7;
        let dirY = 0.7;

        if ("aeıioöuü".includes(lastSyllable)) {
          dirX = 1.2;
          dirY = 0.2;
        }

        trails.push({
          x: vibX,
          y: vibY,
          radius: b.radius * (0.4 + b.flux),
          opacity: 0.55 + b.flux * 0.4,
          color: b.atlasColor,
          dirX,
          dirY,
          flux: b.flux,
        });

        if (trails.length > 300) trails.shift();
      });

      trails.forEach((t) => {
        t.opacity -= 0.008 * t.flux;
        t.x += t.dirX * 0.6;
        t.y += t.dirY * 0.6;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${t.color.r},${t.color.g},${t.color.b},${t.opacity})`;
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];

          const dx = b1.x - b2.x;
          const dy = b1.y - b2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const field1 = b1.radius * (1 + b1.resonance * 0.8);
          const field2 = b2.radius * (1 + b2.resonance * 0.8);

          if (dist < field1 + field2) {
            const intensity = (b1.resonance + b2.resonance) * (b1.flux + b2.flux) * 0.15;

            drawEnergyLink(b1.x, b1.y, b2.x, b2.y, intensity);

            applySemanticInteraction(i);
            applySemanticInteraction(j);
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [bubbles, tempChains]);

  // -----------------------------
  // 4) HEATMAP
  // -----------------------------
  useEffect(() => {
    const canvas = heatmapRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const drawHeatmap = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 20;
      const cols = canvas.width / gridSize;
      const rows = canvas.height / gridSize;

      const heat = Array.from({ length: rows }, () =>
        Array(cols).fill(0)
      );

      bubbles.forEach((b) => {
        const mapX = (b.x / window.innerWidth) * canvas.width;
        const mapY = (b.y / window.innerHeight) * canvas.height;

        const radius = b.resonance * 40;

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

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const intensity = heat[i][j];

          let color = "rgba(0,0,255,0.3)";
          if (intensity > 0.6) color = "rgba(255,0,0,0.7)";
          else if (intensity > 0.3) color = "rgba(255,165,0,0.6)";
          else if (intensity > 0.1) color = "rgba(0,255,255,0.4)";

          ctx.fillStyle = color;
          ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        }
      }

      requestAnimationFrame(drawHeatmap);
    };

    drawHeatmap();
  }, [bubbles]);

  return (
    <>
      <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", background: "black" }} />
      <canvas ref={heatmapRef} style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        width: "300px",
        height: "300px",
        background: "rgba(0,0,0,0.7)",
        border: "2px solid red",
        borderRadius: "12px",
      }} />
    </>
  );
}
