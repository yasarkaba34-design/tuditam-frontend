import { useEffect, useState } from "react";
import "./FluxPanel.css";

export default function FluxPanel() {
  const [flux, setFlux] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      console.log("Flux event geldi:", e.detail);
      setFlux(e.detail);
    };

    document.addEventListener("flux-start", handler);
    return () => document.removeEventListener("flux-start", handler);
  }, []);

  if (!flux) {
    return (
      <div className="flux-panel">
        <h2>Flux Motoru</h2>
        <p>Bir düğüm seçildiğinde semiyotik akış burada belirecek.</p>
      </div>
    );
  }

  return (
    <div className="flux-panel">
      <h2>Semiyotik Akış</h2>

      <div className="flux-block">
        <strong>Başlık:</strong> {flux.title}
      </div>

      <div className="flux-block">
        <strong>Kök:</strong> {flux.root}
      </div>

      <div className="flux-block">
        <strong>Kavram:</strong> {flux.concept}
      </div>

      <div className="flux-block">
        <strong>Damga Zinciri:</strong>
        <div className="flux-chain">
          {flux.chain?.map((item, i) => (
            <span key={i} className="flux-item">{item}</span>
          ))}
        </div>
      </div>

      <div className="flux-block">
        <strong>Kozmolojik Yorum:</strong>
        <p>{flux.cosmic}</p>
      </div>
    </div>
  );
}
