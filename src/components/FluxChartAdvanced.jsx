// FILE: src/components/FluxChartAdvanced.jsx
import { useEffect, useState } from "react";
import "./flux-chart-advanced.css";

export default function FluxChartAdvanced() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/ykos-flux")
        .then((res) => res.json())
        .then((data) => {
          setDataPoints((prev) => {
            const next = [...prev, { flux: data.flux, tick: data.tick }];
            if (next.length > 100) next.shift(); // son 100 noktayı tut
            return next;
          });
        })
        .catch((err) => console.error("YKOS Flux API hatası:", err));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const width = 600;
  const height = 240;
  const padding = 30;

  const minFlux = -1;
  const maxFlux = 1;
  const minTick = Math.min(...dataPoints.map((p) => p.tick), 0);
  const maxTick = Math.max(...dataPoints.map((p) => p.tick), 100);

  const scaleX = (tick) =>
    padding +
    ((tick - minTick) / Math.max(maxTick - minTick, 1)) * (width - 2 * padding);

  const scaleYFlux = (flux) =>
    height -
    padding -
    ((flux - minFlux) / (maxFlux - minFlux)) * (height - 2 * padding);

  const fluxPath =
    dataPoints.length > 0
      ? dataPoints
          .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.tick)} ${scaleYFlux(p.flux)}`)
          .join(" ")
      : "";

  return (
    <div className="flux-advanced-container">
      <h3>YKOS Canlı Motor Akışı (Flux & Tick)</h3>
      <svg width={width} height={height} className="flux-advanced-svg">
        {/* Eksenler */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          className="axis"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          className="axis"
        />

        {/* 0 Flux referans çizgisi */}
        <line
          x1={padding}
          y1={scaleYFlux(0)}
          x2={width - padding}
          y2={scaleYFlux(0)}
          className="zero-line"
        />

        {/* Flux çizgisi */}
        {dataPoints.length > 1 && <path d={fluxPath} className="flux-line" />}

        {/* Noktalar */}
        {dataPoints.map((p, i) => (
          <circle
            key={i}
            cx={scaleX(p.tick)}
            cy={scaleYFlux(p.flux)}
            r={3}
            className={`flux-point ${p.flux > 0 ? "positive" : "negative"}`}
          />
        ))}
      </svg>

      <div className="flux-meta">
        {dataPoints.length > 0 && (
          <>
            <div>Flux: {dataPoints[dataPoints.length - 1].flux.toFixed(4)}</div>
            <div>Tick: {dataPoints[dataPoints.length - 1].tick}</div>
            <div>Veri Noktası: {dataPoints.length}</div>
          </>
        )}
      </div>
    </div>
  );
}
