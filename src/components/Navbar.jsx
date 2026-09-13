import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">

      {/* ÜST BAR */}
      <div className="navbar-top">

        {/* Logo + Altın Çizgi */}
        <div className="logo-area">
          <div className="logo">YKOS</div>
          <div className="logo-line" />
        </div>

        {/* Tek Tuş (DİLGİBİ) */}
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          DİLGİBİ
        </button>
      </div>

      {/* MENÜ PANELİ */}
      <div className={`menu-panel ${open ? "open" : ""}`}>

        {/* Dil Seçici */}
        <div className="language-select">
          <button>TR</button>
          <button>EN</button>
        </div>

        {/* Ana Menü */}
        <ul className="menu-list">
          <li>Kurumsal</li>
          <li>YKOS Metodolojisi</li>
          <li>Kök Hece Matrisi</li>
          <li>Damga Atlası</li>
          <li>Göç & Akış Haritası</li>
          <li>Semantik Motor</li>
        </ul>
      </div>
    </div>
  );
}
