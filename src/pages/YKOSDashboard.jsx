import React from "react";
import "../style/YKOSDashboard.css";

export default function YKOSDashboard() {
  return (
    <div className="ykos-dashboard">
      <header className="ykos-header">
        <h1>YKOS Bilgi Sistemi</h1>
        <p>Disiplinler Arası Algoritmik Kültür ve Dil Veri Tabanı</p>
      </header>

      <input
        type="text"
        className="ykos-search"
        placeholder="Damga, kök hece, ülke, il veya kadim merkez ara..."
      />

      <section className="ykos-stats">
        {/* Ülkeler, Damgalar, Petroglifler, vb. */}
      </section>

      <section className="ykos-modules">
        {/* Matriksler ve Katmanlar */}
      </section>

      <section className="ykos-solutions">
        {/* YKOS Çözümleri ve İndeksler */}
      </section>
    </div>
  );
}
